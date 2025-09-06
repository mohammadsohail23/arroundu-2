"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ReachUsForm() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalOpen(true);
      form.reset();
    }, 500);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    if (modalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen) closeBtnRef.current?.focus();
  }, [modalOpen]);

  return (
    <>
      {/* Form card — left column */}
      <div className="mt-8 sm:mt-10 w-full max-w-3xl">
        <div className="rounded-[28px] bg-gradient-to-b from-white/12 to-transparent p-[1px]">
          <div className="rounded-[27px] border border-white/10 bg-neutral-900/60 backdrop-blur-xl px-5 py-6 sm:px-8 sm:py-8 shadow-xl">
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-200">
                  Name <span className="text-neutral-500">(required)</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl bg-neutral-800/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/40"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-200">
                  Email <span className="text-neutral-500">(required)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl bg-neutral-800/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/40"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-200">
                  Message <span className="text-neutral-500">(required)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl bg-neutral-800/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/40"
                  placeholder="Tell us what’s on your mind…"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="text-xs text-neutral-500">
                  We typically reply within 48 hours. By sending, you agree to our{" "}
                  <Link href="/legal" className="underline underline-offset-2 hover:text-neutral-300">
                    Privacy Policy
                  </Link>
                  .
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-w-[110px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-black shadow disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Socials — left column */}
      <div className="mt-10 sm:mt-12 w-full max-w-3xl">
        <p className="text-neutral-400">You can also reach us on:</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <SocialIcon
            label="Instagram"
            href="https://www.instagram.com/arroundu_app?igsh=ZTI5NHVmejU0cXg1&utm_source=qr"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm5.4 1.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
              />
            </svg>
          </SocialIcon>

          <SocialIcon
            label="Facebook"
            href="https://www.facebook.com/profile.php?id=61557333922923&mibextid=LQQJ4d"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path fill="currentColor" d="M13 10h3l.5-3H13V5.5c0-.9.3-1.5 1.7-1.5H17V1h-2.4C11.7 1 10 2.5 10 5.2V7H7v3h3v10h3V10Z" />
            </svg>
          </SocialIcon>

          <SocialIcon label="Threads" href="https://www.threads.net/@arroundu_app">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
              <path
                d="M9.5 12.2c0 1.8 1.2 2.9 2.8 2.9 1.6 0 2.8-1 2.8-2.6 0-1.8-1.5-2.4-3.2-2.4h-.8"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
              />
              <path d="M12 8.6c.4-.8 1.1-1.2 2.1-1.2" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </svg>
          </SocialIcon>

          <SocialIcon label="X (Twitter)" href="https://x.com/arroundu_app?s=21&t=q9bTJFfS2ACHbOY1YzD6dQ">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </SocialIcon>

          <SocialIcon label="TikTok" href="https://www.tiktok.com/@arroundu_app?_t=8lggChvLmKE&_r=1">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path fill="currentColor" d="M21 8.3a6.7 6.7 0 0 1-4.4-1.6v8.1a5.8 5.8 0 1 1-5.8-5.8c.3 0 .7 0 1 .1v3.1a2.7 2.7 0 1 0 1.7 2.6V2h3a6.7 6.7 0 0 0 4.5 4v2.3Z" />
            </svg>
          </SocialIcon>

          <SocialIcon label="YouTube" href="https://youtube.com/@ArroundU?feature=shared">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <rect x="3" y="6" width="18" height="12" rx="3" ry="3" stroke="currentColor" fill="none" />
              <polygon points="10,9 16,12 10,15" fill="currentColor" />
            </svg>
          </SocialIcon>
        </div>
      </div>

      {/* Direct email — left column */}
      <div className="mt-8 w-full max-w-3xl text-neutral-400">
        Prefer email?{" "}
        <a className="underline underline-offset-2 hover:text-neutral-300" href="mailto:care@arroundu.com">
          care@arroundu.com
        </a>
      </div>

      {/* Success Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md rounded-[28px] bg-gradient-to-b from-white/12 to-transparent p-[1px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-[27px] border border-white/10 bg-neutral-900/90 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white">Submitted ✅</h3>
              <p className="mt-2 text-neutral-300">
                Your response is submitted. Our team will reach you as soon as possible.
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  ref={closeBtnRef}
                  onClick={() => setModalOpen(false)}
                  className="rounded-full border border-white/15 bg-neutral-800/70 px-5 py-2 text-sm font-medium text-neutral-100 hover:border-white/25 hover:bg-neutral-800"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-2xl p-2 ring-1 ring-white/10 hover:ring-white/20 bg-neutral-900/60 backdrop-blur transition shadow-sm"
      title={label}
    >
      <div className="text-neutral-200 group-hover:text-white">{children}</div>
    </a>
  );
}
