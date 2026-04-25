import PersonCard from "@/components/PersonCard";

type UpcomingEventItem = {
  name: string;
  date: string;
  description: string;
  /** Full URL to Luma, Eventbrite, or another event page (replace the placeholder). */
  registrationUrl: string;
  /** Optional — defaults to "Register". */
  ctaLabel?: string;
};

type PastEventItem = {
  name: string;
  date: string;
  description: string;
};

type Person = {
  name: string;
  role: string;
  companyOrSchool?: string;
  bio?: string;
  links: { label: string; href: string }[];
};

// Past sessions (no registration CTA).
const pastEvents: PastEventItem[] = [
  {
    name: "Locked[In]: New Grad 101",
    date: "Saturday, April 25 · Past event",
    description: "Real advice for navigating life as a new grad.",
  },
  {
    name: "Locked[In]: Breaking into the Next Recruiting Cycle",
    date: "Saturday, April 11 · Past event",
    description: "Real advice for breaking into tech this season.",
  },
  {
    name: "Locked[In]: Intern 101",
    date: "Saturday, April 18 · Past event",
    description: "Real advice for navigating your internship.",
  },
];

// Add each event’s public URL (e.g. Luma) to registrationUrl.
const upcomingEvents: UpcomingEventItem[] = [];

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
      { label: "LinkedIn", href: "https://www.linkedin.com/in/heba-alazzeh/" },
    ],
  },
];

const panel1Panelists: Person[] = [
    {
    name: "Arvin Shahid",
    role: "Fellow @ OpenAI | 10+ intern | Ex-Nvidia, GitHub, SpaceX, Coinbase, Apple, Tesla, and more.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arvin-shahid/" },
    ],
  },
  {
    name: "Hussam Makhoul",
    role: "Incoming SWE Intern @ Pinterest | CS Honors @ TAMU",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/hussam-makhoul123/" },
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
];

// Panel 2 — speakers from the past Panel 2 session (same shape as panel1Panelists).
const panel2Panelists: Person[] = [
  {
    name: "Arvin Shahid",
    role: "Fellow @ OpenAI | 10+ intern | Ex-Nvidia, GitHub, SpaceX, Coinbase, Apple, Tesla, and more.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arvin-shahid/" },
    ],
  },
  {
    name: "Pari Patel",
    role: "Incoming SWE @ Disney",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/pari-b-patel/" },
    ],
  },
  {
    name: "Joshua Matni",
    role: "Prev DS Intern @ JPMorgan Chase, NBCUniversal, Stanford",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/josh-matni/" },
    ],
  },
  {
    name: "Ashley Torres",
    role: "PM @ Microsoft",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ashley-torres-ventura/" },
    ],
  },
  {
    name: "Salma Hussein",
    role: "Incoming SWE Intern @ RSM",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/salmahusseinn/" },
    ],
  },
  {
    name: "Justin Harper",
    role: "Incoming SWE Intern @ Google",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/justinhtech/" },
    ],
  },
  {
    name: "Tomas Santos Yciano",
    role: "Incoming Tech Consulting Intern @ EY | 2x EY Launch Intern",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/tjsy/" }],
  },
];

// Panel 3 — same shape as panel1Panelists / panel2Panelists.
const panel3Panelists: Person[] = [
  {
    name: "Arvin Shahid",
    role: "Fellow @ OpenAI | 10+ intern | Ex-Nvidia, GitHub, SpaceX, Coinbase, Apple, Tesla, and more.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arvin-shahid/" },
    ],
  },
  {
    name: "Nia Asemota",
    role: "Product Marketing Manager @ YouTube",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nia-asemota/" },
    ],
  },
  {
    name: "Ly Na Nguyen",
    role: "Engineering PM @ Apple",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/lynang15/" },
    ],
  },
  {
    name: "Ashley Torres",
    role: "PM @ Microsoft",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ashley-torres-ventura/" },
    ],
  },
  {
    name: "Brock Patchin",
    role: "SWE @ Ridgeline | ex Southwest Airlines",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/bpatch/" }],
  },
  {
    name: "Aimen Moten",
    role: "SWE @ Google",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/aimen-moten/" },
    ],
  },
  {
    name: "Arman Irani",
    role: "Head of AI @ AllSides",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arman-irani/" },
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-white text-zinc-900">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
            Event Series
          </p>
          <h1 className="text-5xl font-black tracking-tight text-zinc-950 sm:text-7xl">
            LOCKED[IN]
          </h1>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-700 sm:text-3xl">
            Stay Connected
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
            Connect with our hosts and panelists across our events.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#events"
              className="inline-flex items-center rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-[#1D4ED8]"
            >
              View Events
            </a>
            <a
              href="#panelists"
              className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
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
          {upcomingEvents.length > 0 ? (
            <div className="mt-8 grid gap-5">
              {upcomingEvents.map((event) => (
                <article
                  key={event.name}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <p className="text-sm font-medium text-[#2563EB]">{event.date}</p>
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
                    className="mt-5 inline-flex items-center rounded-full border border-[#2563EB] px-5 py-2.5 text-sm font-semibold text-[#2563EB] transition-colors hover:bg-[#2563EB] hover:text-white"
                  >
                    {event.ctaLabel ?? "Register"}
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-base text-zinc-600">
              Check soon for more upcoming events in the future.
            </p>
          )}

          <h2
            id="past-events"
            className="mt-16 scroll-mt-20 text-3xl font-bold tracking-tight sm:mt-20 sm:text-4xl"
          >
            Past Events
          </h2>
          <div className="mt-8 grid gap-5">
            {pastEvents.map((event) => (
              <article
                key={event.name}
                className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-6 shadow-sm"
              >
                <p className="inline-block rounded-full bg-zinc-200/80 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                  Past event
                </p>
                <p className="mt-3 text-sm font-medium text-zinc-600">
                  {event.date}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-800">
                  {event.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
                  {event.description}
                </p>
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

          <h3 className="mt-10 text-xl font-semibold tracking-tight text-zinc-800">
            Panel 3
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            Speakers from Panel three.
          </p>
          {panel3Panelists.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {panel3Panelists.map((panelist) => (
                <PersonCard
                  key={`panel3-${panelist.name}`}
                  name={panelist.name}
                  role={panelist.role}
                  bio={panelist.bio}
                  links={panelist.links}
                />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-zinc-500">
              We&apos;re adding Panel 3 speaker profiles here soon.
            </p>
          )}

          <h3 className="mt-14 text-xl font-semibold tracking-tight text-zinc-800">
            Panel 2
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            Speakers from Panel two.
          </p>
          {panel2Panelists.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {panel2Panelists.map((panelist) => (
                <PersonCard
                  key={`panel2-${panelist.name}`}
                  name={panelist.name}
                  role={panelist.role}
                  bio={panelist.bio}
                  links={panelist.links}
                />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-zinc-500">
              We&apos;re adding Panel 2 speaker profiles here soon.
            </p>
          )}

          <h3 className="mt-14 text-xl font-semibold tracking-tight text-zinc-800">
            Panel 1
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            Speakers from Panel one.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {panel1Panelists.map((panelist) => (
              <PersonCard
                key={`panel1-${panelist.name}`}
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
          className="mt-7 inline-flex items-center rounded-full border border-[#2563EB] px-6 py-3 text-sm font-semibold text-[#2563EB] transition-colors hover:bg-[#2563EB] hover:text-white"
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
