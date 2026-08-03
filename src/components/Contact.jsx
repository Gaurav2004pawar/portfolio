import React from 'react'

const Contact = () => {
  return (
    <section name="Contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-2xl sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s build something meaningful together.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Interested in a modern website or a full-stack project? I&apos;d love to hear from you.
              </p>
              <div className="mt-6 space-y-2 text-slate-300">
                <p>Email: gauravpawar@example.com</p>
                <p>Location: Pune, India</p>
              </div>
            </div>

            <form action="https://getform.io/f/p8byw4yudzo" method="POST" className="space-y-4 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <input type="text" name="name" placeholder="Your Name" required className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-400" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-400" />
              <textarea name="message" placeholder="Your Message" required rows="5" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-400" />
              <button type="submit" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
