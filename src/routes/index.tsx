import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-interior.jpg";
import job01 from "@/assets/job-01.jpeg";
import job02 from "@/assets/job-02.jpeg";
import job03 from "@/assets/job-03.jpeg";
import job04 from "@/assets/job-04.jpeg";
import job05 from "@/assets/job-05.jpeg";
import job06 from "@/assets/job-06.jpeg";
import job07 from "@/assets/job-07.jpeg";
import job08 from "@/assets/job-08.jpeg";
import job09 from "@/assets/job-09.jpeg";
import job10 from "@/assets/job-10.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "S A Decorating & Property Maintenance — Manchester | 5★ Rated" },
      {
        name: "description",
        content:
          "Manchester's trusted decorator & property maintenance team. 14+ years experience, 6+ active workers. Painting, kitchens, bathrooms, flooring, lofts. Free quotes.",
      },
    ],
  }),
});

const services = [
  { title: "Painting & Decorating", desc: "Flawless finishes, inside and out." },
  { title: "Kitchen Fitting", desc: "Full installs, from rip-out to reveal." },
  { title: "Bathroom Fitting", desc: "Tiling, plumbing, the lot." },
  { title: "Flooring", desc: "Laminate, vinyl, lino, hardwood." },
  { title: "Loft Conversions", desc: "Storage spaces, fully insulated." },
  { title: "Plumbing & Electrics", desc: "Reliable repairs and upgrades." },
  { title: "Tiling", desc: "Walls, floors, splashbacks." },
  { title: "Joinery", desc: "Custom carpentry, built to last." },
];

const slides = [
  { src: job01, label: "Living Room — Finished" },
  { src: job02, label: "Flooring In Progress" },
  { src: job03, label: "Underlay Prep" },
  { src: job04, label: "Hallway Install" },
  { src: job05, label: "Lounge Complete" },
  { src: job06, label: "Subfloor Prep" },
  { src: job07, label: "Open-Plan Fit" },
  { src: job08, label: "Laminate Layout" },
  { src: job09, label: "Hallway Finish" },
  { src: job10, label: "Kitchen / Living Done" },
];

const OWNER_TEL = "+447852164275";
const WORKER_TEL = "+447460197195";

function Slideshow() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative border-2 border-background overflow-hidden bg-background">
      <div className="relative aspect-[4/3] sm:aspect-[16/10]">
        {slides.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.label}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute bottom-0 left-0 right-0 bg-ink/80 text-background px-5 py-3 flex items-center justify-between">
          <span className="font-display uppercase text-xs sm:text-sm tracking-wider text-brand">
            {slides[i].label}
          </span>
          <span className="font-display text-xs sm:text-sm tracking-wider">
            {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="flex gap-1 p-2 bg-ink overflow-x-auto">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`shrink-0 w-16 h-12 sm:w-20 sm:h-14 overflow-hidden border-2 transition-all ${
              idx === i ? "border-brand opacity-100" : "border-ink opacity-50 hover:opacity-100"
            }`}
          >
            <img src={s.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg sm:text-xl tracking-tight uppercase">
            S A Decorating
          </a>
          <a
            href="#contact"
            className="font-display uppercase text-sm sm:text-base bg-ink text-background px-5 py-2.5 hover:bg-brand transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border-2 border-ink px-3 py-1 mb-8 font-display text-xs uppercase tracking-wider">
              <span className="text-brand">★★★★★</span>
              <span>163 Reviews · Manchester</span>
            </div>
            <h1 className="font-display uppercase leading-[0.9] tracking-tight text-[14vw] sm:text-[10vw] lg:text-[7.5rem] xl:text-[9rem]">
              Your home.
              <br />
              <span className="text-brand">Done right.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg sm:text-xl font-medium text-ink/80">
              14+ years renovating Manchester homes. Painting, kitchens, bathrooms, flooring, lofts
              — a trusted team, top-to-bottom.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="font-display uppercase text-base sm:text-lg bg-ink text-background px-8 py-5 text-center hover:bg-brand transition-colors"
              >
                Book a Free Quote →
              </a>
              <a
                href={`tel:${OWNER_TEL}`}
                className="font-display uppercase text-base sm:text-lg border-2 border-ink px-8 py-5 text-center hover:bg-ink hover:text-background transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroImg}
              alt="Renovated bright modern home interior"
              width={1600}
              height={1200}
              className="w-full aspect-[4/3] object-cover border-2 border-ink"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-black bg-ink text-background">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["14+", "Years Experience"],
            ["5.0", "Average Rating"],
            ["6+", "Active Workers"],
            ["✓", "Verified by MyBuilder"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl sm:text-4xl text-brand">{n}</div>
              <div className="font-display uppercase text-xs tracking-wider mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <h2 className="font-display uppercase text-5xl sm:text-7xl leading-none tracking-tight mb-4">
            Everything,
            <br />
            <span className="text-brand">under one roof.</span>
          </h2>
          <p className="text-lg text-ink/70 mb-14 max-w-2xl">
            One team. One point of contact. No excuses.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink border-2 border-ink">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-background p-7 hover:bg-brand hover:text-brand-foreground transition-colors group"
              >
                <div className="font-display text-3xl text-brand group-hover:text-brand-foreground mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-display uppercase text-lg mb-2">{s.title}</h3>
                <p className="text-sm font-medium opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO — REAL PHOTOS SLIDESHOW */}
      <section id="work" className="border-b border-black bg-ink text-background">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <h2 className="font-display uppercase text-5xl sm:text-7xl leading-none tracking-tight">
              Our Current
              <br />
              <span className="text-brand">Work</span>
            </h2>
            <p className="text-lg max-w-sm opacity-80">
              Real jobs. Real photos. Straight from the tools.
            </p>
          </div>
          <Slideshow />
        </div>
      </section>

      {/* QUOTE — REPLACED WITH TEAM STAT */}
      <section className="border-b border-black">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28 text-center">
          <div className="font-display text-3xl text-brand mb-6">★★★★★</div>
          <blockquote className="font-display uppercase text-3xl sm:text-5xl leading-tight tracking-tight">
            6+ active workers,
            <br />
            <span className="text-brand">on the job today.</span>
          </blockquote>
          <p className="mt-8 font-display uppercase text-sm tracking-widest text-ink/60">
            A real team — bigger jobs, faster turnaround.
          </p>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="bg-brand text-brand-foreground">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display uppercase text-6xl sm:text-8xl leading-[0.9] tracking-tight">
              Let's get
              <br />
              started.
            </h2>
            <p className="mt-6 text-lg max-w-md font-medium">
              Tell us about your project. We'll come take a look and give you an honest, no-pressure
              quote — free of charge.
            </p>

            {/* PHONE NUMBERS */}
            <div className="mt-10 space-y-4">
              <a
                href={`tel:${OWNER_TEL}`}
                className="block bg-ink text-background p-5 hover:bg-background hover:text-ink transition-colors border-2 border-ink"
              >
                <div className="font-display uppercase text-xs tracking-widest opacity-70">
                  Owner — Call or Text
                </div>
                <div className="font-display uppercase text-2xl sm:text-3xl mt-1">
                  +44 7852 164275
                </div>
              </a>
              <a
                href={`tel:${WORKER_TEL}`}
                className="block bg-ink text-background p-5 hover:bg-background hover:text-ink transition-colors border-2 border-ink"
              >
                <div className="font-display uppercase text-xs tracking-widest opacity-70">
                  Team — Call or Text
                </div>
                <div className="font-display uppercase text-2xl sm:text-3xl mt-1">
                  +44 7460 197195
                </div>
              </a>
            </div>

            <div className="mt-8 space-y-2 font-display uppercase text-sm tracking-wider">
              <div>📍 Manchester & surrounding areas</div>
              <div>✓ Workmanship warranty offered</div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll get back to you within 24 hours.");
            }}
            className="bg-background text-ink p-8 sm:p-10 border-2 border-ink space-y-5"
          >
            <h3 className="font-display uppercase text-2xl">Request a free quote</h3>
            <div>
              <label className="font-display uppercase text-xs tracking-wider block mb-2">
                Name
              </label>
              <input
                required
                className="w-full border-2 border-ink px-4 py-3 font-medium focus:outline-none focus:bg-brand/10"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-display uppercase text-xs tracking-wider block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full border-2 border-ink px-4 py-3 font-medium focus:outline-none focus:bg-brand/10"
                />
              </div>
              <div>
                <label className="font-display uppercase text-xs tracking-wider block mb-2">
                  Postcode
                </label>
                <input
                  required
                  className="w-full border-2 border-ink px-4 py-3 font-medium focus:outline-none focus:bg-brand/10"
                />
              </div>
            </div>
            <div>
              <label className="font-display uppercase text-xs tracking-wider block mb-2">
                Tell us about the job
              </label>
              <textarea
                rows={4}
                required
                className="w-full border-2 border-ink px-4 py-3 font-medium focus:outline-none focus:bg-brand/10 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full font-display uppercase text-lg bg-ink text-background py-5 hover:bg-brand transition-colors"
            >
              Send Request →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-background">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display uppercase text-sm tracking-wider">
            S A Decorating & Property Maintenance
          </div>
          <div className="text-xs opacity-70">
            © {new Date().getFullYear()} · Manchester · Verified by MyBuilder
          </div>
        </div>
      </footer>
    </div>
  );
}
