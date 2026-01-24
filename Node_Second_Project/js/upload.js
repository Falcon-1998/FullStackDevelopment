const API_URL = "http://localhost:3000/api/sightings";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sighting-form");
  form.addEventListener("submit", handleFormSubmit);
});

async function handleFormSubmit(e) {
  e.preventDefault();

  // Get form data
  const form = e.target;
  const title = document.getElementById("title").value;
  const datetime = document.getElementById("datetime").value;
  const location = document.getElementById("location").value;
  const details = document.getElementById("details").value;

  // Validate inputs
  if (!title || !datetime || !location || !details) {
    showMessage("All fields are required!", "error");
    return;
  }

  // Create payload
  const payload = {
    title: title,
    date: new Date(datetime).toLocaleString(), // Format datetime
    location: location,
    excerpt: details.substring(0, 150) + (details.length > 150 ? "..." : ""), // First 150 chars
    fullText: details
  };

  try {
    showMessage("Submitting...", "info");

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    showMessage("✓ Sighting submitted successfully!", "success");
    form.reset(); // Clear form
    
    // Optional: redirect to ReadPage after 2 seconds
    setTimeout(() => {
      window.location.href = "/ReadPage.html";
    }, 2000);
  } catch (error) {
    console.error("Error submitting sighting:", error);
    showMessage(`✗ Error: ${error.message}`, "error");
  }
}

function showMessage(msg, type) {
  const messageEl = document.getElementById("form-message");
  messageEl.textContent = msg;
  messageEl.className = `form-message ${type}`;
}