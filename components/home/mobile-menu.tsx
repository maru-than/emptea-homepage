"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { CONTACT, Wordmark } from "@/components/home/brand";

const linkClass =
  "flex min-h-12 items-center border-t border-hairline text-[17px] tracking-[-0.02em] transition-colors hover:text-dim";

/** Section links for phones, where the header has no room for them. */
export function MobileMenu({ links }: { links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);

  // Close first, then jump: the open dialog locks page scroll.
  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      window.location.hash = href;
    }, 200);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger
        aria-label="Open menu"
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-panel text-ink transition-colors hover:bg-panel-hover md:hidden"
      >
        <Menu className="size-5" strokeWidth={1.75} />
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/20 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed inset-x-3 top-3 z-50 rounded-[28px] bg-paper p-5 text-ink shadow-[0_24px_64px_-24px_rgba(0,0,0,0.3)] outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2">
          <DialogPrimitive.Title className="sr-only">Menu</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">Sections of this page</DialogPrimitive.Description>
          <div className="flex items-center justify-between">
            <Wordmark />
            <DialogPrimitive.Close
              aria-label="Close menu"
              className="inline-flex size-10 items-center justify-center rounded-full bg-panel transition-colors hover:bg-panel-hover"
            >
              <X className="size-5" strokeWidth={1.75} />
            </DialogPrimitive.Close>
          </div>
          <nav className="mt-4 flex flex-col">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={go(l.href)} className={linkClass}>
                {l.label}
              </a>
            ))}
            <a href={CONTACT} onClick={() => setOpen(false)} className={linkClass}>
              Contact
            </a>
          </nav>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
