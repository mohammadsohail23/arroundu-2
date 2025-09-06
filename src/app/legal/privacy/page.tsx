export const metadata = {
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
        {/* Top pill link to Terms */}
        <div className="mb-6">
          <a
            href="/legal/terms"
            className="inline-block rounded-full border border-white/10 bg-neutral-900/70 px-4 py-2 text-sm text-neutral-200 hover:border-white/20 hover:bg-neutral-800/70"
          >
            Looking for our Terms & Conditions?{" "}
            <span className="underline underline-offset-2">Click here</span>
          </a>
        </div>

        {/* Left-aligned page card (no mx-auto) */}
        <article className="max-w-3xl rounded-3xl border border-white/10 bg-neutral-900/40 p-6 sm:p-10 shadow-xl backdrop-blur">
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
              <a className="underline" href="mailto:care@arroundu.com">
                care@arroundu.com
              </a>
              .
            </p>
          </div>

          <H2>Who we are</H2>
          <div className="space-y-4 text-neutral-300 leading-7">
            <p>
              ArroundU Inc. (“ArroundU”, “we”, “us”) is the controller of your data. That means we decide how
              your personal data is processed and protected.
            </p>
            <p>
              We’re based in New York, USA, but we apply global privacy standards (including GDPR) to all our
              users. In short: we take your privacy seriously, no matter where you are.
            </p>
          </div>

          <H2>What data do we collect?</H2>
          <p className="text-neutral-300">We collect three types of data:</p>

          <div className="mt-4 space-y-8">
            <div>
              <p className="font-medium text-white">1. Data you provide us</p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>Account data:</strong> When you sign up, you provide your email, name, and password.
                  You may also create a username.
                </li>
                <li>
                  <strong>Profile:</strong> You can add a profile picture and bio (optional).
                </li>
                <li>
                  <strong>Contacts:</strong> If you choose, you can sync contacts to find friends.
                </li>
                <li>
                  <strong>Location:</strong> ArroundU uses your location to show you people nearby (within 1
                  km). Location is collected only if you grant permission.
                </li>
                <li>
                  <strong>Messages:</strong> Anything you send (texts, photos, videos, scheduled messages) is
                  data you provide.
                </li>
                <li>
                  <strong>Support requests:</strong> When you reach out for help, we may receive your email,
                  screenshots, or other info you share.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">2. Data from your use of the Services</p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>Usage data:</strong> How you interact with the app (followers, follows, profile
                  visits, stories, chats).
                </li>
                <li>
                  <strong>Location data:</strong> Your approximate location (1 km radius) so we can show
                  nearby users.
                </li>
                <li>
                  <strong>Device data:</strong> IP address, device model, OS version, crash reports — used for
                  security and improving performance.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">3. Data from third parties</p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
                <li>
                  <strong>Other users:</strong> If someone adds you or sends you a message, we collect that
                  interaction.
                </li>
                <li>
                  <strong>Service providers:</strong> Analytics or hosting providers may share data that helps
                  us run the app.
                </li>
                <li>
                  <strong>Legal requests:</strong> In rare cases, we may receive data from law enforcement for
                  safety or compliance.
                </li>
              </ul>
            </div>
          </div>

          <H2>How we use your data</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>Provide and improve ArroundU’s features.</li>
            <li>Help you discover and connect with people nearby.</li>
            <li>Keep the platform safe (detect spam, fraud, or misuse).</li>
            <li>Send important notifications (like someone followed you or messaged you).</li>
            <li>Respond to support requests.</li>
            <li>Analyze trends (in an anonymous way) to improve the app.</li>
          </ul>
          <p className="mt-4 font-medium text-white">We do not sell your data.</p>

          <H2>Who we share data with</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>
              <strong>Other users:</strong> Your name, username, profile photo, followers/following counts,
              and posts may be visible to others. Location is only shown to people you interact with inside the
              1 km radius.
            </li>
            <li>
              <strong>Service providers:</strong> We work with hosting, analytics, and notification partners
              who help us run the app. They only get the data necessary to perform their services.
            </li>
            <li>
              <strong>Legal authorities:</strong> If required by law or to protect users from harm, we may
              share limited data.
            </li>
            <li>
              <strong>Affiliates/mergers:</strong> If ArroundU merges or is acquired, your data may be
              transferred as part of that process.
            </li>
          </ul>

          <H2>How long we keep your data</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>We keep your data as long as you use ArroundU.</li>
            <li>
              If you delete your account, we remove your data within 30 days, unless we’re required to keep
              some for legal reasons.
            </li>
            <li>If you’re inactive for 36 months, we may automatically delete your account.</li>
          </ul>

          <H2>Your rights</H2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>Access & edit your data in the app (profile, photo, bio).</li>
            <li>Change permissions (location, contacts) anytime in Settings.</li>
            <li>Delete messages, photos, or your account completely.</li>
          </ul>

          <H2>International Transfers</H2>
          <p className="text-neutral-300">
            Because ArroundU operates globally, your data may be transferred and processed outside of your
            home country, including in the United States and other countries where our service providers are
            located.
          </p>
          <p className="mt-4 text-neutral-300">
            Whenever we transfer personal data internationally, we ensure appropriate safeguards are in place,
            such as:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
            <li>
              <strong>Adequacy decisions:</strong> Recognition by relevant authorities that a destination
              country provides adequate protection.
            </li>
            <li>
              <strong>Standard Contractual Clauses (SCCs):</strong> We rely on SCCs approved by the European
              Commission, where required.
            </li>
            <li>
              <strong>Technical safeguards:</strong> Encryption, secure servers, and strict access controls to
              protect your data in transit and at rest.
            </li>
          </ul>
          <p className="mt-4 text-neutral-300">
            No matter where your data goes, we apply the same protections described in this Privacy Policy and
            comply with applicable data protection laws, including GDPR.
          </p>

          <H2>Changes to this policy</H2>
          <p className="text-neutral-300">
            We may update this Privacy Policy as ArroundU grows. If we make big changes, we’ll let you know in
            the app or by email.
          </p>

          <H2>Contact us</H2>
          <p className="text-neutral-300">
            If you have questions, email us at{" "}
            <a className="underline" href="mailto:care@arroundu.com">
              care@arroundu.com
            </a>
            .
          </p>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-neutral-500">
            This page is for information only and doesn’t override the Terms & Conditions.
          </div>
        </article>
      </div>
    </section>
  );
}
