import type { Metadata } from "next";
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
  title: "Privacy Policy",
  description:
    "Privacy policy for the mobile applications published by emptea studios on the Apple App Store and Google Play.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHeader title="Privacy Policy" updated="October 2026" />

      <LegalBody>
        <LegalIntro>
          This policy explains what data emptea studios (&ldquo;emptea&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects when you use our mobile
          applications and websites, why we collect it, and what control you
          have over it. It applies to every app we publish on the Apple App
          Store and Google Play unless that app presents its own policy in-app.
        </LegalIntro>

        <LegalSection title="Who is responsible">
          <P>
            The data controller is emptea studios, operated by Maruthan
            Thanabalasingam, Switzerland. You can reach us at <MailLink /> for
            any privacy question or request.
          </P>
        </LegalSection>

        <LegalSection title="Data we collect">
          <List>
            <Item>
              <strong className="font-medium text-foreground">
                Account data
              </strong>{" "}
              — email address and authentication identifiers, if the app offers
              accounts.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Content you create
              </strong>{" "}
              — the entries, files, photos, or settings you save in the app.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Device and usage data
              </strong>{" "}
              — device model, operating system version, app version, language,
              install identifiers, and anonymous usage events.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Diagnostics
              </strong>{" "}
              — crash reports and performance traces.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Support correspondence
              </strong>{" "}
              — anything you send us by email or through in-app feedback.
            </Item>
          </List>
          <P>
            We do not collect precise location, contacts, health data, or
            payment card numbers unless an app explicitly asks for that
            permission and explains why at the moment it asks.
          </P>
        </LegalSection>

        <LegalSection title="Why we use it">
          <List>
            <Item>To provide the app and the features you ask for.</Item>
            <Item>
              To keep your data in sync across your devices where the app offers
              that.
            </Item>
            <Item>
              To diagnose crashes, measure performance, and improve stability.
            </Item>
            <Item>
              To prevent abuse, fraud, and unauthorised access to accounts.
            </Item>
            <Item>
              To answer support requests and send service messages such as
              security notices.
            </Item>
            <Item>
              To meet legal obligations such as tax, accounting, and lawful
              requests from authorities.
            </Item>
          </List>
          <P>
            Where the GDPR applies, we rely on the performance of our contract
            with you (providing the app), our legitimate interest (security,
            stability, and improvement), your consent (optional analytics,
            marketing, and permission-gated features), and legal obligation, as
            applicable to each purpose above.
          </P>
        </LegalSection>

        <LegalSection title="Service providers">
          <P>
            We use a small number of processors to run our apps: cloud hosting
            and database providers, authentication providers, analytics and
            crash-reporting services, push notification services, and email
            delivery. They process data only on our instructions and under
            contract. Purchases are handled entirely by Apple and Google — we
            never see or store your payment details.
          </P>
          <P>
            <strong className="font-medium text-foreground">
              We do not sell your personal data
            </strong>{" "}
            and we do not share it with advertising networks or data brokers.
          </P>
        </LegalSection>

        <LegalSection title="International transfers">
          <P>
            Our providers may process data outside Switzerland or the European
            Economic Area, including in the United States. Where that happens,
            transfers are covered by Standard Contractual Clauses or another
            recognised safeguard.
          </P>
        </LegalSection>

        <LegalSection title="How long we keep it">
          <P>
            Account and content data is kept while your account is active and
            deleted within 30 days of you deleting your account, except where we
            must keep records longer to satisfy a legal obligation. Diagnostics
            and aggregated usage data are retained for up to 24 months.
          </P>
        </LegalSection>

        <LegalSection title="Your rights">
          <P>
            Depending on where you live, you have the right to access, correct,
            export, restrict, or delete your personal data, to object to certain
            processing, and to withdraw consent at any time. Where an app has
            accounts, you can delete your account and all associated data from
            within the app&apos;s settings. You can also email <MailLink /> and
            we will respond within 30 days. If you are in the EEA, Switzerland,
            or the UK, you may lodge a complaint with your local data protection
            authority.
          </P>
        </LegalSection>

        <LegalSection title="Security">
          <P>
            Data is encrypted in transit with TLS and at rest by our hosting
            providers. Access to production systems is restricted and
            authenticated. No system is perfectly secure, so please keep your
            device and credentials protected.
          </P>
        </LegalSection>

        <LegalSection title="Children">
          <P>
            Our apps are not directed at children under 13 (or under the
            equivalent age of digital consent in your country), and we do not
            knowingly collect their personal data. If you believe a child has
            provided us with personal data, contact us and we will delete it.
          </P>
        </LegalSection>

        <LegalSection title="friggy" id="friggy">
          <P>
            friggy turns a photo of your fridge into recipe ideas. On top of
            everything above, this is the data friggy handles and who processes
            it.
          </P>
          <List>
            <Item>
              <strong className="font-medium text-foreground">
                Sign in with Apple
              </strong>{" "}
              — your name, if you choose to share it, and the user identifier
              Apple issues for friggy. friggy does not ask Apple for your email
              address. Accounts run on Google Firebase.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Fridge photos
              </strong>{" "}
              — sent to Anthropic (Claude) to recognise the ingredients, then
              discarded. We do not store your fridge photos.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">Recipes</strong>{" "}
              — the ingredient list is sent to Anthropic (Claude), which writes
              the recipe text. The dish pictures are generated by Google Vertex
              AI from the recipe; they are illustrations, not photos of real
              food. Your recipes are saved to your account.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Plate photos
              </strong>{" "}
              — the photo you take of a finished dish is stored in Google
              Firebase together with the recipe name and date, as your private
              log. Only you can see your log.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                cooked today.
              </strong>{" "}
              — only if you tap &ldquo;Share to cooked today.&rdquo;, that plate
              photo, your first name, the recipe name and the cooking time
              become visible to other friggy users for about a day. Before a
              shared photo appears, it is checked automatically for
              objectionable content by Anthropic (Claude).
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Reports and blocks
              </strong>{" "}
              — when you report a post or block a user, we store the report and
              your block list so we can hide that content and review it.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Subscriptions
              </strong>{" "}
              — friggy+ is sold and billed by Apple. RevenueCat receives your
              purchase receipts and your friggy account identifier to confirm
              your subscription. We count your scans each week to apply the free
              limit. We never see your payment details.
            </Item>
            <Item>
              <strong className="font-medium text-foreground">
                Diagnostics and analytics
              </strong>{" "}
              — crash reports through Sentry, and a small number of product
              events through PostHog on its EU servers, linked to your friggy
              account identifier. No session recordings. friggy has no ads, does
              not use the advertising identifier and does not track you across
              other companies&apos; apps or websites, so it never shows the App
              Tracking Transparency prompt.
            </Item>
          </List>
          <P>
            Your recipes, log, plate photos and posts are kept while your
            account exists. You can delete your account at any time in friggy
            under Profile → Settings → Delete account. That deletes your
            profile, recipes, log, plate photos, shared posts, reports and
            blocks, and revokes friggy&apos;s access to your Apple ID.
            Deleting your account does not cancel a subscription; cancel it in
            your iPhone&apos;s Settings.
          </P>
        </LegalSection>

        <LegalSection title="Changes">
          <P>
            We may update this policy as our apps change. Material changes will
            be announced in-app or in the relevant store listing before they
            take effect, and the date above will be updated.
          </P>
        </LegalSection>

        <LegalSection title="Contact">
          <P>
            Privacy questions and requests: <MailLink />.
          </P>
        </LegalSection>
      </LegalBody>
    </>
  );
}
