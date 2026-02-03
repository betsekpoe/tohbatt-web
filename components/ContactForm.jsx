"use client"
import { submitInquiry } from "@/app/actions"
import { useState } from "react"

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  async function handleSubmit(formData) {
    await submitInquiry(formData)
    setSent(true)
  }

  if (sent) return <p className="text-toh-green font-bold">Message sent! We will contact you soon.</p>

  return (
    <form action={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow-xl">
      <input name="name" placeholder="Your Name" className="w-full p-3 border rounded" required />
      <input name="email" type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
      <textarea name="message" placeholder="How can we help?" className="w-full p-3 border rounded h-32" required />
      <button className="w-full bg-toh-navy text-white py-3 font-bold hover:bg-toh-gold transition-colors">
        Send Message
      </button>
    </form>
  )
}