"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Kontakt", path: "/kontakt" },
];

export default function KontaktPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Fejl");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="bg-navy-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6">
            <Breadcrumb items={crumbs} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Kontakt os
          </h1>
          <p className="mt-3 text-navy-200">
            Har du spørgsmål eller feedback? Send os en besked.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-xl px-4 sm:px-6 py-12">
        {status === "sent" ? (
          <div className="bg-pitch-50 border border-pitch-200 rounded-lg p-6 text-center">
            <p className="text-pitch-600 font-medium">
              Tak for din besked! Vi vender tilbage hurtigst muligt.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Navn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-pitch-500 focus:ring-1 focus:ring-pitch-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-pitch-500 focus:ring-1 focus:ring-pitch-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Besked
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-pitch-500 focus:ring-1 focus:ring-pitch-500 outline-none resize-y"
              />
            </div>

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Der opstod en fejl. Prøv venligst igen.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-navy-800 text-white font-medium rounded-lg px-6 py-3 text-sm hover:bg-navy-700 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sender..." : "Send besked"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
