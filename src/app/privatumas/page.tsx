import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const metadata = {
  title: "Privatumo politika — Arktiv Media",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <AuroraBackground className="overflow-hidden bg-black min-h-0">
        {/* Radial wash — matches Hero */}
        <div
          className="absolute inset-0 z-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#0a0a0b_40%,#2d3866_100%)] opacity-60 pointer-events-none"
          aria-hidden
        />

        <main
          id="main-content"
          className="relative z-10 w-full pt-32 md:pt-40 pb-24"
        >
          <Container>
            <article className="max-w-3xl mx-auto">
              <h1
                className="font-[var(--font-inter)] font-normal mb-6"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                }}
              >
                Privatumo{" "}
                <span
                  className="italic"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#E8E4DA",
                  }}
                >
                  politika.
                </span>
              </h1>

              <p
                className="font-[var(--font-inter)] font-light mb-12"
                style={{ fontSize: "14px", color: "#71717a" }}
              >
                Paskutinį kartą atnaujinta: 2026 m. balandžio 28 d.
              </p>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  1. Bendrosios nuostatos
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Ši privatumo politika nustato, kaip „Arktiv Media“ (Vilnius,
                  Lietuva) renka ir naudoja Jūsų asmens duomenis. Mes gerbiame
                  Jūsų privatumą ir įsipareigojame saugoti Jūsų pateiktą
                  informaciją.
                </p>
              </section>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  2. Kokie duomenys renkami?
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Asmens duomenis (vardą, el. pašto adresą, telefono numerį,
                  pasirinktas paslaugas, Jūsų pateiktą pranešimą) renkame tik
                  tuo atveju, jei juos savanoriškai pateikiate užpildę
                  kontaktinę formą.
                  <br />
                  <br />
                  Svetainėje nenaudojami rinkodaros ar sekimo slapukai. Anoniminė
                  statistika apie apsilankymus ir svetainės našumą (puslapių
                  peržiūros, šaltiniai, puslapio krovimosi greitis, sąveikos
                  vėlavimas) renkama per „Vercel Analytics“ ir „Vercel Speed
                  Insights“ — be slapukų ir asmens identifikatorių. Šie duomenys
                  naudojami išskirtinai svetainės kokybės gerinimui.
                </p>
              </section>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  3. Duomenų naudojimas
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Jūsų pateikti duomenys naudojami tik tam, kad galėtume su
                  jumis susisiekti ir atsakyti į užklausas dėl paslaugų — tarp
                  jų atsiųsti nemokamą svetainės maketą, vietinio SEO ir
                  „Google“ atsiliepimų auditą bei (pasirinkus vietinio SEO
                  paslaugą) asmeninį 3 min. video.
                  <br />
                  <br />
                  Svetainė talpinama „Vercel Inc.“ (JAV) infrastruktūroje.
                  Kontaktinės formos pranešimai pristatomi į „Arktiv Media“
                  pašto dėžutę naudojant „Resend“ (JAV) el. pašto pristatymo
                  paslaugą. Abu paslaugų teikėjai laikosi BDAR reikalavimų ir
                  taiko standartines duomenų apsaugos priemones. Jūsų duomenys
                  nėra parduodami ar perduodami trečiosioms šalims rinkodaros
                  tikslais.
                </p>
              </section>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  4. Duomenų saugojimas
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Jūsų pateiktus duomenis saugome tol, kol to reikia užklausai
                  aptarnauti arba paslaugos sutarčiai vykdyti. Baigus
                  bendradarbiavimą, duomenys saugomi tik įstatymų nustatyta
                  tvarka.
                </p>
              </section>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  5. Jūsų teisės
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Pagal BDAR turite teisę susipažinti su savo duomenimis,
                  prašyti juos ištaisyti arba ištrinti, apriboti duomenų
                  tvarkymą, taip pat nesutikti su duomenų tvarkymu. Norėdami
                  pasinaudoti šiomis teisėmis, susisiekite el. paštu.
                </p>
              </section>

              <section>
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  6. Susisiekite
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Jei turite klausimų dėl savo duomenų, prašome kreiptis el.
                  paštu:{" "}
                  <a
                    href="mailto:lukas@arktivmedia.com"
                    style={{ color: "#8a96c4" }}
                  >
                    lukas@arktivmedia.com
                  </a>
                  .
                </p>
              </section>
            </article>
          </Container>
        </main>
      </AuroraBackground>
      <Footer />
    </>
  );
}
