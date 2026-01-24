const eventSource = new EventSource('http://localhost:3000/events');

eventSource.onmessage = function(event) {
  console.log('New event from server:', event.data);
    const data = JSON.parse(event.data);
    if (data.event === 'news-update') {
        const sightingsFeed = document.getElementById('sightings-feed');
        sightingsFeed.innerHTML = ''; // Clear loading message
        const newSightingItem = document.createElement('li');
        newSightingItem.textContent = `New Sighting: ${data.stroy}`;
        sightingsFeed.appendChild(newSightingItem);
    }
};

eventSource.onerror = function(err) {
  console.error('EventSource failed:', err);
  eventSource.close();
};