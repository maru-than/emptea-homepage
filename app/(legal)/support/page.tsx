import type { Metadata } from "next";
import Link from "next/link";
import {
  Item,
  LegalBody,
  LegalHeader,
  LegalIntro,
  LegalSection,
  List,
  MailLink,
  P,
} from "@/components/legal";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Crank, friggy and the other apps published by emptea studios.",
  alternates: { canonical: "/support" },
};

const link = "font-medium text-blue-700 underline underline-offset-4";

export default function SupportPage() {
  return (
    <>
      <LegalHeader eyebrow="Help" title="Support" updated="October 2026" />

      <LegalBody>
        <LegalIntro>
          Questions, bugs, or feedback about Crank, friggy, or any other emptea
          app? Email us. A person reads every message.
        </LegalIntro>

        <LegalSection title="Contact">
          <P>
            Email <MailLink />. For a bug, tell us which app you use, your
            iPhone model, and your iOS version, and what happened right before
            it went wrong. A screenshot helps.
          </P>
        </LegalSection>

        <LegalSection title="friggy" id="friggy">
          <List>
            <Item>
              <strong className="font-medium text-foreground">
                Free scans
              </strong>{" "}
              — friggy includes 3 fridge scans per week. friggy+ lifts that
              limit.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Manage or cancel friggy+
              </strong>{" "}
              — in your iPhone&apos;s Settings → your name → Subscriptions. On a
              new iPhone, tap &ldquo;Restore purchases&rdquo; on the friggy+
              screen.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Report or block
              </strong>{" "}
              — press and hold a post in &ldquo;cooked today.&rdquo;, then
              choose Report or Block. Reported posts are hidden right away and
              reviewed within 24 hours. You can also email us.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Delete your account
              </strong>{" "}
              — Profile → Settings → Delete account. Your log, photos, and
              shared plates are deleted for good. Cancel a subscription
              separately.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Allergies and food safety
              </strong>{" "}
              — recipes are AI-generated suggestions. Always check ingredients
              for allergens and cook food through.
            </Item>
          </List>
        </LegalSection>

        <LegalSection title="Legal">
          <P>
            Read our{" "}
            <Link href="/terms-of-service" className={link}>
              Terms of Service
            </Link>
            ,{" "}
            <Link href="/privacy-policy" className={link}>
              Privacy Policy
            </Link>
            , and{" "}
            <Link href="/eula" className={link}>
              End User License Agreement
            </Link>
            .
          </P>
        </LegalSection>
      </LegalBody>
    </>
  );
}
