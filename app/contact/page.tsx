import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Christian's AI for Business",
  description:
    "Get in touch with Christian's AI for Business. Book a free chat about AI automation for your small business in Central West NSW.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[var(--teal-light)] to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-[var(--gray-900)] sm:text-5xl">
            Let&apos;s have a chat
          </h1>
          <p className="mt-4 text-lg text-[var(--gray-600)]">
            No pressure, no jargon. Just a friendly conversation about how AI can help your business.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--gray-900)]">Send me a message</h2>
            <p className="mt-2 text-[var(--gray-600)]">
              Fill in the form below and I&apos;ll get back to you within a business day.
            </p>
            <form
              action="https://formspree.io/f/REPLACE_ME"
              method="POST"
              className="mt-6 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--gray-700)]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-[var(--gray-200)] px-4 py-2.5 text-[var(--gray-900)] shadow-sm outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal-light)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-[var(--gray-700)]">
                  Business type
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="mt-1 w-full rounded-lg border border-[var(--gray-200)] px-4 py-2.5 text-[var(--gray-900)] shadow-sm outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal-light)]"
                  placeholder="e.g. Plumbing, Hair salon, Cafe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--gray-700)]">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 w-full rounded-lg border border-[var(--gray-200)] px-4 py-2.5 text-[var(--gray-900)] shadow-sm outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal-light)]"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--gray-700)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-[var(--gray-200)] px-4 py-2.5 text-[var(--gray-900)] shadow-sm outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal-light)]"
                  placeholder="Tell me a bit about your business and what you're looking for"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[var(--teal)] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[var(--teal-dark)] sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--gray-900)]">Or just give me a call</h2>
            <p className="mt-2 text-[var(--gray-600)]">
              Sometimes it&apos;s easier to just pick up the phone. I&apos;m happy to have a quick chat.
            </p>

            <div className="mt-8 rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal-light)]">
                  <svg className="h-6 w-6 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--gray-500)]">Phone</p>
                  <a href="tel:0485005656" className="text-xl font-bold text-[var(--teal)] hover:text-[var(--teal-dark)]">
                    0485 00 56 56
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal-light)]">
                  <svg className="h-6 w-6 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--gray-500)]">Location</p>
                  <p className="text-lg font-semibold text-[var(--gray-900)]">Central West, NSW</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[var(--teal)] bg-[var(--teal-light)] p-6">
              <h3 className="font-semibold text-[var(--gray-900)]">What happens next?</h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--gray-700)]">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-[var(--teal)]">1.</span>
                  I&apos;ll get back to you within a business day
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-[var(--teal)]">2.</span>
                  We&apos;ll have a quick, no-pressure chat about your business
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-[var(--teal)]">3.</span>
                  If it&apos;s a good fit, I&apos;ll put together a plan for you
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
