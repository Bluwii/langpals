// Flashcard data
const flashcards = [
    { front: "こんにちは", back: "Hello" },
    { front: "ありがとう", back: "Thank you" },
    { front: "さようなら", back: "Goodbye" },
    { front: "おはよう", back: "Good morning" },
    { front: "おやすみ", back: "Good night" }
];

let currentCardIndex = 0;
let isShowingFront = true;

function openFlashcardsModal() {
    currentCardIndex = 0;
    isShowingFront = true;
    displayCard();
    document.getElementById('flashcardsModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeFlashcardsModal() {
    document.getElementById('flashcardsModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function displayCard() {
    const card = flashcards[currentCardIndex];
    const cardText = document.getElementById('cardText');
    
    if (isShowingFront) {
        cardText.textContent = card.front;
    } else {
        cardText.textContent = card.back;
    }
    
    updateCounter();
}

function flipCard() {
    isShowingFront = !isShowingFront;
    displayCard();
}

function nextCard() {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        isShowingFront = true;
        displayCard();
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        isShowingFront = true;
        displayCard();
    }
}

function updateCounter() {
    document.getElementById('currentCard').textContent = currentCardIndex + 1;
    document.getElementById('totalCards').textContent = flashcards.length;
}

// Close flashcards modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFlashcardsModal();
    }
});