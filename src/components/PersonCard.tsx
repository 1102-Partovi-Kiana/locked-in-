type SocialLink = {
  label: string;
  href: string;
};

type PersonCardProps = {
  name: string;
  role: string;
  companyOrSchool?: string;
  bio?: string;
  links: SocialLink[];
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function PersonCard({
  name,
  role,
  companyOrSchool,
  bio,
  links,
}: PersonCardProps) {
  return (
    <article className="group rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-sm font-bold text-orange-700">
          {getInitials(name)}
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
            {name}
          </h3>
          <p className="text-sm text-zinc-600">{role}</p>
          {companyOrSchool ? (
            <p className="text-sm text-zinc-500">{companyOrSchool}</p>
          ) : null}
        </div>
      </div>

      {bio ? <p className="mb-4 text-sm leading-6 text-zinc-600">{bio}</p> : null}

      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-[#E4572E] hover:text-[#E4572E]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
