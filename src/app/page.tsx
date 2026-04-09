import PersonCard from "@/components/PersonCard";

type EventItem = {
  name: string;
  date: string;
  description: string;
  /** Full URL to Luma, Eventbrite, or another event page (replace the placeholder). */
  registrationUrl: string;
  /** Optional — defaults to "Register". */
  ctaLabel?: string;
};

type Person = {
  name: string;
  role: string;
  companyOrSchool?: string;
  bio?: string;
  links: { label: string; href: string }[];
};

// Add each event’s public URL (e.g. Luma) to registrationUrl.
const events: EventItem[] = [
  {
    name: "Locked[In]: Intern 101",
    date: "Saturday, April 18 · 12:00 PM · Location to be announced",
    description: "Real advice for navigating your internship.",
    registrationUrl: "https://luma.com/j3qdtg1j",
  },
  {
    name: "Locked[In]: New Grad 101",
    date: "Saturday, April 25 · 12:00 PM · Location to be announced",
    description: "Real advice for navigating life as a new grad.",
    registrationUrl: "https://luma.com/nteves13",
  },
];

const hosts: Person[] = [
  {
    name: "Kiana Partovi",
    role: "Host",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kianapartovi" },
    ],
  },
  {
    name: "Heba Alazzeh",
    role: "Host",
    links: [
      { label: "LinkedIn", href: "https://https://www.linkedin.com/in/heba-alazzeh/"},
    ],
  },
];

const panelists: Person[] = [
  {
    name: "Hussam Makhoul",
    role: "Incoming SWE Intern @ Pinterest | CS Honors @ TAMU",
    links: [
      { label: "LinkedIn", href: "https://https://www.linkedin.com/in/hussam-makhoul123/" },
    ],
  },
  {
    name: "Lucas Romero-Wyhnanskyj",
    role: "Incoming SWE Intern @ LinkedIn | CS @ UF",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-romero-wyhnanskyj/" },
    ],
  },
  {
    name: "Michelle Wang",
    role: "Incoming SWE at Google | CS and Economics at Williams College",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/michellewang0422/" },
    ],
  },
  {
    name: "Steven Nguyen",
    role: "Prev @ Microsoft, Snapchat, Caltech, SDSC",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/stevendatnguyen/" },
    ],
  },
  {
    name: "Arvin Shahid",
    role: "Fellow @ OpenAI",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arvin-shahid/" },
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-white text-zinc-900">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#E4572E]">
            Event Series
          </p>
          <h1 className="text-5xl font-black tracking-tight text-zinc-950 sm:text-7xl">
            LOCKED[IN]
          </h1>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-700 sm:text-3xl">
            Stay Connected
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
            Connect with our hosts and panelists from today&apos;s event.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#events"
              className="inline-flex items-center rounded-full bg-[#E4572E] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-[#cd4c28]"
            >
              View Events
            </a>
            <a
              href="#panelists"
              className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-[#E4572E] hover:text-[#E4572E]"
            >
              View Panelists
            </a>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="scroll-mt-20 border-y border-zinc-200/80 bg-gradient-to-b from-zinc-50 to-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Upcoming Events
          </h2>
          <div className="mt-8 grid gap-5">
            {events.map((event) => (
              <article
                key={event.name}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <p className="text-sm font-medium text-[#E4572E]">{event.date}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900">
                  {event.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
                  {event.description}
                </p>
                <a
                  href={event.registrationUrl || "#"}
                  {...(/^https?:\/\//i.test(event.registrationUrl)
                    ? {
                        target: "_blank" as const,
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="mt-5 inline-flex items-center rounded-full border border-[#E4572E] px-5 py-2.5 text-sm font-semibold text-[#E4572E] transition-colors hover:bg-[#E4572E] hover:text-white"
                >
                  {event.ctaLabel ?? "Register"}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Meet the Hosts
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {hosts.map((host) => (
            <PersonCard
              key={host.name}
              name={host.name}
              role={host.role}
              companyOrSchool={host.companyOrSchool}
              links={host.links}
            />
          ))}
        </div>
      </section>

      <section
        id="panelists"
        className="scroll-mt-20 border-y border-zinc-200/80 bg-gradient-to-b from-zinc-50 to-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet the Panelists
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {panelists.map((panelist) => (
              <PersonCard
                key={panelist.name}
                name={panelist.name}
                role={panelist.role}
                bio={panelist.bio}
                links={panelist.links}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Stay Connected
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600">
          Follow our journey and stay updated with future events
        </p>
        <a
          href="#"
          className="mt-7 inline-flex items-center rounded-full border border-[#E4572E] px-6 py-3 text-sm font-semibold text-[#E4572E] transition-colors hover:bg-[#E4572E] hover:text-white"
        >
          Follow LOCKED[IN]
        </a>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500">
        © LOCKED[IN]
      </footer>
    </main>
  );
}
