const GENERAL_ENROLLMENT_REQUIREMENTS = [
  "Photocopy of the following:",
  "1 pc – Form 138 (High School Report Card) / Form 137 (High School Diploma) or Transcript of Records or Diploma if College Level / Graduate",
  "1 pc – Barangay / Police / NBI Clearance",
  "2 pcs – Birth Certificate (PSA)",
  "Marriage Certificate for females if married",
  "4 pcs – Passport Size Picture",
  "6 pcs – 1x1 ID Picture (Must be chemically printed, white background with collar and name tag)",
  "2 pcs – Certificate of “Practicing Covid-19, Preventive Measures in the Workplace” (thru e-tesda.gov.ph)"
];
const ENROLLMENT_NOTE = "Note: Kindly secure all your requirements in a long plastic envelope";

const programs = [
  {
    name: "Agroentrepreneurship NC II",
    level: "NC II",
    hours: 239,
    overview: "This course builds the knowledge, skills, and attributes needed for marketing and production coordinators, covering market assessment, production planning, finance management, and produce marketing.",
    learn: [
      "Market assessment and analysis",
      "Production planning and coordination",
      "Financial management for agri-enterprises",
      "Produce marketing and sales",
      "Sustainable agricultural practices"
    ],
    careers: "Marketing Coordinator, Production Coordinator",
    requirements: ["Must be at least 18 years old", "Physically and mentally fit", "Basic communication skills", "Interest in agriculture"]
  },
  {
    name: "Agroentrepreneurship NC III",
    level: "NC III",
    hours: 445,
    overview: "The AGROENTREPRENEURSHIP NC III qualification develops competencies to engage stakeholders, manage product supply and finances, mobilize farmers, and conduct collective marketing in the agroenterprise industry.",
    learn: [
      "Stakeholder engagement and management",
      "Product supply chain management",
      "Advanced financial management",
      "Farmer mobilization and organization",
      "Collective marketing strategies"
    ],
    careers: "Farmer Leader",
    requirements: ["Must have NC II in Agroentrepreneurship", "At least 1 year of farming experience", "Leadership potential"]
  },
  {
    name: "Agroentrepreneurship NC IV",
    level: "NC IV",
    hours: 715,
    overview: "The AGROENTREPRENEURSHIP NC IV Qualification develops competencies to capacitate farmers, engage stakeholders, mobilize communities, and monitor Agroenterprise activities.",
    learn: [
      "Farmer capacity building and training",
      "Strategic stakeholder engagement",
      "Community mobilization and organization",
      "Monitoring and evaluation of agri-projects",
      "Advanced business development"
    ],
    careers: "Agroenterprise Facilitator",
    requirements: ["Must have NC III in Agroentrepreneurship", "Extensive experience in agroenterprise", "Strong facilitation skills"]
  },
  {
    name: "Barangay Health Services NC II",
    level: "NC II",
    hours: 463,
    overview: "This course develops the knowledge, skills, and attitudes required for Barangay Health Services NC II, focusing on health promotion, disease prevention, household health monitoring, and proper management of health stations, supplies, and records.",
    learn: [
      "Community health promotion and education",
      "Disease prevention and control",
      "Household health monitoring",
      "Health station management",
      "Record-keeping and supply management"
    ],
    careers: "Barangay Health Worker",
    requirements: ["Must be at least 18 years old", "Completed basic education", "Good interpersonal skills", "Community-oriented"]
  },
  {
    name: "Community-Based Trainer's Methodology Course",
    level: null,
    hours: 64,
    overview: "This qualification prepares trainers for community-based training programs, focusing on developing the training environment, organizing and delivering training, and reviewing training programs with a community-based context.",
    learn: [
      "Training environment development",
      "Community-based training organization",
      "Instructional delivery techniques",
      "Program review and evaluation",
      "Facilitation skills"
    ],
    careers: "Community-Based Trainer",
    requirements: ["Must be at least 18 years old", "Experience in community work", "Teaching or training interest"]
  },
  {
    name: "Dressmaking NC II",
    level: "NC II",
    hours: 275,
    overview: "This course develops the knowledge, skills, and attitude of a dressmaker in line with industry standards, focusing on pattern drafting and cutting, material preparation, sewing, and finishing of casual apparel.",
    learn: [
      "Pattern drafting and design",
      "Fabric cutting and preparation",
      "Sewing machine operation",
      "Garment assembly and construction",
      "Finishing and quality control"
    ],
    careers: "Dressmaker, Garment Sewer",
    requirements: ["Must be at least 16 years old", "Basic math skills", "Good hand-eye coordination", "Creativity"]
  },
  {
    name: "Driving NC II",
    level: "NC II",
    hours: 184,
    overview: "This course equips individuals with the skills and professional attitudes required of a light vehicle driver, in line with industry standards and regulatory requirements.",
    learn: [
      "Light vehicle operation and maneuvers",
      "Road safety and traffic regulations",
      "Defensive driving techniques",
      "Basic vehicle maintenance",
      "Professional driver ethics"
    ],
    careers: "Professional Driver, Light Vehicle Driver",
    requirements: ["Must be at least 18 years old", "Valid student/permanent license", "Good vision", "Physically fit"]
  },
  {
    name: "Early Childhood Care & Development Service NC III",
    level: "NC III",
    hours: 304,
    overview: "This course equips learners with the knowledge, skills, and attitudes to manage early childhood centers, assess child development, and implement the ECCD curriculum for ages 0–4, in line with industry standards.",
    learn: [
      "Early childhood center management",
      "Child development assessment",
      "ECCD curriculum implementation",
      "Health and nutrition for young children",
      "Parent and community engagement"
    ],
    careers: "Day Care Worker",
    requirements: ["Must be at least 18 years old", "Patience and nurturing attitude", "Basic creativity skills"]
  },
  {
    name: "Electrical Installation & Maintenance NC II",
    level: "NC II",
    hours: 196,
    overview: "This course equips individuals with the skills to install and maintain electrical wiring, lighting, and related equipment in residential buildings with voltages up to 600 volts.",
    learn: [
      "Residential wiring installation",
      "Lighting system setup",
      "Electrical circuit troubleshooting",
      "Safety procedures and regulations",
      "Electrical tool management"
    ],
    careers: "Maintenance Electrician, Residential/Commercial Wiring Electrician",
    requirements: ["Must be at least 18 years old", "Physically fit", "No fear of heights", "Basic technical aptitude"]
  },
  {
    name: "Electrical Installation & Maintenance NC III",
    level: "NC III",
    hours: 160,
    overview: "This course develops the knowledge, skills, and professional attitudes of electrical, mechatronics, and automation technicians in line with industry standards.",
    learn: [
      "Industrial electrical installation",
      "Automation and control systems",
      "Mechatronics fundamentals",
      "Advanced troubleshooting",
      "Supervisory skills in electrical work"
    ],
    careers: "Industrial Electrician, Electrical Leadman, Electrical Foreman",
    requirements: ["Must have NC II in Electrical Installation", "Related work experience", "Advanced technical skills"]
  },
  {
    name: "Housekeeping",
    level: "NC II",
    hours: 436,
    overview: "This course enhances the knowledge, skills, and professional attitude of housekeeping staff in guest room preparation, valet services, laundry, and premises cleaning in line with industry standards.",
    learn: [
      "Guest room preparation and cleaning",
      "Valet and laundry services",
      "Public area maintenance",
      "Customer service and communication",
      "Workplace hygiene and safety"
    ],
    careers: "Attendant, Housekeeper, Room Maid",
    requirements: ["Must be at least 18 years old", "Good grooming", "Physical stamina", "Service-oriented"]
  },
  {
    name: "Organic Agriculture Production NC II",
    level: "NC II",
    hours: 232,
    overview: "This qualification covers the competencies needed to produce farm products like chicken and vegetables, including organic fertilizers, concoctions, and extracts.",
    learn: [
      "Organic chicken production",
      "Organic vegetable farming",
      "Organic fertilizer preparation",
      "Organic concoction and extract making",
      "Sustainable farm management"
    ],
    careers: "Organic Agriculture Farmer, Organic Livestock Raiser",
    requirements: ["Must be at least 18 years old", "Interest in organic farming", "Physically fit for farm work"]
  },
  {
    name: "PV Systems Installation NC II",
    level: "NC II",
    hours: 284,
    overview: "This course develops the knowledge, skills, and professional attitude of a PV Systems Technician, covering site assessment, component compliance, system installation and commissioning, and documentation in line with industry standards.",
    learn: [
      "Solar site assessment",
      "PV component selection and testing",
      "System installation and wiring",
      "Commissioning and troubleshooting",
      "System documentation and reporting"
    ],
    careers: "PV Systems Technician, PV Systems Commissioning Technician",
    requirements: ["Must have basic electrical background", "Technical aptitude", "Physical fitness for rooftop work"]
  },
  {
    name: "Shielded Metal Arc Welding NC I",
    level: "NC I",
    hours: 208,
    overview: "This course enhances knowledge, skills, and professional attitude in line with industry standards, covering welding setup, material preparation, fitting, carbon steel plate welding, and weld repair.",
    learn: [
      "Welding setup and safety",
      "Material preparation and fitting",
      "Carbon steel plate welding",
      "Weld repair techniques",
      "Basic blueprint reading"
    ],
    careers: "Plate/Pipe Welder",
    requirements: ["Must be at least 18 years old", "Physical fitness", "No fear of heights", "Basic math"]
  },
  {
    name: "Shielded Metal Arc Welding NC II",
    level: "NC II",
    hours: 268,
    overview: "This course develops knowledge, skills, and professional attitude in line with industry standards, focusing on welding setup, material preparation, fitting, carbon steel plate welding, and weld repair.",
    learn: [
      "Advanced carbon steel welding",
      "Pipe welding techniques",
      "Welding position mastery",
      "Weld inspection and quality",
      "Advanced blueprint reading"
    ],
    careers: "Plate/Pipe Welder",
    requirements: ["Must have NC I in SMAW or equivalent", "Related welding experience"]
  },
  {
    name: "Trainers Methodology Level I",
    level: null,
    hours: 264,
    overview: "This qualification develops the knowledge, skills, and professional values of TVET trainers, focusing on instructional delivery, competency assessment, and training resource management in line with prevailing standards.",
    learn: [
      "CBT instructional delivery",
      "Competency-based assessment",
      "Training resource management",
      "Curriculum implementation",
      "Trainer ethics and values"
    ],
    careers: "TVET Trainer, Competency Assessor",
    requirements: ["Must have relevant industry experience", "At least 18 years old", "Good communication skills"]
  },
  {
    name: "Trainers Methodology Level II",
    level: "Level II",
    hours: 568,
    overview: "This course develops the knowledge, skills, and professional values of Level II TVET trainers, focusing on training program design, curriculum and material development, assessment tools, maintenance systems, and client training needs analysis.",
    learn: [
      "Training program design",
      "Curriculum and material development",
      "Assessment tool design",
      "Training system maintenance",
      "Client needs analysis"
    ],
    careers: "Curriculum Designer, Instructional Designer, Training Designer/Developer",
    requirements: ["Must have TM Level I", "Extensive TVET experience", "Strategic thinking"]
  },
  {
    name: "Bookkeeping NC III",
    level: "NC III",
    hours: 292,
    overview: "This qualification develops the knowledge, skills, and attitude of bookkeepers, covering journalizing, posting, trial balance preparation, financial reporting, and internal control review in line with industry standards.",
    learn: [
      "Journalizing and posting",
      "Trial balance preparation",
      "Financial report generation",
      "Internal control review",
      "Accounting software usage"
    ],
    careers: "Bookkeeper, Accounting Clerk",
    requirements: ["Must have basic accounting knowledge", "Computer literacy", "Attention to detail"]
  },
  {
    name: "Provide Basic Health Services to the Community",
    level: null,
    hours: 60,
    overview: "This micro-credential develops knowledge, skills, and attitudes in basic first aid, assisting in medical consultations, and maintaining health station equipment, supplies, and records.",
    learn: [
      "Basic first aid techniques",
      "Medical consultation assistance",
      "Health station maintenance",
      "Medical record keeping",
      "Emergency coordination"
    ],
    careers: "Barangay Health Aide",
    requirements: ["Must be at least 18 years old", "Community-oriented", "Basic literacy"]
  }
];

let activeFilter = "all";

const programGrid = document.getElementById("programGrid");
const countPill   = document.getElementById("countPill");
const modal = document.getElementById("programModal");

function render(list) {
  if (!programGrid) return;
  
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
    if (countPill) countPill.textContent = "0 programs";
    return;
  }

  programGrid.innerHTML = list.map((p) => {
    const originalIndex = programs.indexOf(p);
    return `
    <div class="program-card" onclick="openModal(${originalIndex})">
      <div class="card-header">
        <div class="duration">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>${p.hours} hours</span>
        </div>
      </div>
      <h3 class="program-title">${p.name}</h3>
      <div class="card-footer" onclick="event.stopPropagation()">
        <button class="view-details" onclick="openModal(${originalIndex})">View Details</button>
        <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  `}).join("");

  if (countPill) countPill.textContent = list.length + (list.length === 1 ? " program" : " programs");
}

function filter() {
  const query = document.getElementById("searchInput")?.value.toLowerCase();
  if (!query && activeFilter === "all") {
    render(programs);
    return;
  }

  const filtered = programs.filter(p => {
    const matchSearch = query ? p.name.toLowerCase().includes(query) : true;
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
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  activeFilter = "all";
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.textContent === "All");
  });
  if (programGrid) {
    render(programs);
  }
}

function openModal(index) {
  const p = programs[index];
  if (!p || !modal) return;

  const titleEl = document.getElementById("modalTitle");
  const levelEl = document.getElementById("modalLevel");
  const durationEl = document.getElementById("modalDuration");
  const overviewEl = document.getElementById("modalOverview");
  const learnEl = document.getElementById("modalLearn");
  const careersEl = document.getElementById("modalCareers");
  const enrollReqEl = document.getElementById("modalEnrollmentRequirements");
  const enrollNoteEl = document.getElementById("modalEnrollmentNote");
  const reqEl = document.getElementById("modalRequirements");

  if (titleEl) titleEl.textContent = p.name;
  if (levelEl) {
    levelEl.textContent = p.level || "Short Course";
    levelEl.className = p.level ? "modal-level" : "modal-level special";
  }
  if (durationEl) {
    durationEl.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      ${p.hours} hours
    `;
  }
  if (overviewEl) overviewEl.textContent = p.overview;
  if (learnEl) learnEl.innerHTML = p.learn.map(item => `<li>${item}</li>`).join("");
  if (careersEl) careersEl.textContent = p.careers;
  if (enrollReqEl) enrollReqEl.innerHTML = GENERAL_ENROLLMENT_REQUIREMENTS.map(req => `<li>${req}</li>`).join("");
  if (enrollNoteEl) enrollNoteEl.innerHTML = ENROLLMENT_NOTE;
  if (reqEl) reqEl.innerHTML = p.requirements.map(req => `<li>${req}</li>`).join("");

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Navigation Toggle Logic
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  const hamburgerIcon = navToggle.querySelector('.hamburger-icon');
  const closeIcon = navToggle.querySelector('.close-icon');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isActive = navLinks.classList.contains('active');
    
    if (isActive) {
      hamburgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else {
      hamburgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking a link or CTA
  const links = navLinks.querySelectorAll('.nav-link, .nav-cta');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      document.body.style.overflow = '';
    });
  });
}

// Preloader handling
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("preloader-hidden");
      document.body.classList.remove("loading");
    }, 500);
  }
});

// Initial render if on programs page
if (programGrid) {
  render(programs);
}
