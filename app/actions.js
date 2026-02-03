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

export async function registerStudent(formData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const course = formData.get("course");
  const location = formData.get("location");

  try {
    await prisma.student.create({
      data: { fullName, email, phone, course, location }
    });
    return { success: true };
  } catch (error) {
    console.error("Registration Error:", error);
    return { success: false, error: "Email already registered or system error." };
  }
}