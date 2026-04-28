import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  services?: string[];
};

const SERVICE_LABELS: Record<string, string> = {
  website: "Svetainė",
  seo: "Vietinis SEO",
  reviews: "Google atsiliepimai",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmail({
  name,
  email,
  phone,
  message,
  services,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
}) {
  const serviceList = services
    .map((s) => SERVICE_LABELS[s] ?? s)
    .map((s) => `<li style="margin: 0 0 4px 0;">${escapeHtml(s)}</li>`)
    .join("");

  const safeName = escapeHtml(name || "—");
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "—";
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="lt"><head><meta charset="utf-8"></head><body>
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #0a0a0b;">
      <h2 style="font-size: 20px; font-weight: 500; margin: 0 0 24px 0; color: #0a0a0b;">
        Naujas užklausimas iš svetainės
      </h2>

      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 10px 0; color: #71717a; width: 130px; vertical-align: top;">Vardas</td>
          <td style="padding: 10px 0; color: #0a0a0b;">${safeName}</td>
        </tr>
        <tr style="border-top: 1px solid #e4e4e7;">
          <td style="padding: 10px 0; color: #71717a; vertical-align: top;">El. paštas</td>
          <td style="padding: 10px 0;"><a href="mailto:${safeEmail}" style="color: #8a96c4; text-decoration: none;">${safeEmail}</a></td>
        </tr>
        <tr style="border-top: 1px solid #e4e4e7;">
          <td style="padding: 10px 0; color: #71717a; vertical-align: top;">Telefonas</td>
          <td style="padding: 10px 0; color: #0a0a0b;">${safePhone}</td>
        </tr>
        <tr style="border-top: 1px solid #e4e4e7;">
          <td style="padding: 10px 0; color: #71717a; vertical-align: top;">Paslaugos</td>
          <td style="padding: 10px 0; color: #0a0a0b;">
            <ul style="margin: 0; padding-left: 18px;">${serviceList}</ul>
          </td>
        </tr>
        <tr style="border-top: 1px solid #e4e4e7;">
          <td style="padding: 10px 0; color: #71717a; vertical-align: top;">Žinutė</td>
          <td style="padding: 10px 0; color: #0a0a0b; line-height: 1.55;">${safeMessage}</td>
        </tr>
      </table>

      <p style="margin: 24px 0 0 0; font-size: 12px; color: #a1a1aa;">
        Atsakydami šiam laiškui rašysite tiesiai į kliento dėžutę.
      </p>
    </div>
  </body></html>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("[contact] missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "Server is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();
  const services = Array.isArray(body.services) ? body.services : [];

  if (!email || !email.includes("@") || !message) {
    return NextResponse.json(
      { error: "Trūksta el. pašto arba žinutės." },
      { status: 400 },
    );
  }

  const serviceLabels = services.map((s) => SERVICE_LABELS[s] ?? s);
  const subject =
    serviceLabels.length > 0
      ? `Naujas užklausimas — ${serviceLabels.join(", ")}`
      : "Naujas užklausimas iš svetainės";

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      // Use Resend's verified test sender until arktivmedia.com DNS is set up.
      from: "Arktiv Media <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject,
      html: renderEmail({ name, email, phone, message, services }),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Nepavyko išsiųsti." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { error: "Įvyko nenumatyta klaida." },
      { status: 500 },
    );
  }
}
