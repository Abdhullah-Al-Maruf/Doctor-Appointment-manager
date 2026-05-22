// for update the booking data
"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function updateAppointment(id, formData) {
  // jwt token  for server side authentication
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const updatedData = Object.fromEntries(formData.entries());

 
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) {
    throw new Error("Update failed");
  }
  //
  revalidatePath("/dashboard/my-booking");
}

// app/actions/deleteAppointment.js

export async function deleteAppointment(id) {
  // jwt token  for server side authentication
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Delete failed");
  }

  revalidatePath("/dashboard/my-booking");
}
