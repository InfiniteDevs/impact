"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    setMessage("Sending email...");

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (response.ok) {
      setMessage("Email sent successfully!");
    } else {
      setMessage(`Error: ${result.error}`);
    }
  };

  return (
    <div>
      <button onClick={sendEmail}>Send Email</button>
      {message && <p>{message}</p>}
    </div>
  );
}
