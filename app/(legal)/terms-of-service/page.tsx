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
  title: "Terms of Service",
  description:
    "Terms of service for the mobile applications and websites published by emptea studios.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <>
      <LegalHeader title="Terms of Service" updated="October 2026" />

      <LegalBody>
        <LegalIntro>
          These terms form an agreement between you and emptea studios,
          operated by Maruthan Thanabalasingam, Switzerland. They apply whenever
          you download, install, or use our mobile applications or websites.
        </LegalIntro>

        <LegalSection title="Acceptance">
          <P>
            By installing or using an app, you accept these terms, our{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            , and our{" "}
            <Link
              href="/eula"
              className="font-medium text-blue-700 underline underline-offset-4"
            >
              End User License Agreement
            </Link>
            . If you do not agree, do not use the app. You must be at least 13
            years old, or the age of digital consent in your country, whichever
            is higher.
          </P>
        </LegalSection>

        <LegalSection title="Accounts">
          <P>
            Some features require an account. You are responsible for the
            accuracy of your registration details and for keeping your
            credentials confidential. Tell us promptly if you suspect
            unauthorised use. You may close your account at any time from within
            the app or by contacting us.
          </P>
        </LegalSection>

        <LegalSection title="Acceptable use">
          <P>You agree not to:</P>
          <List>
            <Item>
              Use the apps for anything unlawful, or in a way that infringes
              somebody else&apos;s rights.
            </Item>
            <Item>
              Reverse engineer, decompile, or attempt to extract source code,
              except where that restriction is prohibited by law.
            </Item>
            <Item>
              Interfere with, overload, or attempt to gain unauthorised access to
              our systems or another user&apos;s account.
            </Item>
            <Item>
              Resell, sublicense, or commercially redistribute the apps or their
              content without our written permission.
            </Item>
            <Item>
              Upload malware or content that is illegal, abusive, or harmful.
            </Item>
          </List>
        </LegalSection>

        <LegalSection title="Your content">
          <P>
            You keep ownership of everything you create in the apps. You grant us
            a limited, worldwide, royalty-free licence to host, store, back up,
            and transmit that content solely to operate the service for you. That
            licence ends when you delete the content or your account, subject to
            reasonable backup retention.
          </P>
          <P>
            You are responsible for the content you upload and for having the
            rights to it. We may remove content that breaches these terms or the
            law.
          </P>
        </LegalSection>

        <LegalSection title="Payments and subscriptions">
          <P>
            Paid features and subscriptions are sold and processed through the
            Apple App Store or Google Play unless stated otherwise in the app.
            Subscriptions renew automatically until cancelled; you can cancel at
            any time in your Apple or Google account settings, and cancellation
            takes effect at the end of the current billing period. Refunds are
            handled by the store under its own policy. Prices may change with
            notice before the change applies to you.
          </P>
        </LegalSection>

        <LegalSection title="friggy: shared content" id="friggy">
          <P>
            These sections apply to friggy in addition to the terms above. In
            friggy you can share a photo of a dish you cooked to &ldquo;cooked
            today.&rdquo;, a feed other friggy users can see.{" "}
            <strong className="font-medium text-foreground">
              We have zero tolerance for objectionable content and abusive
              users.
            </strong>{" "}
            You must not share:
          </P>
          <List>
            <Item>Nudity, sexual content, violence, gore, or self-harm.</Item>
            <Item>
              Hate speech, harassment, bullying, threats, or content that
              targets a person or group.
            </Item>
            <Item>
              Anything illegal, or content you do not have the rights to share.
            </Item>
            <Item>Photos of other people without their consent.</Item>
            <Item>Spam, advertising, or anything that is not your food.</Item>
          </List>
          <P>
            Every shared photo is checked automatically before other users see
            it. You can report any post and block any user from the post&apos;s
            menu; blocking hides that user&apos;s posts from you right away. A
            reported post is hidden immediately and reviewed by us within 24
            hours. Content that breaks these terms is removed, and the account
            that posted it is removed from friggy.
          </P>
        </LegalSection>

        <LegalSection title="friggy: subscriptions">
          <P>
            friggy is free to download and includes 3 fridge scans per week.
            friggy+ is an optional auto-renewing subscription, offered monthly
            or yearly, that lifts the weekly limit.
          </P>
          <List>
            <Item>
              The price and billing period are shown in the app before you buy.
              Payment is charged to your Apple ID when you confirm the purchase.
            </Item>
            <Item>
              The subscription renews automatically for the same period and
              price unless you cancel it at least 24 hours before the end of the
              current period. Your Apple ID is charged for the renewal within the
              24 hours before the current period ends.
            </Item>
            <Item>
              You can manage or cancel your subscription at any time in your
              iPhone&apos;s Settings → your name → Subscriptions. After you
              cancel, friggy+ stays active until the end of the period you paid
              for.
            </Item>
            <Item>
              Deleting friggy or your friggy account does not cancel your
              subscription. Refunds are handled by Apple under its own policy.
            </Item>
          </List>
        </LegalSection>

        <LegalSection title="friggy: AI recipes and food safety">
          <P>
            friggy&apos;s ingredient lists, recipes, and dish pictures are
            generated by AI. They are suggestions, not professional or medical
            advice, and they can be wrong: an ingredient can be misidentified,
            and quantities or cooking times can be off. Dish pictures are
            illustrations, not photos of the result.
          </P>
          <P>
            You are responsible for what you cook and eat. Check every
            ingredient for allergens and intolerances, make sure food is fresh
            and stored properly, and cook meat, poultry, fish, and eggs through
            to a safe temperature. If you have a food allergy or follow a
            medical diet, do not rely on friggy to tell you what is safe.
          </P>
        </LegalSection>

        <LegalSection title="Availability and changes">
          <P>
            We may add, change, or discontinue features, and we may release
            updates through the app stores. We aim to give reasonable notice
            before discontinuing an app or a paid feature, and to offer a way to
            export your data where practical. The apps are not guaranteed to be
            uninterrupted or error-free.
          </P>
        </LegalSection>

        <LegalSection title="Third-party services">
          <P>
            The apps may link to or rely on third-party services. We are not
            responsible for those services, and your use of them is governed by
            their own terms.
          </P>
        </LegalSection>

        <LegalSection title="Termination">
          <P>
            You may stop using the apps at any time by uninstalling them and
            deleting your account. We may suspend or terminate access if you
            materially breach these terms, if required by law, or if we
            discontinue the service. Provisions on content, disclaimers,
            liability, and governing law survive termination.
          </P>
        </LegalSection>

        <LegalSection title="Disclaimer">
          <P>
            To the maximum extent permitted by law, the apps are provided
            &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
            warranties of any kind, whether express or implied, including
            merchantability, fitness for a particular purpose, accuracy, and
            non-infringement.
          </P>
        </LegalSection>

        <LegalSection title="Limitation of liability">
          <P>
            To the maximum extent permitted by law, we are not liable for
            indirect, incidental, special, or consequential damages, or for lost
            profits or lost data. Our total aggregate liability is limited to the
            greater of the amount you paid us for the app in the 12 months before
            the claim, or CHF 50. Nothing in these terms excludes liability that
            cannot lawfully be excluded, including for death, personal injury, or
            gross negligence.
          </P>
        </LegalSection>

        <LegalSection title="Consumer rights">
          <P>
            If you are a consumer, you keep the mandatory rights granted by the
            law of your country of residence. Nothing here limits those rights.
          </P>
        </LegalSection>

        <LegalSection title="Governing law">
          <P>
            These terms are governed by Swiss law, excluding its conflict of law
            rules and the UN Convention on Contracts for the International Sale
            of Goods. The courts of Switzerland have jurisdiction, unless
            mandatory consumer protection law in your country of residence
            provides otherwise.
          </P>
        </LegalSection>

        <LegalSection title="Contact">
          <P>
            Questions about these terms: <MailLink />.
          </P>
        </LegalSection>
      </LegalBody>
    </>
  );
}
