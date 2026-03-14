import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Christian's AI for Business",
  description:
    "Meet Christian — helping local small businesses in Central West NSW save time and win more work with AI automation.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--teal-light)] to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-[var(--gray-900)] sm:text-5xl">
            G&apos;day, I&apos;m Christian
          </h1>
          <p className="mt-4 text-lg text-[var(--gray-600)]">
            I help local small businesses stop missing calls and start winning more work — using AI that actually makes sense.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--gray-700)]">
            <p>
              I live and work in Central West NSW. I&apos;m not a big-city tech company — I&apos;m a local
              bloke who understands how small businesses run out here, because I run one myself.
            </p>
            <p>
              I started using AI tools in my own business and saw straight away how much time they saved.
              Answering common questions, handling bookings, following up with customers — all the stuff
              that takes you away from the actual work.
            </p>
            <p>
              I figured if it worked for me, it could work for other local businesses too. So I started
              helping tradies, salon owners, cafes, and other small businesses set up simple AI
              assistants that handle the things they don&apos;t have time for.
            </p>
            <p>
              I&apos;m not here to sell you something complicated. I explain everything in plain English,
              set it up properly, and look after it for you. If it&apos;s not the right fit for your business,
              I&apos;ll tell you that too.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--gray-50)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-[var(--gray-900)]">
            How I work
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal-light)]">
                <svg className="h-6 w-6 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--gray-900)]">Plain English</h3>
              <p className="mt-2 text-[var(--gray-600)]">
                No tech jargon. I explain what things do and why they matter in language that makes sense.
                If something sounds confusing, just ask — I&apos;m happy to explain.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal-light)]">
                <svg className="h-6 w-6 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--gray-900)]">No lock-in</h3>
              <p className="mt-2 text-[var(--gray-600)]">
                I don&apos;t believe in locking people into contracts. If you&apos;re happy, you stay.
                If not, you go. Simple as that. I&apos;d rather earn your business every month.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal-light)]">
                <svg className="h-6 w-6 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--gray-900)]">Local</h3>
              <p className="mt-2 text-[var(--gray-600)]">
                I&apos;m based right here in Central West NSW. I understand the local market,
                the challenges small businesses face out here, and what actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[var(--gray-900)]">
            Let&apos;s see if AI is right for your business
          </h2>
          <p className="mt-4 text-lg text-[var(--gray-600)]">
            Book a free chat and I&apos;ll have an honest conversation about whether AI makes sense
            for what you do. No sales pitch — just straight talk.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact/"
              className="w-full rounded-lg bg-[var(--teal)] px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm hover:bg-[var(--teal-dark)] sm:w-auto"
            >
              Book a Free Chat
            </Link>
            <a
              href="tel:0485005656"
              className="w-full rounded-lg border-2 border-[var(--teal)] px-8 py-3.5 text-center text-base font-semibold text-[var(--teal)] hover:bg-[var(--teal-light)] sm:w-auto"
            >
              Call — 0485 00 56 56
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
