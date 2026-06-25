"use client";

import { useSearchParams } from "next/navigation";

export default function ContactStatus() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  if (status === "success") {
    return (
      <p
        className="form-status form-status-success"
        role="status"
        aria-live="polite"
      >
        Thanks, your request was sent successfully. We will reach out soon.
      </p>
    );
  }

  if (status === "error") {
    return (
      <p
        className="form-status form-status-error"
        role="status"
        aria-live="polite"
      >
        We could not send your request right now. Please try again in a moment.
      </p>
    );
  }

  return null;
}
