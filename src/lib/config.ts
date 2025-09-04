import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import type { PropsFormData } from "./types";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function submitFormData(formData: PropsFormData) {
  try {
    await addDoc(collection(db, "contacts"), {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString(),
    });
    
    // Show success message with retro styling
    showNotification("✅ Message sent successfully!", "success");
    return true;
  } catch (e) {
    console.error("Error sending message:", e);
    showNotification("❌ Error sending message. Please try again.", "error");
    return false;
  }
}

// Enhanced notification function with retro styling
function showNotification(message: string, type: "success" | "error") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.retro-notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `retro-notification fixed top-4 right-4 z-50 px-6 py-4 border-2 rounded font-mono font-bold transition-all duration-300 transform translate-x-full`;
  
  if (type === "success") {
    notification.className += ` bg-green-100 border-green-400 text-green-800`;
  } else {
    notification.className += ` bg-red-100 border-red-400 text-red-800`;
  }
  
  notification.style.boxShadow = '4px 4px 0px rgba(0, 0, 0, 0.1)';
  notification.textContent = message;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}
