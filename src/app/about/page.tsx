import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About • AroundU",
  description: "Why we built AroundU and how we think about real-world connections.",
};

function Divider() {
  return <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />;
}

export default function AboutPage() {
  return (
    <section className="py-10 sm:py-14">
      {/* Left-aligned column (no mx-auto) */}
      <div className="w-full max-w-6xl px-6">
        <article className="max-w-3xl">
          <header>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Welcome to AroundU</h1>
            <p className="mt-6 text-neutral-300 leading-7">
              AroundU started with a simple thought:
              <span className="font-semibold text-neutral-200"> why is it so hard to connect with the people right next to us?</span>
            </p>
            <div className="mt-4 space-y-4 text-neutral-300 leading-7">
              <p>You’re at a party, in class, at a park, or just walking through your city…</p>
              <p>We built AroundU to make that easier. With AroundU, you can instantly see who’s nearby — within 1 km — and connect…</p>
            </div>
          </header>

          <Divider />

          <section>
            <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
            <div className="mt-4 space-y-4 text-neutral-300 leading-7">
              <p>We built AroundU to change that…</p>
              <p>Our mission is simple: bring people closer, right where they are…</p>
              <p>We believe social apps shouldn’t be about endless scrolling…</p>
            </div>
          </section>

          <Divider />

          <section>
            <h2 className="text-2xl font-semibold text-white">The AroundU Way</h2>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-3">
                <span className="text-xl">🧑‍🤝‍🧑</span>
                <div>
                  <h3 className="font-medium text-white">Connections over followers</h3>
                  <p className="text-neutral-300 leading-7">Real people, real conversations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <h3 className="font-medium text-white">Nearby, not far away</h3>
                  <p className="text-neutral-300 leading-7">The best friendships start close to home.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">✨</span>
                <div>
                  <h3 className="font-medium text-white">Simple, not complicated</h3>
                  <p className="text-neutral-300 leading-7">One clean place to connect.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🔒</span>
                <div>
                  <h3 className="font-medium text-white">Respect comes first</h3>
                  <p className="text-neutral-300 leading-7">Connections are private and mutual.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🎉</span>
                <div>
                  <h3 className="font-medium text-white">Fun matters</h3>
                  <p className="text-neutral-300 leading-7">Easy, natural, never forced.</p>
                </div>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </section>
  );
}
