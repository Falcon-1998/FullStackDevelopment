const api_url = "http://localhost:3000/api/sightings"; // ← specify endpoint

document.addEventListener("DOMContentLoaded", () => {
  loadStories();
});

async function loadStories() {
  const container = document.getElementById("sightings-list");
  try {
    const response = await fetch(api_url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const data = await response.json(); // ← already parsed, no need for JSON.parse
    renderStories(container, data);
  } catch (error) {
    console.error("Error fetching stories:", error);
    container.innerHTML = '<p>Error loading stories. Please try again later.</p>';
  }
}

function renderStories(container, stories) {
  if (!stories || stories.length === 0) {
    container.innerHTML = '<p>No sightings yet.</p>';
    return;
  }

  container.innerHTML = stories.map(story => `
    <article class="sighting-card">
      <header class="sighting-meta">
        <p class="sighting-date">${story.date || 'Date unknown'}, ${story.location || 'Location unknown'}</p>
        <h3 class="sighting-title">${story.title}</h3>
      </header>
      <p class="sighting-excerpt">${story.excerpt || story.description}</p>
      <p class="sighting-full hidden">${story.fullText || ''}</p>
      <button class="read-toggle-btn" type="button">Read in full</button>
    </article>
  `).join('');

  // Add toggle functionality for "Read in full" buttons
  document.querySelectorAll('.read-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.sighting-card');
      const fullText = card.querySelector('.sighting-full');
      fullText.classList.toggle('hidden');
      btn.textContent = fullText.classList.contains('hidden') ? 'Read in full' : 'Show less';
    });
  });
}
