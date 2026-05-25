import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getDoctorsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
  const data = await res.json();
  return data;
};

export const getBookingsData = async () => {

    // jwt token  for server side authentication
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getDoctorById = async (id) => {
  // jwt token  for server side authentication
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`,{
//    this is for sending the token in the header for authentication and will be go on server
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};