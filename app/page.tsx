import Link from "next/link";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-[var(--teal-light)] to-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--gray-900)] sm:text-5xl lg:text-6xl">
          We answer your calls
          <br />
          <span className="text-[var(--teal)]">when you can&apos;t.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--gray-600)] sm:text-xl">
          24/7 AI phone assistant for local businesses in Central West NSW. Never miss a job again.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:0485005656"
            className="w-full rounded-lg bg-[var(--teal)] px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm hover:bg-[var(--teal-dark)] sm:w-auto"
          >
            Call the AI now — 0485 005 656
          </a>
          <Link
            href="/contact/"
            className="w-full rounded-lg border-2 border-[var(--teal)] px-8 py-3.5 text-center text-base font-semibold text-[var(--teal)] hover:bg-[var(--teal-light)] sm:w-auto"
          >
            Book a free chat
          </Link>
        </div>
      </div>
    </section>
  );
}

function ROIFraming() {
  const stats = [
    {
      stat: "1 missed call = $300–$800 lost",
      description: "For a tradie, that's a job gone to a competitor.",
    },
    {
      stat: "We charge from $100/month",
      description: "Less than one missed job pays for a year.",
    },
    {
      stat: "24/7 answering",
      description: "While you're on the tools, in transit, or asleep.",
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-[var(--gray-900)] sm:text-4xl">
          Do the numbers
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.stat}
              className="rounded-xl border border-[var(--gray-200)] bg-white p-6 shadow-sm text-center"
            >
              <p className="text-xl font-bold text-[var(--teal)]">{item.stat}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gray-600)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const points = [
    {
      icon: "📞",
      title: "Missing calls while you're busy",
      description: "You're on a job, with a client, or flat out — and the phone just rings out.",
    },
    {
      icon: "🔁",
      title: "Answering the same questions",
      description: "\"What are your hours?\" \"Do you do quotes?\" Over and over again.",
    },
    {
      icon: "🌙",
      title: "No after-hours bookings",
      description: "People want to book at 9pm. If you're not available, they call someone else.",
    },
    {
      icon: "📧",
      title: "Too much time on admin",
      description: "Emails, follow-ups, reminders — it all adds up and takes you away from the real work.",
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-[var(--gray-900)] sm:text-4xl">
          Is this you?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[var(--gray-600)]">
          If any of these sound familiar, you&apos;re not alone. Most small business owners deal with this every day.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-[var(--gray-200)] bg-white p-6 shadow-sm"
            >
              <span className="text-3xl">{point.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-[var(--gray-900)]">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gray-600)]">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowAIHelps() {
  const benefits = [
    {
      title: "Never miss a call again",
      description:
        "An AI assistant answers your phone 24/7. It takes messages, answers common questions, and books appointments — even at 2am.",
    },
    {
      title: "Free up your time",
      description:
        "Stop doing repetitive admin. Let AI handle appointment reminders, follow-up messages, and FAQ replies so you can focus on the work you're good at.",
    },
    {
      title: "Win more work",
      description:
        "Every missed call is a missed opportunity. When someone calls and gets an answer straight away, they're more likely to book with you than call your competitor.",
    },
  ];

  return (
    <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-[var(--gray-900)] sm:text-4xl">
          How AI helps your business
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--teal-light)]">
                <svg className="h-7 w-7 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[var(--gray-900)]">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-[var(--gray-600)]">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-[var(--teal)] bg-gradient-to-br from-[var(--teal-light)] to-white p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--teal)]">Real Results</p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            A local tradie was missing calls while on the tools.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--gray-700)]">
            He knew he was losing work but couldn&apos;t answer the phone mid-job. We set up an AI phone assistant
            that answers calls, takes details, and sends him a summary he can check when he&apos;s ready.
          </p>
          <p className="mt-4 text-lg font-semibold text-[var(--teal)]">
            He stopped missing jobs. Simple as that.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Free chat",
      description:
        "We have a quick, no-pressure conversation about your business. I'll ask what's taking up your time and where you're losing customers.",
    },
    {
      step: "2",
      title: "I set it up",
      description:
        "I build your AI assistant, customise it for your business, and test it properly before it goes live. You don't need to do anything technical.",
    },
    {
      step: "3",
      title: "I look after it",
      description:
        "Once it's running, I keep an eye on it. If something needs tweaking or you want changes, just give me a call. No lock-in, cancel anytime.",
    },
  ];

  return (
    <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-[var(--gray-900)] sm:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-[var(--gray-600)]">
          Three simple steps. No tech skills needed.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--teal)] text-2xl font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[var(--gray-900)]">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-[var(--gray-600)]">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const industries = [
    {
      icon: "🔧",
      name: "Tradies",
      description: "Plumbers, sparkies, builders — answer calls while you're on the tools.",
    },
    {
      icon: "💇",
      name: "Hair & Beauty",
      description: "Let clients book appointments anytime, even when you're with someone.",
    },
    {
      icon: "☕",
      name: "Cafes & Restaurants",
      description: "Handle bookings and answer common questions without pulling staff off the floor.",
    },
    {
      icon: "🏥",
      name: "Medical & Allied Health",
      description: "Manage appointment enquiries and after-hours calls professionally.",
    },
    {
      icon: "🏠",
      name: "Real Estate",
      description: "Capture every enquiry, schedule inspections, and never miss a potential buyer.",
    },
    {
      icon: "🔧",
      name: "Automotive",
      description: "Mechanics and tyre shops — answer calls while you're under a car, not putting down tools.",
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-[var(--gray-900)] sm:text-4xl">
          Built for local businesses like yours
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="rounded-xl border border-[var(--gray-200)] bg-white p-6 shadow-sm hover:border-[var(--teal)] hover:shadow-md"
            >
              <span className="text-3xl">{ind.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-[var(--gray-900)]">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gray-600)]">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function Pricing() {
  const packages = [
    {
      name: "Never Miss a Call",
      setup: "$500",
      monthly: "$100",
      features: [
        "AI answers every call 24/7",
        "Books appointments",
        "Takes messages",
        "SMS you instantly",
      ],
      popular: false,
      paymentLink: "https://buy.stripe.com/fZu6oA3JkaZBamzg503cc00",
    },
    {
      name: "Always Open",
      setup: "$800",
      monthly: "$150",
      features: [
        "Everything in Never Miss a Call",
        "After-hours online booking",
        "SMS confirmations to customers",
        "FAQ auto-responses",
      ],
      popular: true,
      paymentLink: "https://buy.stripe.com/6oU4gs1Bc3x99iv2ea3cc01",
    },
    {
      name: "Run on Autopilot",
      setup: "$1,500",
      monthly: "$250",
      features: [
        "Everything in Always Open",
        "Follow-up texts to missed leads",
        "Review request automation",
        "Monthly check-in with Christian",
      ],
      popular: false,
      paymentLink: "https://buy.stripe.com/8x228k2Fg4BdbqD4mi3cc02",
    },
  ];

  return (
    <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-[var(--gray-900)] sm:text-4xl">
          Simple, honest pricing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-[var(--gray-600)]">
          No hidden fees. No lock-in. Cancel anytime.
        </p>
        <div className="mx-auto mt-6 w-fit rounded-full bg-[var(--teal-light)] px-5 py-2 text-center text-sm font-semibold text-[var(--teal)]">
          First 14 days free — no lock-in, cancel anytime
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl bg-white p-8 shadow-sm ${
                pkg.popular
                  ? "border-2 border-[var(--teal)] shadow-md relative"
                  : "border border-[var(--gray-200)]"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--teal)] px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <p className="text-lg font-semibold text-[var(--gray-900)]">{pkg.name}</p>
              <p className="mt-3 text-4xl font-bold text-[var(--gray-900)]">
                {pkg.monthly}<span className="text-lg font-normal text-[var(--gray-500)]">/mo</span>
              </p>
              <p className="mt-1 text-sm text-[var(--gray-500)]">{pkg.setup} one-time setup</p>
              <ul className="mt-6 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[var(--gray-700)]">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact/"
                className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold ${
                  pkg.popular
                    ? "bg-[var(--teal)] text-white hover:bg-[var(--teal-dark)]"
                    : "border border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal-light)]"
                }`}
              >
                Book a free chat
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[var(--gray-500)]">
          All packages: No lock-in. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const questions = [
    {
      q: "Do I need to be tech-savvy?",
      a: "Not at all. I handle everything — the setup, the testing, and the ongoing support. You just tell me how your business works, and I take care of the rest.",
    },
    {
      q: "What if I want to cancel?",
      a: "No worries. There are no lock-in contracts. If it's not working for you, you can cancel the monthly support anytime. No hard feelings.",
    },
    {
      q: "Will my customers know they're talking to AI?",
      a: "The AI assistant is upfront about being an AI, but it's friendly and helpful. Most customers are just happy to get an answer straight away instead of voicemail.",
    },
    {
      q: "How long does it take to set up?",
      a: "Usually a week or two. It depends on how complex your needs are, but I'll give you a clear timeline after our first chat.",
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-[var(--gray-900)] sm:text-4xl">
          Common questions
        </h2>
        <div className="mt-12 space-y-4">
          {questions.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-[var(--gray-200)] bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 text-left font-semibold text-[var(--gray-900)] [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  className="h-5 w-5 shrink-0 text-[var(--gray-400)] transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-[var(--gray-600)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[var(--teal)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to stop missing calls?
        </h2>
        <p className="mt-4 text-lg text-teal-100">
          Let&apos;s have a quick chat about your business. No pressure, no jargon — just a friendly conversation
          about how AI can save you time and win you more work.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact/"
            className="w-full rounded-lg bg-white px-8 py-3.5 text-center text-base font-semibold text-[var(--teal)] shadow-sm hover:bg-teal-50 sm:w-auto"
          >
            Book a Free Chat
          </Link>
          <a
            href="tel:0485005656"
            className="w-full rounded-lg border-2 border-white px-8 py-3.5 text-center text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
          >
            Call — 0485 00 56 56
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ROIFraming />
      <PainPoints />
      <HowAIHelps />
      <CaseStudy />
      <HowItWorks />
      <Industries />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
