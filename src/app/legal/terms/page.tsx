import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions • AroundU",
  description: "The rules for using AroundU.",
};

function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={`mt-12 scroll-mt-28 text-2xl font-semibold text-white ${props.className ?? ""}`}
    />
  );
}

export default function TermsPage() {
  const lastUpdated = "Aug 31st, 2025";

  return (
    <section className="py-10 sm:py-14">
      {/* Left-anchored container */}
      <div className="w-full max-w-6xl px-6">
        {/* Top pill link → Privacy */}
        <div className="mb-6">
          <Link
            href="/legal"
            className="inline-block rounded-full border border-white/10 bg-neutral-900/70 px-4 py-2 text-sm text-neutral-200 hover:border-white/20 hover:bg-neutral-800/70"
          >
            Looking for our Privacy Policy? <span className="underline underline-offset-2">Click here</span>
          </Link>
        </div>

        {/* Free-flow content (no card styles) */}
        <article className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white">Terms & Conditions</h1>
          <p className="mt-3 text-sm text-neutral-400">Last updated: {lastUpdated}</p>

          <div className="mt-8 space-y-6 text-neutral-300 leading-7">
            <p>
              Welcome to ArroundU (“ArroundU”, “we”, “us”, “our”). These Terms of Service (“Terms”) are a legal
              agreement between you and ArroundU Inc. and explain the rules for using our services, websites,
              and applications (“Services”).
            </p>
            <p>
              By using ArroundU, you agree to these Terms. If you don’t agree, we can’t let you use our
              Services (sorry).
            </p>
          </div>

          <H2>1. Who can use ArroundU</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>You must be 16 years or older to use ArroundU.</li>
            <li>You must create an account with accurate information.</li>
            <li>You are responsible for keeping your login details safe.</li>
          </ul>

          <H2>2. Your Account</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>You can create a profile with your name, username, photo, and bio.</li>
            <li>You are responsible for anything that happens on your account.</li>
            <li>You may not impersonate someone else or provide false information.</li>
            <li>You may delete your account at any time in Settings.</li>
          </ul>

          <H2>3. What ArroundU is</H2>
          <div className="mt-3 space-y-2 text-neutral-300">
            <p>ArroundU is a location-based social app that helps you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Discover people nearby (within a 1 km radius).</li>
              <li>Follow users, or let them follow you.</li>
              <li>Send and receive messages, photos, and videos.</li>
              <li>Post and view stories.</li>
            </ul>
            <p>We’re here to help you connect with people around you in a fun, safe, and respectful way.</p>
          </div>

          <H2>4. Your Content</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>You own the content (photos, videos, messages) you share on ArroundU.</li>
            <li>By posting, you give us a license to host, display, and distribute your content so it can function in the app.</li>
            <li>You may not post harmful, illegal, or abusive content.</li>
            <li>If you delete your account, your content will also be deleted (except as required by law).</li>
          </ul>

          <H2>5. Safety & Respect</H2>
          <p className="text-neutral-300">We want ArroundU to be a safe space. By using the app, you agree not to:</p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>Harass, threaten, or bully others.</li>
            <li>Post content that is hateful, harmful, or violent.</li>
            <li>Use ArroundU for spam, scams, or illegal activity.</li>
            <li>Collect or misuse other users’ data.</li>
          </ul>
          <p className="mt-3 text-neutral-300">If you break these rules, we may suspend or delete your account.</p>

          <H2>6. Privacy</H2>
          <p className="text-neutral-300">
            Your use of ArroundU is also governed by our Privacy Policy, which explains how we collect and use your data. Please read it carefully.
          </p>

          <H2>7. Our Rights</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>We may update, add, or remove features of ArroundU.</li>
            <li>We may suspend the Services at any time for maintenance, safety, or other reasons.</li>
            <li>We may remove content that violates these Terms or our community standards.</li>
          </ul>

          <H2>8. Limits on Liability</H2>
          <div className="mt-3 space-y-2 text-neutral-300">
            <p>ArroundU is built to connect people, but we cannot guarantee:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>That the Services will always work perfectly or without interruption.</li>
              <li>The actions or behaviors of other users.</li>
              <li>Any damages caused by the use of content shared on ArroundU.</li>
            </ul>
            <p>To the maximum extent permitted by law, ArroundU is not liable for any indirect, incidental, or consequential damages.</p>
          </div>

          <H2>9. Termination</H2>
          <p className="text-neutral-300">
            You may stop using ArroundU at any time. We may suspend or terminate your account if you violate these Terms, break the law, or harm the community.
          </p>

          <H2>10. Governing Law</H2>
          <p className="text-neutral-300">ArroundU Inc. is a U.S. company registered in New York. These Terms are governed by the laws of New York State.</p>

          <H2>11. Contact Us</H2>
          <p className="text-neutral-300">
            If you have any questions about these Terms, contact us at:{" "}
            <a className="underline" href="mailto:care@arroundu.com">care@arroundu.com</a>
          </p>

          <H2>Community Guidelines</H2>
          <div className="mt-3 space-y-4 text-neutral-300">
            <p>ArroundU is all about bringing people closer. To keep it fun and safe, here are our simple ground rules:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>✨ Be respectful</strong> — No hate, harassment, or bullying.</li>
              <li><strong>📸 Share responsibly</strong> — No harmful, illegal, or explicit content.</li>
              <li><strong>🤝 Consent matters</strong> — Connect respectfully; no pressure if someone doesn’t respond.</li>
              <li><strong>🚫 No spam, no scams</strong> — No scams, fake accounts, or unwanted promotions.</li>
              <li><strong>📍 Keep it real</strong> — Don’t impersonate others or spread false info.</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
