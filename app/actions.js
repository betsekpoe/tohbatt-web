"use server"
import prisma from "@/lib/db" // Import the clean instance

export async function submitInquiry(formData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  try {
    await prisma.inquiry.create({
      data: {
        name,
        email,
        message,
        type: "General Inquiry"
      }
    })
    return { success: true }
  } catch (error) {
    console.error("Database Error:", error)
    return { success: false }
  }
}