import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const metadata = {
  title: "Taisyklės ir sąlygos — Arktiv Media",
};

export default function TermsPage() {
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
                Taisyklės ir{" "}
                <span
                  className="italic"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#E8E4DA",
                  }}
                >
                  sąlygos.
                </span>
              </h1>

              <p
                className="font-[var(--font-inter)] font-light mb-12"
                style={{ fontSize: "14px", color: "#71717a" }}
              >
                Paskutinį kartą atnaujinta: 2026 m. balandžio 29 d.
              </p>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  1. Paslaugų teikimas
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  „Arktiv Media“ (Vilnius, Lietuva) teikia interneto svetainių
                  kūrimo, vietinio SEO ir Google atsiliepimų valdymo paslaugas.
                  Visos paslaugos teikiamos tiesiogiai — be tarpininkų.
                </p>
              </section>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  2. Kainodara ir atsiskaitymas
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Kainos nurodytos svetainėje: svetainės sukūrimas — 350 €
                  (vienkartinis mokestis) + 50 €/mėn. už talpinimą, saugumą ir
                  techninę priežiūrą; vietinis SEO — 150 €/mėn.; „Google“
                  atsiliepimų valdymas — nuo 49 €/mėn. Tiksli projekto apimtis
                  ir apmokėjimo sąlygos aptariamos bei patvirtinamos pirminio
                  pokalbio metu prieš pradedant darbus.
                </p>
              </section>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  3. Projekto vykdymas
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Svetainės paleidžiame per 1–2 savaites nuo pirmojo pokalbio.
                  SEO ir atsiliepimų sistemos rezultatai paprastai matomi per
                  30–90 dienų. Klientas įsipareigoja savalaikiai pateikti visą
                  projektui reikalingą informaciją, įskaitant prieigą prie
                  „Google“ verslo profilio.
                </p>
              </section>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  4. Atsakomybė ir rezultatai
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Įsipareigojame teikti paslaugas kokybiškai ir laiku. Nors
                  taikome patikrintas strategijas pozicijoms „Google“ ir
                  pardavimams didinti, konkretūs rezultatai priklauso nuo
                  daugelio rinkos veiksnių — konkurencijos, nišos, esamos
                  svetainės būklės.
                  <br />
                  <br />
                  Tikslas pasiekti „Google“ Top 3 Jūsų mieste per 90 dienų
                  taikomas tik tuomet, kai vienu metu užsakomos vietinio SEO
                  ir „Google“ atsiliepimų valdymo paslaugos. Užsisakius tik
                  vieną iš šių paslaugų atskirai, terminas ir pasiekiamos
                  pozicijos gali skirtis priklausomai nuo nišos
                  konkurencingumo. Tikslias prognozes pateikiame nemokamo
                  audito metu.
                </p>
              </section>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  5. Rezultato garantija
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Jei klientas vienu metu užsako vietinio SEO ir „Google“
                  atsiliepimų valdymo paslaugas ir per 90 dienų nuo darbų
                  pradžios nepasiekia „Google“ Top 3 pozicijos savo mieste pagal
                  iš anksto suderintus pagrindinius raktinius žodžius — toliau
                  dirbame nemokamai tol, kol pažadėtas rezultatas pasiekiamas.
                  Mėnesinis mokestis sustabdomas iki tol, kol pozicija realiai
                  pakyla į Top 3.
                  <br />
                  <br />
                  Garantija galioja, kai klientas savalaikiai suteikia prieigą
                  prie „Google“ verslo profilio, svetainės bei reikalingos
                  informacijos ir nesinaudoja kitų SEO ar atsiliepimų agentūrų
                  paslaugomis tuo pačiu laikotarpiu. Tikslias garantijos sąlygas
                  raštu patvirtiname prieš pradedant darbus.
                </p>
              </section>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  6. Intelektinė nuosavybė
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Įvykdžius visą apmokėjimą, visa sukurta medžiaga (tekstai,
                  dizaino failai, svetainės kodas) pereina kliento nuosavybėn.
                  „Arktiv Media“ pasilieka teisę parodyti projektą portfolio
                  tikslais.
                </p>
              </section>

              <section className="mb-10">
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  7. Sutarties nutraukimas
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Mėnesinio mokesčio paslaugas (svetainės priežiūra, vietinis
                  SEO, atsiliepimų valdymas) galima sustabdyti bet kada,
                  įspėjus prieš 30 dienų. Jau atliktas darbas nėra grąžinamas.
                  Ilgalaikių sutarčių nereikalaujame.
                </p>
              </section>

              <section>
                <h2
                  className="font-[var(--font-inter)] font-normal mb-4"
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                >
                  8. Kontaktinė informacija
                </h2>
                <p
                  className="font-[var(--font-inter)] font-light"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#A0A0A0",
                  }}
                >
                  Iškilus klausimams, prašome susisiekti:{" "}
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
