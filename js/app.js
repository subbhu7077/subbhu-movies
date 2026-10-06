const CATALOG = [
  {
    id: 1,
    title: "Tears of Steel",
    year: 2026,
    rating: "8.4",
    quality: "4K",
    genre: "Sci-Fi / VFX",
    desc: "A futuristic dystopian film set in Amsterdam with massive open-source visual effects.",
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=400&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/R6MlUcmOul8?autoplay=1"
  },
  {
    id: 2,
    title: "Sintel",
    year: 2025,
    rating: "8.9",
    quality: "UHD",
    genre: "Fantasy",
    desc: "A lonely girl searches for a pet dragon in a vast cinematic landscape.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/eRsGyueVLvQ?autoplay=1"
  },
  {
    id: 3,
    title: "Big Buck Bunny",
    year: 2025,
    rating: "9.1",
    quality: "HD",
    genre: "Animation",
    desc: "A giant rabbit takes revenge on mischievous forest creatures in cinematic detail.",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1"
  },
  {
    id: 4,
    title: "Cosmos Laundromat",
    year: 2026,
    rating: "9.3",
    quality: "4K HDR",
    genre: "Sci-Fi",
    desc: "On a desolate island, a suicidal sheep meets a quirky salesman offering multiple lives.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80",
    embedUrl: "https://www.youtube-nocookie.com/embed/Y-rmzh0PI3c?autoplay=1"
  }
];

function renderCatalog() {
  const trendingRow = document.getElementById('trending-row');
  const popularRow = document.getElementById('popular-row');
  
  if (trendingRow) {
    trendingRow.innerHTML = CATALOG.map(movie => createMovieCard(movie)).join('');
  }
  if (popularRow) {
    popularRow.innerHTML = [...CATALOG].reverse().map(movie => createMovieCard(movie)).join('');
  }
}

function createMovieCard(m) {
  return `
    <div class="movie-card" onclick="openPlayerModal(${m.id})">
      <div class="card-poster-wrapper">
        <img class="card-poster" src="${m.poster}" alt="${m.title}" loading="lazy">
        <span class="card-badge">${m.quality}</span>
      </div>
      <div class="card-info">
        <div class="card-title">${m.title}</div>
        <div class="card-meta">
          <span>${m.year}</span>
          <span style="color:#00f2fe;">⭐ ${m.rating}</span>
        </div>
      </div>
    </div>
  `;
}

window.openPlayerModal = function(movieId) {
  const movie = CATALOG.find(m => m.id === movieId);
  if (!movie) return;

  const modal = document.getElementById('playerModal');
  const modalTitle = document.getElementById('modalTitle');
  const container = document.getElementById('playerFrameContainer');

  modalTitle.textContent = `${movie.title} (${movie.year}) - ${movie.quality}`;
  container.innerHTML = `<iframe src="${movie.embedUrl}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  
  modal.classList.add('active');
  showToast(`Streaming: ${movie.title}`);
};

window.closePlayerModal = function() {
  const modal = document.getElementById('playerModal');
  const container = document.getElementById('playerFrameContainer');
  container.innerHTML = '';
  modal.classList.remove('active');
};

window.showToast = function(text) {
  const toastContainer = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = text;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
};

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
});
