import React from "react";
import { createRoot } from "react-dom/client";

async function loadPage() {
  try {
    // fetch diretto sul backend Symfony
    const baseUrl = window.location.protocol + "//" + window.location.hostname + ":8000";
    const response = await fetch(`${baseUrl}${window.location.pathname}`, {
      headers: { "Accept": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const { component, props } = data;

    const Page = (await import(`./Pages/${component}.jsx`)).default;

    const root = createRoot(document.getElementById("app"));
    root.render(<Page {...props} />);
  } catch (err) {
    console.error("Failed to load page:", err);
    document.getElementById("app").innerText = "Failed to load page. Check console.";
  }
}

loadPage();
