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
    keywords: ['course', 'program', 'available', 'offer', 'what are the courses'],
    answer: "We offer various technical-vocational programs including: \n- Agroentrepreneurship (NC II, III, IV) \n- Electrical Installation & Maintenance (NC II, III) \n- Shielded Metal Arc Welding (NC I, II) \n- Driving (NC II) \n- Dressmaking (NC II) \n- Housekeeping (NC II) \n- Bookkeeping (NC III) \n- Early Childhood Care & Development Service (NC III) \n- Barangay Health Services (NC II) \n- Organic Agriculture Production (NC II) \n- PV Systems Installation (NC II) \n- Trainers Methodology (Level I, II) \n\nCheck our 'Programs' page for more details!",
    suggestions: ['How to enroll?', 'Requirements']
  },
  {
    keywords: ['enroll', 'register', 'apply', 'how to enroll'],
    answer: "To enroll, visit our center at KM. 70, Brgy. Bangyas, Calauan, Laguna, or click the 'Inquire Now' button to fill out our online inquiry form.",
    suggestions: ['Requirements', 'Location']
  },
  {
    keywords: ['requirement', 'document', 'need', 'what are the requirements'],
    answer: "General requirements include: \n1. Form 138/137 or Diploma/TOR \n2. Barangay/Police/NBI Clearance \n3. 2 pcs PSA Birth Certificate \n4. 4 pcs Passport Size Picture \n5. 6 pcs 1x1 ID Picture \n6. Marriage Certificate (for married females) \n7. Certificate of <a href=\"https://e-tesda.gov.ph/course/index.php?categoryid=1314\" target=\"_blank\" style=\"color: #2563eb; text-decoration: underline;\">'Practicing Covid-19, Preventive Measures'</a> (thru e-tesda.gov.ph)",
       suggestions: ['Training fee?', 'Schedule']
     },
  {
    keywords: ['location', 'where', 'address', 'place', 'map'],
    answer: "TESDA-LLDA PTC is located at KM. 70, Brgy. Bangyas, Calauan, Laguna. You can find our exact location on the map in the 'About' section.",
    suggestions: ['Contact details', 'Schedule']
  },
  {
    keywords: ['fee', 'payment', 'cost', 'pay', 'free'],
    answer: "Most of our programs are scholarship-based (FREE) under various TESDA programs. Some specialized courses may have minimal assessment fees.",
    suggestions: ['Available courses', 'How to enroll?']
  },
  {
    keywords: ['schedule', 'time', 'when', 'duration'],
    answer: "Training schedules vary per program. Most classes run from 8:00 AM to 5:00 PM, Monday to Friday. Please contact us for specific course start dates.",
    suggestions: ['Available courses', 'Requirements']
  },
  {
    keywords: ['contact', 'number', 'phone', 'email', 'call'],
    answer: "You can reach us at: \n- Phone: (049) 521-7427 / 0947-3580763 \n- Email: tesda-llda@tesda.gov.ph",
    suggestions: ['Location', 'How to enroll?']
  },
  {
    keywords: ['id', 'certification', 'certificate', 'nc'],
    answer: "Upon completion, students undergo assessment for National Certification (NC I/II). Certificates and IDs are issued once you pass the assessment.",
    suggestions: ['Available courses', 'Requirements']
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
