import Link from "next/link";

type Project = {
  label: string;
  href?: string;
};

const projects: Project[] = [
  { label: "Crank, a fitness app", href: "https://getcrank.app" },
  { label: "Adler, a bounty platform", href: "https://adler.emptea.xyz" },
  { label: "Rise, a journal that understands you", href: "/rise" },
  { label: "Tripify, a vacation planner" },
  { label: "Keymount, a password manager" },
  { label: "Dragon run, a jump N run on Solana." },
  { label: "Preda, a platform for NFT operations." },
];

export default function GalleryPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#e7e5e4] px-6 text-center">
      <ul className="flex flex-col items-center">
        {projects.map((project) => {
          const baseClass =
            "text-[16px] tracking-[-0.03em] text-[#a8a29e]";

          if (!project.href) {
            return (
              <li
                key={project.label}
                className={`${baseClass} line-through`}
              >
                {project.label}
              </li>
            );
          }

          const isInternal = project.href.startsWith("/");

          return (
            <li key={project.label}>
              {isInternal ? (
                <Link
                  href={project.href}
                  className={`${baseClass} transition-colors hover:text-[#1c1917]`}
                >
                  {project.label}
                </Link>
              ) : (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseClass} transition-colors hover:text-[#1c1917]`}
                >
                  {project.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      <Link
        href="/"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[16px] tracking-[-0.03em] text-[#a8a29e] transition-colors hover:text-[#1c1917]"
      >
        Back to home
      </Link>
    </main>
  );
}
