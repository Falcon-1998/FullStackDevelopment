// Property.js - FIXED VERSION
const Properties_For_Rent = [
  { "id": 1, "title": "Cozy Apartment in City Center", "details": "2 Beds • 1 Bath • 850 sqft", "price": "$1,200 / month", "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop" },
  { "id": 2, "title": "Modern Downtown Loft", "details": "1 Bed • 1 Bath • 1,200 sqft", "price": "$1,800 / month", "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop" },
  { "id": 3, "title": "Luxury Penthouse Suite", "details": "3 Beds • 3 Bath • 2,500 sqft", "price": "$4,500 / month", "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop" },
  { "id": 4, "title": "Spacious Suburban House", "details": "4 Beds • 2 Bath • 2,100 sqft", "price": "$2,800 / month", "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop" },
  { "id": 5, "title": "Beachfront Condo", "details": "2 Beds • 2 Bath • 1,400 sqft", "price": "$3,200 / month", "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop" }
];

function setProperties(properties) {
  return properties.map(property => `
    <div class="property-card">
      <div class="card-image">
        <img src="${property.image}" alt="${property.title}">
      </div>
      <div class="card-content">
        <h3 id="property-title-${property.id}">${property.title}</h3>
        <p id="property-details-${property.id}">${property.details}</p>
        <p id="property-price-${property.id}" class="price">${property.price}</p>
        <button class="rent-button" data-property="${property.id}">Rent Now</button>
      </div>
    </div>
  `).join('');
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const propertyContainer = document.getElementById('properties-container');
  if (propertyContainer) {
    propertyContainer.innerHTML = setProperties(Properties_For_Rent);
    console.log('Properties loaded!');
  } else {
    console.error('properties-container not found!');
  }
});
