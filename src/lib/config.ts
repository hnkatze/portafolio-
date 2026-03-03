import emailjs from "@emailjs/browser";
import type { PropsFormData } from "./types";

// === EmailJS ===
const EMAILJS_SERVICE_ID = "service_l03jp8o";
const EMAILJS_TEMPLATE_ID = "template_e50gnna";
const EMAILJS_PUBLIC_KEY = "7pECfg9rRSYWn1ASA";

export async function submitFormData(formData: PropsFormData) {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        title: formData.title,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      EMAILJS_PUBLIC_KEY
    );

    return true;
  } catch (e) {
    console.error("Error sending message:", e);
    return false;
  }
}
