import { cn } from "@/lib/utils";

export function LegalHeader({
  title,
  updated,
}: {
  title: string;
  updated: string;
}) {
  return (
    <header className="pb-10">
      <p className="text-sm font-medium text-blue-700">Legal</p>
      <h1 className="mt-2 text-4xl font-semibold">{title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Last updated: {updated}
      </p>
    </header>
  );
}

export function LegalBody({ children }: { children: React.ReactNode }) {
  return <div className="space-y-10">{children}</div>;
}

export function LegalIntro({ children }: { children: React.ReactNode }) {
  return <p className="text-lg text-muted-foreground">{children}</p>;
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("leading-7 text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2 text-muted-foreground">
      {children}
    </ul>
  );
}

export function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 leading-7">
      <span className="text-gray-600">—</span>
      <span>{children}</span>
    </li>
  );
}

export function MailLink() {
  return (
    <a
      href="mailto:emptea.studios@gmail.com"
      className="font-medium text-blue-700 underline underline-offset-4"
    >
      emptea.studios@gmail.com
    </a>
  );
}
