import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy • AroundU",
  description: "How ArroundU collects, uses, and protects your data.",
};

function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={`mt-12 scroll-mt-28 text-2xl font-semibold text-white ${props.className ?? ""}`}
    />
  );
}

export default function PrivacyPage() {
  const lastUpdated = "Aug 31st, 2025";

  return (
    <section className="py-10 sm:py-14">
      {/* Left-anchored container */}
      <div className="w-full max-w-6xl px-6">
        {/* Top pill link → Terms */}
        <div className="mb-6">
          <Link
            href="/legal/terms"
            className="inline-block rounded-full border border-white/10 bg-neutral-900/70 px-4 py-2 text-sm text-neutral-200 hover:border-white/20 hover:bg-neutral-800/70"
          >
            Can’t find Terms of Service? <span className="underline underline-offset-2">Click here</span>
          </Link>
        </div>

        {/* Free-flow content (no card styles) */}
        <article className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-3 text-sm text-neutral-400">Last updated: {lastUpdated}</p>

          <div className="mt-8 space-y-6 text-neutral-300 leading-7">
            <p>Privacy at ArroundU.</p>
            <p>
              We care about your privacy and want to be upfront about how we handle your data when you use
              ArroundU (“Services”). This policy explains: what we collect, why we collect it, how we use it,
              who we share it with, and your rights.
            </p>
            <p>
              Our goal is simple: to bring people closer, without misusing their data. Any choices we make
              around your data are made with your best interests in mind.
            </p>
            <p>
              Your use of ArroundU is subject to our Terms of Service. Please read them carefully — it’s
              important you understand what you’re agreeing to when using our Services.
            </p>
            <p>
              If you have questions, reach us anytime at{" "}
              <a className="underline" href="mailto:care@arroundu.com">care@arroundu.com</a>.
            </p>
          </div>

          <H2>Who we are</H2>
          <div className="space-y-4 text-neutral-300 leading-7">
            <p>ArroundU Inc. (“ArroundU”, “we”, “us”) is the controller of your data.</p>
            <p>We’re based in New York, USA, and apply global standards (including GDPR).</p>
          </div>

          <H2>What data do we collect?</H2>
          <p className="text-neutral-300">We collect three types of data:</p>

          <div className="mt-4 space-y-8">
            <div>
              <p className="font-medium text-white">1. Data you provide us</p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
                <li><strong>Account data:</strong> Email, name, password; optional username.</li>
                <li><strong>Profile:</strong> Optional photo and bio.</li>
                <li><strong>Contacts:</strong> Optional sync to find friends.</li>
                <li><strong>Location:</strong> Nearby (1 km) discovery; permission-based.</li>
                <li><strong>Messages:</strong> Texts/photos/videos/scheduled messages.</li>
                <li><strong>Support requests:</strong> Email/screenshots you send.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">2. Data from your use of the Services</p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
                <li><strong>Usage data:</strong> Follows, visits, stories, chats.</li>
                <li><strong>Location data:</strong> Approximate 1 km radius.</li>
                <li><strong>Device data:</strong> IP, device, OS, crash reports.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">3. Data from third parties</p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
                <li><strong>Other users:</strong> Interactions when they add/message you.</li>
                <li><strong>Service providers:</strong> Hosting/analytics/notifications.</li>
                <li><strong>Legal requests:</strong> Safety/compliance (rare).</li>
              </ul>
            </div>
          </div>

          <H2>How we use your data</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>Provide & improve features.</li>
            <li>Help you connect nearby.</li>
            <li>Safety: detect spam/fraud/misuse.</li>
            <li>Send important notifications.</li>
            <li>Support responses.</li>
            <li>Analyze anonymized trends.</li>
          </ul>
          <p className="mt-4 font-medium text-white">We do not sell your data.</p>

          <H2>Who we share data with</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li><strong>Other users:</strong> Limited profile; location only within the 1 km interaction.</li>
            <li><strong>Service providers:</strong> Hosting/analytics/notifications.</li>
            <li><strong>Legal authorities:</strong> If required by law or to prevent harm.</li>
            <li><strong>Affiliates/mergers:</strong> Transfer during acquisition/merger.</li>
          </ul>

          <H2>How long we keep your data</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>While you use ArroundU.</li>
            <li>Deleted account → data removed in ~30 days (subject to legal requirements).</li>
            <li>Inactive 36 months → possible auto-deletion.</li>
          </ul>

          <H2>Your rights</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>Access/edit profile data.</li>
            <li>Change permissions in Settings.</li>
            <li>Delete messages, photos, or your account.</li>
          </ul>

          <H2>International Transfers</H2>
          <p className="text-neutral-300">
            Your data may be processed outside your country (e.g., US). We use adequacy decisions, SCCs, and
            technical safeguards (encryption, secure servers).
          </p>

          <H2>Changes to this policy</H2>
          <p className="text-neutral-300">We’ll notify you about major updates in-app or by email.</p>

          <H2>Contact us</H2>
          <p className="text-neutral-300">
            Email <a className="underline" href="mailto:care@arroundu.com">care@arroundu.com</a>.
          </p>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-neutral-500">
            This page is for information only and doesn’t override the Terms & Conditions.
          </div>
        </article>
      </div>
    </section>
  );
}
