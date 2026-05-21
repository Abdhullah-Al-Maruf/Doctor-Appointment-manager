// for update the booking data
"use server";

import { revalidatePath } from "next/cache";

export async function updateAppointment(id, formData) {
  const updatedData = Object.fromEntries(formData.entries());

  await fetch(`http://localhost:5000/appointments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });

// 
revalidatePath("/dashboard/my-booking");
}