import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 text-center text-gray-500">
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <small className="block text-xs">
        I made this website by watching ByteGrad&apos;s tutorial.
      </small>
    </footer>
  );
}
