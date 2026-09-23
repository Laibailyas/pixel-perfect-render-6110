import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import apresImage from "@/assets/apres-ski.jpg";
import skatesImage from "@/assets/ice-skates.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kerstmarkt Oostende | Wintermagie aan zee" },
      { name: "description", content: "Ontdek Kerstmarkt Oostende: winterse gezelligheid, schaatsplezier en een feestelijk programma op twee pleinen." },
      { property: "og:title", content: "Kerstmarkt Oostende" },
      { property: "og:description", content: "Wintermagie in het hart van Oostende." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const weekEvents: Record<number, string[][]> = {
  1: [["01", "Kerstmarkt opent"], ["02", "Live muziek"], ["03", "Kinderanimatie"], ["04", "Oktoberfest"], ["05", "Kerstman op bezoek"], ["06", "Ballonplooien"], ["07", "Sint & Piet op bezoek"]],
  2: [["08", "Ballonplooien"], ["09", "Oktoberfest"], ["10", "Après Ski"], ["11", "Kerstman op bezoek"], ["12", "Oktoberfest"], ["13", "Kerstman op bezoek"], ["14", "Live muziek"]],
  3: [["15", "Sint & Piet op bezoek"], ["16", "Kerstkaraoke"], ["17", "Oktoberfest"], ["18", "Après Ski"], ["19", "Kerstman op bezoek"], ["20", "Ballonplooien"], ["21", "Live muziek"]],
  4: [["07", "Sint & Piet op bezoek"], ["08", "Ballonplooien"], ["09", "Oktoberfest"], ["10", "Après Ski"], ["11", "Kerstman op bezoek"], ["12", "Oktoberfest"], ["13", "Kerstman op bezoek"]],
  5: [["14", "Live muziek"], ["15", "Kerstman op bezoek"], ["16", "Oktoberfest"], ["17", "Après Ski"], ["18", "Kerstkaraoke"], ["19", "Ballonplooien"], ["20", "Sint & Piet op bezoek"]],
};

const faqItems = [
  ["Wat zijn de openingsuren van de Kerstmarkt?", "De kerstmarkt is dagelijks open van 11:00 tot 22:00 uur. In het weekend blijven we open tot 23:00 uur."],
  ["Moet ik attracties op voorhand reserveren?", "Voor de meeste attracties is reserveren niet nodig. Voor groepen en specifieke activiteiten raden we aan vooraf contact op te nemen."],
  ["Wat is de kostprijs van de schaatsbaan?", "Een schaatsbeurt kost €6 voor kinderen tot 12 jaar en €9 voor volwassenen. Groepstarieven en UitPAS-tarieven zijn ook beschikbaar."],
  ["Zijn honden welkom op de Kerstmarkt?", "Ja, honden zijn welkom op onze Kerstmarkt! Hou je hond wel de hele tijd kort aan de leiband en denk eraan dat het in de avonduren en tijdens het weekend erg druk kan zijn."],
  ["Is de Kerstmarkt toegankelijk voor rolstoelgebruikers?", "De pleinen en de belangrijkste doorgangen zijn toegankelijk voor rolstoelgebruikers."],
];

const heroLogos = ["Logo 01", "Logo 02", "Logo 03", "Logo 04", "Logo 05", "Logo 06", "Logo 07", "Logo 08"];

function Index() {
  const [activeWeek, setActiveWeek] = useState(3);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="winter-panel relative min-h-[760px] text-primary-foreground">
        <div className="hero-bg-dots" aria-hidden="true" />
        <header className="relative z-20 mx-auto max-w-6xl px-5 pt-5">
          <div className="relative flex items-center justify-between gap-6">
            <img src="/logo.png" alt="Kerstmarkt Oostende" className="h-auto w-40" />
            <div className="header-status hidden lg:flex">
              <span>Dagelijks van 11:00 tot 22:00 uur, in het weekend tot 23:00 uur.</span>
              <span className="header-status-label">Nu Gesloten</span>
            </div>
            <Button variant="snow" onClick={() => scrollTo("contact")} className="h-10 px-5 text-xs">Contacteer ons</Button>
            <Button variant="ghostLight" size="icon" className="lg:hidden" aria-label="Menu openen" onClick={() => setMenuOpen(!menuOpen)}>☰</Button>
          </div>
          <nav className={`${menuOpen ? "flex" : "hidden"} mt-5 flex-col items-center gap-5 border-b border-line-dark py-4 text-sm lg:flex lg:flex-row lg:justify-center lg:border-0`}>
            {([[
              "Locaties", "locaties"
            ], ["Programma", "programma"], ["Schaatspiste", "schaatsen"], ["FAQ", "faq"], ["Sponsors", "sponsors"], ["Contact", "contact"]] as const).map(([label,id]) =>
              <button key={id} onClick={() => scrollTo(id)} className="cursor-pointer transition-colors hover:text-sky">{label}</button>
            )}
          </nav>
        </header>
        <div className="pointer-events-none absolute top-[76px] z-10 hidden h-[76px] w-full text-line-dark lg:block" aria-hidden="true">
          <svg viewBox="0 0 1440 76" preserveAspectRatio="none" className="h-full w-full fill-none">
            <path d="M0 22 H260 C280 22 292 31 292 48 C292 66 304 74 326 74 H1114 C1136 74 1148 66 1148 48 C1148 31 1160 22 1180 22 H1440" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <img src="/frame-8.png" alt="" aria-hidden="true" className="hero-frame-decoration pointer-events-none absolute right-[-70px] top-[95px] z-[1] hidden h-[680px] w-[480px] object-contain lg:block" />
        <div className="snow-layer absolute inset-0 z-0" />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-3xl flex-col items-center justify-center px-5 pb-8 pt-12 text-center">
          <div className="hero-title-tilt">
            <p className="mb-4 text-sm italic md:text-base">27 november - 3 januari</p>
            <h1 className="font-display text-[46px] leading-[1.02] md:text-[64px]">
              <strong className="font-semibold text-sky">Kerstmagie</strong> <em className="font-normal">in het</em><br />
              <em className="font-normal">hart van</em> <strong className="font-semibold text-sky">Oostende</strong>
            </h1>
          </div>
          <div className="hero-actions mt-10 flex items-center justify-center gap-4">
            <button type="button" onClick={() => scrollTo("programma")} className="hero-image-button hero-program-image cursor-pointer" aria-label="Ontdek het programma">
              <img src="/hero-program-button.png" width="229" height="57" alt="Ontdek het programma" />
            </button>
            <button type="button" onClick={() => scrollTo("schaatsen")} className="hero-image-button hero-skate-image cursor-pointer" aria-label="Schaatspiste boeken">
              <img src="/hero-skate-button.png" width="214" height="57" alt="Schaatspiste boeken" />
            </button>
          </div>
        </div>
        <div className="relative top-[-24px] z-10 w-full overflow-hidden pb-16">
          <div className="logo-marquee flex w-max">
            {[0, 1].map((copy) => <div key={copy} className="flex shrink-0 gap-16 pr-16 md:gap-20 md:pr-20" aria-hidden={copy === 1}>
              {heroLogos.map((name) => <div key={`${copy}-${name}`} className="flex h-11 w-32 shrink-0 items-center justify-center rounded-md border border-dashed border-line-dark bg-surface-dark text-xs text-muted-blue">{name}</div>)}
            </div>)}
          </div>
        </div>
        <div className="wave-bottom" />
      </section>

      <section id="locaties" className="relative flex min-h-screen items-center bg-paper px-5 pb-32 pt-28 text-ink">
        <div className="locaties-dots" aria-hidden="true" />
        <div className="landmark-block landmark-left" aria-hidden="true">
          <img src="/landmark-pavilion.png" alt="" className="landmark-image" />
        </div>
        <div className="landmark-block landmark-right" aria-hidden="true">
          <img src="/landmark-church.png" alt="" className="landmark-image" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center font-display text-xl leading-relaxed md:text-2xl">
          <p>Schaatsen tot je wangen gloeien, warme chocomelk<br />tussen de chalets en muziek die over het plein waait.</p>
          <p className="mt-7">Van <strong>27 november t.e.m. 3 januari</strong>, op het<br /><strong>Wapenplein</strong> en het <strong>Sint-Petrus-en-Paulusplein.</strong></p>
          <Button className="mt-7" onClick={() => scrollTo("pleinen")}>Ontdek onze pleinen</Button>
        </div>
      </section>

      <section id="pleinen" className="bg-paper px-5 pb-28 text-ink">
        <h2 className="mb-14 text-center font-display text-4xl leading-none">Twee pleinen, <span className="text-sky">zeven<br />minuten</span> wandelen</h2>
        <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-[.9fr_1.1fr]">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[450px]">
            <img src={activeLocation ? locationMapSrc(activeLocation) : "/maps/north-pole-map.png"} loading="lazy" width={768} height={1024} alt="Geïllustreerde kerstmarktkaart" className="absolute inset-0 h-full w-full object-contain mix-blend-multiply" />
          </div>
          <div className="space-y-6">
            <LocationCard locationId="wapenplein" onLocationHover={setActiveLocation} title="Wapenplein" tags="CARROUSEL · ATTRACTIE · DRANKCHALETS · WINKELS · KIOSK" text="In de almhütte waan je je onmiddellijk op de skipiste, met elke avond een dj of optreden om de beste après ski hits op je los te laten." />
            <LocationCard locationId="sint-petrus" onLocationHover={setActiveLocation} title="Sint-Petrus-en-Paulusplein" tags="CHALET PALETTE · KINDERANIMATIE · SCHAATSPISTE" text="Winterpret voor de kleinsten: chalets met lekkernijen, warme chocomelk en een schaatspiste als extra, aan de voet van de kerk." />
          </div>
        </div>
      </section>

      <section id="programma" className="program-section winter-panel snow-layer relative px-5 pb-32 pt-32 text-primary-foreground">
        <div className="program-top-dots" aria-hidden="true" />
        <div className="wave-top-paper" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="text-center font-display text-5xl">Een programma vol <span className="text-sky">magie</span></h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs">
            <Button variant="winterOutline">Wapenplein</Button><Button variant="ghostLight">Sint-Petrus-en-Paulusplein</Button>
          </div>
          <div className="mt-5 flex justify-center gap-3">
            {[1,2,3,4,5].map((w) => <Button key={w} variant={activeWeek === w ? "winterOutline" : "ghostLight"} size="sm" onClick={() => setActiveWeek(w)}>Week {w}</Button>)}
          </div>
          <div className="mt-14 grid gap-16 md:grid-cols-2">
            <div>{weekEvents[activeWeek].map(([date,title],i) => <div key={`${activeWeek}-${date}`} className={`event-row grid grid-cols-[55px_1fr] border-b border-line-dark px-5 py-3 ${i===3 ? "bg-surface-dark" : ""}`}><div><strong className="text-xl">{date}</strong><span className="block text-[9px]">dec</span></div><strong className="self-center font-display text-lg">{title}</strong></div>)}</div>
            <article className="overflow-hidden rounded-[28px] bg-paper text-ink">
              <div className="relative"><img src={apresImage} loading="lazy" width={1280} height={720} alt="Après ski chalet" className="h-60 w-full object-cover" /><div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground"><h3 className="font-display text-4xl">Après ski</h3><span className="mt-2 rounded-full bg-paper px-3 py-1 text-xs text-ink">10 december</span></div></div>
              <p className="px-10 py-12 text-center font-display text-base leading-relaxed">In de almhütte waan je je onmiddellijk op de skipiste, met elke avond een dj of optreden om de beste après ski hits op je los te laten.</p>
            </article>
          </div>
          <div id="schaatsen" className="skate-overlap mt-32">
            <h2 className="text-center font-display text-4xl leading-[.95] md:text-5xl">Schaatspiste op<br />het Wapenplein</h2>
            <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[28px] bg-navy">
              <div className="grid md:grid-cols-[.85fr_1.35fr]">
                <img src={skatesImage} loading="lazy" width={768} height={1024} alt="Witte schaatsen" className="skate-image h-full max-h-[520px] w-full object-cover" />
                <div className="relative p-8 md:p-14">
                  <div className="relative z-10 flex items-center justify-between"><h3 className="font-display text-2xl">Prijzen</h3><span className="text-xs">Onbeperkt schaatsplezier</span></div>
                  <div className="relative z-10 mt-5 text-sm">{[["Kinderen tot 12 jaar","€6"],["Volwassenen","€9"],["Groepen (10+) / Kinderen tot 12 jaar","€8"],["Groepen (10+) / Volwassenen","€8"],["UitPAS","€5"]].map(([a,b]) => <div key={a} className="flex justify-between border-b border-line-dark py-4"><span>{a}</span><span className="text-sky">{b}</span></div>)}</div>
                  <div className="relative z-10 mt-8 flex flex-wrap items-center gap-6"><Button variant="snow">Schaatspiste boeken*</Button><span className="text-xs text-muted-blue">*Reserveren is enkel vereist voor scholen,<br />verenigingen en andere grote groepen.</span></div>
                  <img src="/union-2.png" alt="" aria-hidden="true" className="pointer-events-none absolute -right-3 bottom-[-6px] z-0 h-[240px] w-[240px] object-contain opacity-100 md:h-[270px] md:w-[270px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-bottom" aria-hidden="true" />
      </section>

      <section id="faq" className="bg-paper px-5 pb-24 pt-64 text-ink">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold leading-tight md:text-4xl">Zit je met een vraag? Bekijk zeker<br />onze meestgestelde vragen!</h2>
          <div className="mt-16">
            {faqItems.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return <div key={question} className="border-b border-border">
                <button type="button" className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-base" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span className={isOpen ? "font-bold" : ""}>{question}</span><span className="text-xl leading-none">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="max-w-2xl pb-5 pr-10 font-display text-sm leading-relaxed">{answer}</p>}
              </div>;
            })}
          </div>
        </div>
      </section>

      <section id="sponsors" className="relative bg-paper px-5 py-24 text-ink">
        <h2 className="text-center font-display text-xl">Bedankt aan onze partners</h2>
        <img src="/sponsor-logos.png" alt="Onze partners: Oostende, Silver & Tie, Bacardi, Peterman, Chocomel, Aperol 1919 en Baileys" className="mx-auto mt-14 h-auto w-full max-w-4xl" />
      </section>

      <footer id="contact" className="footer-section winter-panel snow-layer relative px-5 pb-4 pt-32 text-center text-primary-foreground">
        <div className="wave-top-paper" aria-hidden="true" />
        <div className="relative z-10">
          <div className="footer-tilt">
            <h2 className="font-display text-[36px] leading-[1.08] md:text-[40px]">Jouw warmste winter-<br />moment begint <span className="text-sky">bij ons.</span></h2>
          </div>
          <a href="mailto:info@kerstmarkt-oostende.be" className="mt-12 inline-block border-b border-primary-foreground pb-1 font-display text-base">info@kerstmarkt-oostende.be</a>
          <img src="/logo.png" alt="Kerstmarkt Oostende" className="mx-auto mt-14 w-32" />
          <div className="mt-7 flex justify-center gap-3">
            <a href="#instagram" aria-label="Instagram" className="footer-social"><Instagram size={14} strokeWidth={2.5} /></a>
            <a href="#facebook" aria-label="Facebook" className="footer-social"><Facebook size={14} fill="currentColor" strokeWidth={0} /></a>
          </div>
          <div className="footer-legal mx-auto mt-14 flex max-w-xl justify-center gap-10 border-b border-line-dark pb-8 text-[10px]"><span>Privacy</span><span>Voorwaarden</span><span>Cookies</span></div>
          <p className="mt-5 text-[10px] text-muted-blue">© 2026 Kerstmarkt Oostende</p>
        </div>
      </footer>
    </main>
  );
}

function LocationCard({ locationId, onLocationHover, title, tags, text }: { locationId: string; onLocationHover: (locationId: string | null) => void; title: string; tags: string; text: string }) {
  return <article className="rounded-[28px] border border-border bg-card p-8"><h3 className="font-display text-2xl font-bold">{title}</h3><p className="mt-4 text-[10px] tracking-[.18em] text-muted-foreground">{tags}</p><p className="mt-5 font-display leading-relaxed">{text}</p><Button className="mt-5" onMouseEnter={() => onLocationHover(locationId)} onMouseLeave={() => onLocationHover(null)} onFocus={() => onLocationHover(locationId)} onBlur={() => onLocationHover(null)}>Programma {title}</Button></article>;
}

function locationMapSrc(locationId: string) {
  return locationId === "wapenplein" ? "/maps/wapenplein-map.png" : "/maps/sint-petrus-map.png";
}