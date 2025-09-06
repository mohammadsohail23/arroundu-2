import type { Metadata } from "next";
import ReachUsForm from "@/components/ReachUsForm";

export const metadata: Metadata = {
  title: "Reach Us • AroundU",
  description: "Questions or feedback? Say hello to the AroundU team.",
};

export default function ReachUsPage() {
  return (
    <section className="py-10 sm:py-14">
      {/* Left-anchored page container */}
      <div className="w-full max-w-6xl px-6">
        {/* Left-aligned heading + copy */}
        <header className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
            <span className="text-white">Have a question or feedback?</span>{" "}
            <span className="text-neutral-300">We’d love to hear from you.</span>
          </h1>

          {/* Matches the white/gray emphasis from the screenshot */}
          <p className="mt-3 sm:mt-4 max-w-3xl text-neutral-400 leading-relaxed">
            Just <span className="text-white">drop your details below</span> and{" "}
            <span className="text-white">we’ll get back to you.</span>{" "}
            <span className="italic">
              (You can also <span className="text-white not-italic">share the changes you’d like to see</span>.)
            </span>
          </p>
        </header>

        {/* Form (left column) */}
        <div className="mt-8 max-w-3xl">
          <ReachUsForm />
        </div>
      </div>
    </section>
  );
}
