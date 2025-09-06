import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is AroundU • Get to know the app",
  description: "See what you can do in AroundU and find answers to common questions.",
};

type Shot = { src: string; title: string; desc: string };

const shots: Shot[] = [
  { src: "/ss1.PNG", title: "Home · Following", desc: "On this screen, you can check out your followers. Just swipe up or down to explore — you’ll see 9 profiles at a time." },
  { src: "/ss2.PNG", title: "Home · Nearby", desc: "On this screen, you can see people nearby within 1 km. Tap a profile to follow them or start a chat." },
  { src: "/ss3.PNG", title: "Chat", desc: "See your conversations here. Search at the top or tap a profile to start chatting." },
  { src: "/ss4.PNG", title: "Chat · Direct Message", desc: "This is your chat screen for one-on-one conversations. Send messages, share photos, or even schedule a message to stay connected." },
  { src: "/ss5.PNG", title: "Profile", desc: "This is your profile screen. View your followers, update your details, and manage how others see you." },
  { src: "/ss6.PNG", title: "Edit Profile", desc: "Update your profile — add a photo, change your name, username, bio, or phone number. Make it yours." },
  { src: "/ss7.PNG", title: "Settings", desc: "Manage your privacy, reset your password, clear history, block users, and customize your experience — all in one clean screen." },
];

export default function WhatIsAroundUPage() {
  return (
    <section className="py-10 sm:py-14">
      {/* Left-anchored container */}
      <div className="w-full max-w-6xl px-6">
        <header className="mb-8 sm:mb-12 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Get to know <span className="text-white/90">ArroundU.</span>
          </h1>
        </header>

        {/* Grid: items stretch so cards share the same height */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {shots.map((s, idx) => (
            <PhoneCard key={s.src} {...s} priority={idx < 2} />
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-14 sm:mt-16 max-w-3xl">
          <h2 className="text-3xl font-semibold text-white">FAQs</h2>
          <div className="mt-6 space-y-4">
            <Faq q="What is ArroundU?" a="ArroundU is a social app that helps you discover and connect with people nearby (within 1 km). You can follow, chat, and share stories with others around you." open />
            <Faq q="Do I need to share my phone number?" a="Nope. Unlike traditional social apps, you don’t have to give out your number or socials. Connections stay private inside ArroundU." />
            <Faq q="How does the 1 km radius work?" a="ArroundU shows you people who are within 1 km of your location. You can adjust permissions in your phone settings anytime." />
            <Faq q="Can people see my exact location?" a="No. Others will only know you’re nearby within the 1 km radius — not your exact spot." />
            <Faq q="Who can follow me?" a="Anyone nearby can send you a follow request. You choose whether to accept or not." />
            <Faq q="Can I block or report someone?" a="Yes. You can block or report users directly in the app, and they won’t be able to contact you again." />
            <Faq q="What if I don't want to appear nearby?" a='You can turn off location sharing by the button below it says, “Stop sharing”.' />
            <Faq q="What is a scheduled message?" a="Scheduled messages let you type something now and send it later — perfect for reminders or planned chats." />
            <Faq
              q="Is my data safe?"
              a={
                <>
                  Yes. We don’t sell your data. Your information is encrypted, and you can delete your
                  account anytime. Check out our{" "}
                  <Link href="/legal" className="underline underline-offset-2">Privacy Policy</Link>.
                </>
              }
            />
            <Faq
              q="How can I contact support?"
              a={
                <>
                  You can always reach us at{" "}
                  <a href="mailto:care@arroundu.com" className="underline underline-offset-2">care@arroundu.com</a>.
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({
  src, title, desc, priority = false, className = "",
}: Shot & { priority?: boolean; className?: string }) {
  return (
    <article className={`h-full ${className}`}>
      {/* gradient ring */}
      <div className="h-full rounded-[28px] bg-gradient-to-b from-white/12 to-transparent p-[1px]">
        {/* card shell */}
        <div className="flex h-full flex-col rounded-[27px] border border-white/10 bg-neutral-900/50 p-5 sm:p-6 shadow-xl backdrop-blur-xl">
          {/* header block gets a fixed minimum height so text length doesn't change the card height */}
          <div className="mb-4 min-h-[84px]">
            <h3 className="text-sm font-medium text-white">{title}</h3>
            <p className="mt-1 text-xs text-neutral-400">
              {desc}
            </p>
          </div>

          {/* uniform phone frame using fixed aspect ratio (identical across cards) */}
          <div className="relative w-full aspect-[9/19.5] overflow-hidden rounded-[22px] border border-white/10 bg-black/70 shadow-inner">
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 1280px) 100vw, 25vw"
              className="object-contain"
              priority={priority}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function Faq({ q, a, open = false }: { q: string; a: React.ReactNode; open?: boolean }) {
  return (
    <details
      className="group rounded-2xl border border-white/10 bg-neutral-900/60 px-4 sm:px-6 py-4"
      {...(open ? { open: true } : {})}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <h3 className="text-base sm:text-lg font-medium text-white">{q}</h3>
        <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
          <span className="absolute h-3 w-0.5 bg-white/80 transition group-open:rotate-90" />
          <span className="absolute h-0.5 w-3 bg-white/80" />
        </span>
      </summary>
      <div className="pt-3 text-sm text-neutral-300">{a}</div>
    </details>
  );
}
