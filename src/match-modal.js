// Sample match data
const matches = [
    {
        name: "Abbie",
        country: "Japan",
        flag: "🇯🇵",
        language: "ENGLISH",
        image: "/src/public/images/girl1.png"
    },
    {
        name: "Robert",
        country: "Germany",
        flag: "🇩🇪",
        language: "GERMAN",
        image: "/src/public/images/men.png"
    },
    {
        name: "Sofia",
        country: "Russia",
        flag: "🇷🇺",
        language: "RUSSIAN",
        image: "/src/public/images/girl2.png"
    },
    {
        name: "Yuki",
        country: "Japan",
        flag: "🇯🇵",
        language: "JAPANESE",
        image: "/src/public/images/girl1.png"
    }
];

let currentMatchIndex = 0;

function openModal() {
    currentMatchIndex = 0;
    displayMatch();
    document.getElementById('matchModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('matchModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function displayMatch() {
    const match = matches[currentMatchIndex];
    const matchContent = document.getElementById('matchContent');
    
    matchContent.innerHTML = `
        <img src="${match.image}" alt="${match.name}" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-purple-200">
        <h3 class="text-2xl font-bold text-gray-900 mb-1">${match.name}</h3>
        <p class="text-sm text-gray-600 mb-2 flex items-center justify-center gap-2">
            <span class="text-2xl">${match.flag}</span>
            <span>${match.country}</span>
        </p>
        <p class="text-xs text-gray-500 mb-4">Interested in learning:</p>
        <span class="inline-block bg-indigo-100 text-indigo-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">${match.language}</span>
        <div class="flex gap-4 justify-center">
            <button onclick="acceptMatch()" class="bg-purple-500 text-white px-8 py-2 rounded-full hover:bg-purple-600 text-sm font-medium transition-colors">Accept</button>
            <button onclick="declineMatch()" class="bg-white text-gray-700 border-2 border-gray-300 px-8 py-2 rounded-full hover:bg-gray-50 text-sm font-medium transition-colors">Decline</button>
        </div>
    `;

    updateButtons();
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentMatchIndex === 0;
    prevBtn.classList.toggle('opacity-50', currentMatchIndex === 0);
    prevBtn.classList.toggle('cursor-not-allowed', currentMatchIndex === 0);

    if (currentMatchIndex === matches.length - 1) {
        nextBtn.textContent = 'Finish';
    } else {
        nextBtn.textContent = 'Next';
    }
}

function nextMatch() {
    if (currentMatchIndex < matches.length - 1) {
        currentMatchIndex++;
        displayMatch();
    } else {
        closeModal();
    }
}

function previousMatch() {
    if (currentMatchIndex > 0) {
        currentMatchIndex--;
        displayMatch();
    }
}

function acceptMatch() {
    alert(`You've accepted ${matches[currentMatchIndex].name}! Redirecting to chat...`);
    // Redirect to chat page
    window.location.href = 'chat.html';
}

function declineMatch() {
    if (currentMatchIndex < matches.length - 1) {
        nextMatch();
    } else {
        closeModal();
    }
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});