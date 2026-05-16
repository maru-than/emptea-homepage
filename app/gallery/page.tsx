import Link from "next/link";

type Project = {
  label: string;
  href?: string;
  shipped?: boolean;
};

const projects: Project[] = [
  { label: "Crank, a fitness app", shipped: true },
  { label: "Adler, a bounty platform", shipped: true },
  { label: "Rise, a timeboxing app", shipped: false },
  { label: "Tripify, a vacation planner", shipped: false },
  { label: "Keymount, a password manager", shipped: false },
  { label: "Dragon run, a jump N run on Solana.", shipped: false },
  { label: "Preda, a platform for NFT operations.", shipped: false },
];

export default function GalleryPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#e7e5e4] px-6 text-center">
      <ul className="flex flex-col items-center">
        {projects.map((project) => (
          <li
            key={project.label}
            className={`text-[16px] tracking-[-0.03em] text-[#a8a29e] ${
              project.shipped ? "" : "line-through"
            }`}
          >
            {project.label}
          </li>
        ))}
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
