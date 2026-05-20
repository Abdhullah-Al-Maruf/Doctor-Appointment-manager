'use client';

// Root loading is set to null so that auth pages (login, register) and other segments 
// outside (otherpages) do not trigger a visible loading animation during navigation.
export default function RootLoading() {
  return null;
}