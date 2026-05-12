/**
 * TESDA LLDA PTC Chatbot Widget
 * Modular JS for FAQ functionality and UI interactions
 */

const faqData = [
  {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'menu', 'main menu', 'start'],
    answer: "Welcome to TESDA LLDA PTC! How can I help you today? Please choose an option below:",
    suggestions: ['Available courses', 'How to enroll?', 'Requirements', 'Location', 'Contact details']
  },
  {
    keywords: ['thank', 'thanks', 'salamat', 'thank you'],
    answer: "You're very welcome! Is there anything else I can help you with?",
    suggestions: ['Available courses', 'How to enroll?', 'Requirements']
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'exit'],
    answer: "Goodbye! Feel free to chat with me again if you have more questions. Have a great day!",
    suggestions: ['Available courses', 'Contact details']
  },
  {
    keywords: ['who are you', 'what are you', 'help'],
    answer: "I am the TESDA LLDA PTC Chatbot. I can help you with information about our courses, enrollment process, requirements, and more!",
    suggestions: ['Courses', 'Requirements', 'Location']
  },
  {
    keywords: ['course', 'program', 'available', 'offer', 'what are the courses', 'micro credential', 'trainers methodology', 'short course', 'others'],
    answer: "We offer 19 technical-vocational programs: \n\n**NC Levels:** \n- NC I: Masonry, Shielded Metal Arc Welding, Plumbing \n- NC II: Agroentrepreneurship, Barangay Health Services, Carpentry, Dressmaking, Driving, Electrical Installation & Maintenance, Housekeeping, Organic Agriculture Production, PV Systems Installation, Scaffolding Works, Shielded Metal Arc Welding \n- NC III: Agroentrepreneurship, Bookkeeping, Early Childhood Care & Development Services, Electrical Installation & Maintenance \n- NC IV: Agroentrepreneurship \n\n**Other Programs:** \n- Micro Credential courses \n- Trainers Methodology (Level I, II) \n- Community-Based Trainer's Methodology \n\nCheck our 'Programs' page for filters and details!",
    suggestions: ['How to enroll?', 'Requirements']
  },
  {
    keywords: ['enroll', 'register', 'apply', 'how to enroll', 'inquire'],
    answer: "To enroll, visit our Programs page and click 'Inquire now' to fill out the form, or visit our center at KM. 70, Brgy. Bangyas, Calauan, Laguna.",
    suggestions: ['Requirements', 'Location']
  },
  {
    keywords: ['requirement', 'document', 'need', 'what are the requirements'],
    answer: "General requirements include: \n1. Photocopy of High School Report Card (Form 138) or Diploma (Form 137) \n2. Photocopy of Birth Certificate (PSA) \n3. Barangay/Police/NBI Clearance \n4. 2 pcs – Passport Size Picture (white background, with collar and nametag) \n5. 6 pcs – 1x1 ID Picture (chemically printed, white background, with collar and name tag) \n6. Marriage Certificate (for females, if married) \n7. Certificate of \"Practicing Covid-19, Preventive Measures in Workplace\" (obtain via e-tesda.gov.ph)",
       suggestions: ['Training fee?', 'Schedule']
     },
  {
    keywords: ['location', 'where', 'address', 'place', 'map'],
    answer: "TESDA-LLDA PTC is located at KM. 70, Brgy. Bangyas, Calauan, Laguna. You can find our exact location on the map in the 'About' section.",
    suggestions: ['Contact details', 'Schedule']
  },
  {
    keywords: ['fee', 'payment', 'cost', 'pay', 'free', 'assessment'],
    answer: "Most of our programs are scholarship-based (FREE) under various TESDA programs. For assessment fees, please visit our 'Assessments' page or contact us directly.",
    suggestions: ['Available courses', 'How to enroll?']
  },
  {
    keywords: ['schedule', 'time', 'when', 'duration', 'training hours'],
    answer: "Training schedules vary per program. Our regular training hours are from 8:00 AM to 5:00 PM. Please contact us for specific course start dates.",
    suggestions: ['Available courses', 'Requirements']
  },
  {
    keywords: ['contact', 'number', 'phone', 'email', 'call'],
    answer: "You can reach us at: \n- Phone: (049) 521-7427 \n- Mobile: 0947-3580763 \n- Email: tesda-llda@tesda.gov.ph",
    suggestions: ['Location', 'How to enroll?']
  },
  {
    keywords: ['id', 'certification', 'certificate', 'nc', 'assessment'],
    answer: "Upon completion, students undergo assessment for National Certification (NC I/II/III/IV). Certificates are issued once you pass the assessment. Visit our 'Assessments' page for more details!",
    suggestions: ['Available courses', 'Requirements']
  },
  {
    keywords: ['cbt', 'community', 'cbtmc', 'community based'],
    answer: "We offer Community Based Training (CBT) programs! Visit our 'Community Based Training' page for more information.",
    suggestions: ['Available courses', 'How to enroll?']
  }
];

// Select DOM elements
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotClear = document.getElementById('chatbotClear');

// Initial greeting
window.addEventListener('DOMContentLoaded', () => {
  if (chatbotMessages.children.length === 0) {
    setTimeout(() => {
      addBotMessage("Hi! I'm your TESDA LLDA Assistant. \n\nHow can I help you today? Please choose an option below:", ['Available courses', 'How to enroll?', 'Requirements', 'Location', 'Contact details']);
    }, 500);
  }
});

// Toggle Chatbot
chatbotToggle.addEventListener('click', () => {
  chatbotContainer.classList.add('active');
  chatbotToggle.style.display = 'none';
});

chatbotClose.addEventListener('click', () => {
  chatbotContainer.classList.remove('active');
  setTimeout(() => {
    chatbotToggle.style.display = 'flex';
  }, 500); // Wait for animation
});

// Clear Chat
chatbotClear.addEventListener('click', () => {
  chatbotMessages.innerHTML = '';
  addBotMessage("Chat cleared! How can I help you now?", ['Courses', 'Enrollment', 'Requirements']);
});

// Send Message Logic
function handleSendMessage() {
  const text = chatbotInput.value.trim();
  if (text === '') return;

  addUserMessage(text);
  chatbotInput.value = '';
  
  showTypingIndicator();
  
  setTimeout(() => {
    removeTypingIndicator();
    const response = getResponse(text);
    addBotMessage(response.answer, response.suggestions);
  }, 1000);
}

chatbotSend.addEventListener('click', handleSendMessage);
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSendMessage();
});

// Message Rendering Functions
function addUserMessage(text) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message user-message';
  messageDiv.innerHTML = `${text}<span class="timestamp">${getCurrentTime()}</span>`;
  chatbotMessages.appendChild(messageDiv);
  scrollToBottom();
}

function addBotMessage(text, suggestions = []) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message bot-message';
  
  let content = `<div>${text.replace(/\n/g, '<br>')}</div>`;
  
  if (suggestions.length > 0) {
    content += `<div class="chatbot-suggestions">`;
    suggestions.forEach(s => {
      content += `<button class="suggestion-btn" onclick="handleSuggestion('${s}')">${s}</button>`;
    });
    content += `</div>`;
  }
  
  content += `<span class="timestamp">${getCurrentTime()}</span>`;
  messageDiv.innerHTML = content;
  chatbotMessages.appendChild(messageDiv);
  scrollToBottom();
}

// Global function for suggestions (since it's in onclick)
window.handleSuggestion = (text) => {
  chatbotInput.value = text;
  handleSendMessage();
};

function showTypingIndicator() {
  const indicator = document.createElement('div');
  indicator.id = 'typingIndicator';
  indicator.className = 'typing-indicator';
  indicator.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  chatbotMessages.appendChild(indicator);
  scrollToBottom();
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) indicator.remove();
}

function scrollToBottom() {
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Response Logic
function getResponse(input) {
  const lowerInput = input.toLowerCase();
  
  for (const item of faqData) {
    if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
      return item;
    }
  }
  
  return {
    answer: "Sorry, I didn’t understand your question. Please contact the office directly at (049) 521-7427.",
    suggestions: ['Location', 'Contact details', 'Available courses']
  };
}
