// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDHmoL0NFcfuAhPJktu4h5YtTdBVfC6Pk",
  authDomain: "dhanrajportfolio04.firebaseapp.com",
  databaseURL: "https://dhanrajportfolio04-default-rtdb.firebaseio.com", // Correct Realtime Database URL
  projectId: "dhanrajportfolio04",
  storageBucket: "dhanrajportfolio04.appspot.com",
  messagingSenderId: "124018532071",
  appId: "1:124018532071:web:ae854ef8827221987ccc42",
  measurementId: "G-GY2DJ00N3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle Form Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form reload

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Collected Data:", { name, email, message });

  try {
    // Push data to Firebase Realtime Database
    const contactRef = ref(database, "contacts");
    await push(contactRef, {
      name: name,
      email: email,
      message: message,
    });

    console.log("Data sent successfully");
    contactForm.reset(); // Clear form
    alert("Message sent successfully!");
  } catch (error) {
    console.error("Error sending data:", error);
    alert("An error occurred. Please try again.");
  }
});
