// 1. UNLOCK GATE -> SHOW HEART CARD
function unlockGift() {
  const input = document.getElementById('birthdateInput').value;
  if (!input) {
    alert("Please enter your birthdate first! 💖");
    return;
  }
  
  document.getElementById('unlockCard').classList.add('hidden');
  document.getElementById('heartCard').classList.remove('hidden');
}

// 2. SHOOT ARROW TO HEART
let isShot = false;
function shootArrow() {
  if (isShot) return;
  isShot = true;

  const arrow = document.getElementById('arrowObj');
  const heart = document.getElementById('heartObj');
  const btn = document.getElementById('nextToFlowerBtn');

  arrow.classList.add('arrow-hit');

  setTimeout(() => {
    heart.innerHTML = "💘";
    heart.classList.add('heart-hit');
    btn.classList.remove('hidden');

    if (typeof confetti === "function") {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  }, 600);
}

// 3. GO TO FLOWER PAGE
function goToFlowerPage() {
  document.getElementById('heartCard').classList.add('hidden');
  document.getElementById('flowerCard').classList.remove('hidden');
}

// 4. GO TO MAIN WEBSITE
function goToMainWebsite() {
  document.getElementById('flowerCard').classList.add('hidden');
  document.getElementById('mainWebsite').classList.remove('hidden');
}

// 5. ACCORDION TOGGLE
function toggleAccordion(element) {
  const body = element.querySelector('.accordion-body');
  const arrow = element.querySelector('.arrow');
  
  if (body.classList.contains('hidden')) {
    body.classList.remove('hidden');
    arrow.innerText = '▼';
  } else {
    body.classList.add('hidden');
    arrow.innerText = '▶';
  }
}

// 6. BLOW CANDLE
function blowCandle() {
  const cake = document.getElementById('cakeIcon');
  const btn = document.getElementById('candleBtn');
  
  cake.innerHTML = "🎂✨🎉";
  btn.innerText = "Wish Made! 🙏❤️";
  btn.style.backgroundColor = "#bbf7d0";
  btn.style.color = "#166534";

  if (typeof confetti === "function") {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  }
}

// 7. MODAL CONTROL
function openLetter() { document.getElementById('letterModal').classList.remove('hidden'); }
function closeLetter() { document.getElementById('letterModal').classList.add('hidden'); }

// 8. RUNAWAY NO BUTTON
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.getElementById('questionText');

function moveNoButton() {
  const windowWidth = window.innerWidth - noBtn.offsetWidth - 20;
  const windowHeight = window.innerHeight - noBtn.offsetHeight - 20;

  const randomX = Math.floor(Math.random() * windowWidth);
  const randomY = Math.floor(Math.random() * windowHeight);

  noBtn.style.position = 'fixed';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveNoButton(); });

yesBtn.addEventListener('click', () => {
  questionText.innerHTML = "Order Accepted! STAT Date confirmed! I love you, Nurse Selah! 🩺🎉🥰❤️";
  noBtn.style.display = 'none';
  yesBtn.style.display = 'none';

  if (typeof confetti === "function") {
    confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
  }
});