const programs = [
  { name: "Agroentrepreneurship",                           level: "NC II",  days: 30 },
  { name: "Agroentrepreneurship",                           level: "NC III", days: 30 },
  { name: "Barangay Health Services",                       level: "NC II",  days: 58 },
  { name: "Bookkeeping",                                    level: "NC III", days: 37 },
  { name: "Community-Based Trainer's Methodology Course",   level: null,     days:  8 },
  { name: "Dressmaking",                                    level: "NC II",  days: 35 },
  { name: "Driving",                                        level: "NC II",  days: 15 },
  { name: "Early Childhood Care and Development Services",  level: "NC III", days: 38 },
  { name: "Electrical Installation and Maintenance",        level: "NC II",  days: 25 },
  { name: "Electrical Installation and Maintenance",        level: "NC III", days: 25 },
  { name: "Housekeeping",                                   level: "NC II",  days: 55 },
  { name: "Organic Agriculture Production",                 level: "NC II",  days: 30 },
  { name: "PV Systems Installation",                        level: "NC II",  days: 36 },
  { name: "Shielded Metal Arc Welding",                     level: "NC I",   days: 34 },
  { name: "Shielded Metal Arc Welding",                     level: "NC II",  days: 34 },
  { name: "Trainer's Methodology Level I",                  level: null,     days: 33 }
];

let activeFilter = "all";

const programGrid = document.getElementById("programGrid");
const countPill   = document.getElementById("countPill");

function render(list) {
  if (!list.length) {
    programGrid.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <p>No programs match your search or filter.</p>
        <button class="clear-btn" onclick="clearFilters()">Clear all filters</button>
      </div>
    `;
    countPill.textContent = "0 programs";
    return;
  }

  programGrid.innerHTML = list.map(p => `
    <div class="program-card">
      <div class="card-header">
        ${p.level ? `<span class="nc-badge">${p.level}</span>` : `<span class="nc-badge special">Short Course</span>`}
        <div class="duration">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>${p.days} days</span>
        </div>
      </div>
      <h3 class="program-title">${p.name}</h3>
      <div class="card-footer">
        <button class="view-details">View Details</button>
        <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  `).join("");

  countPill.textContent = list.length + (list.length === 1 ? " program" : " programs");
}

function filter() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filtered = programs.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(query);
    const matchFilter = activeFilter === "all" || p.level === activeFilter;
    return matchSearch && matchFilter;
  });

  render(filtered);
}

function setFilter(val, btn) {
  activeFilter = val;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  filter();
}

function clearFilters() {
  document.getElementById("searchInput").value = "";
  activeFilter = "all";
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.textContent === "All");
  });
  render(programs);
}

// Preloader handling
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('preloader-hidden');
      document.body.classList.remove('loading');
    }, 500); // Small delay for visual effect
  }
});

render(programs);
