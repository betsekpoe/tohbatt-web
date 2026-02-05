"use client"
import { submitInquiry } from "@/app/actions"
import { useState } from "react"

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  async function handleSubmit(formData) {
    await submitInquiry(formData)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-fade-in z-50">
        <p className="font-bold">Message sent!</p>
        <p className="text-sm">We will contact you soon.</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8 md:p-12 bg-gray-100 rounded-3xl">
      <div className="mx-auto w-full max-w-137.5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-toh-navy font-bold text-2xl mb-6">Send us a message</div>
        <form action={handleSubmit}>
          <div className="mb-5">
            <div className="w-full flex flex-col-reverse">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Kwame Owusu"
                required
                className="peer w-full pb-2 border-b border-[#DDE3EC] bg-white text-base font-medium text-toh-navy outline-none focus:border-toh-gold placeholder-transparent focus:placeholder-gray-300 transition-colors"
                autoComplete="off"
              />
              <label 
                htmlFor="name" 
                className="text-toh-navy font-medium text-sm mb-2 peer-focus:text-toh-gold transition-colors"
              >
                Full Name
              </label>
            </div>
          </div>

          <div className="mb-5">
            <div className="w-full flex flex-col-reverse">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="kowusu25@mail.com"
                required
                className="peer w-full pb-2 border-b border-[#DDE3EC] bg-white text-base font-medium text-toh-navy outline-none focus:border-toh-gold placeholder-transparent focus:placeholder-gray-300 transition-colors"
                autoComplete="off"
              />
              <label 
                htmlFor="email" 
                className="text-toh-navy font-medium text-sm mb-2 peer-focus:text-toh-gold transition-colors"
              >
                Email Address
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="w-full flex flex-col-reverse">
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Write your message..."
                required
                className="peer w-full pb-2 border-b border-[#DDE3EC] bg-white text-base font-medium text-toh-navy outline-none focus:border-toh-gold placeholder-transparent focus:placeholder-gray-300 transition-colors resize-none"
              ></textarea>
              <label 
                htmlFor="message" 
                className="text-toh-navy font-medium text-sm mb-2 peer-focus:text-toh-gold transition-colors"
              >
                Message
              </label>
            </div>
          </div>

          <button className="w-full bg-toh-light text-toh-navy border border-toh-navy px-8 py-4 rounded-lg font-bold text-base hover:bg-toh-navy hover:text-white cursor-pointer transition-all duration-200 shadow-lg uppercase tracking-wider">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}