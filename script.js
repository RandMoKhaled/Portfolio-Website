/* ==========================================================================
   1. MOBILE NAVBAR TOGGLE
   ========================================================================== */
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

/* ==========================================================================
   2. DYNAMIC LOOPING TYPING TEXT (TAILORED TO YOUR DEGREE & SKILLS)
   ========================================================================== */
const typingText = document.getElementById('typing-text');
const titles = [
    "Computer Science & Engineering Student",
    "AI/ML Enthusiast",
    "Data Science & Python Developer",
    "Fluent in Arabic, English & Spanish"
];

let titleIdx = 0;
let charIdx = 0;
let deleting = false;

function typeLoop() {
    const current = titles[titleIdx];

    if (deleting) {
        typingText.textContent = current.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typingText.textContent = current.substring(0, charIdx + 1);
        charIdx++;
    }

    let speed = deleting ? 35 : 75;

    if (!deleting && charIdx === current.length) {
        speed = 1500;
        deleting = true;
    } else if (deleting && charIdx === 0) {
        deleting = false;
        titleIdx = (titleIdx + 1) % titles.length;
        speed = 400;
    }

    setTimeout(typeLoop, speed);
}
typeLoop();

/* ==========================================================================
   3. HIGH-DENSITY CRYPTOGRAPHIC MATRIX DECRYPTION ENGINE
   ========================================================================== */
const card = document.getElementById('photoCard');
const canvas = document.getElementById('decryptCanvas');
const ctx = canvas.getContext('2d');
const hud = document.getElementById('decryptHud');

const SIZE = 250;
canvas.width = SIZE;
canvas.height = SIZE;

let mouse = { x: -999, y: -999, active: false };

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;

    // Smooth 3D Card tilt
    const deltaX = (mouse.x - SIZE / 2) / 14;
    const deltaY = (mouse.y - SIZE / 2) / 14;
    card.style.transform = `rotateX(${-deltaY.toFixed(1)}deg) rotateY(${deltaX.toFixed(1)}deg)`;

    // Telemetry update
    hud.textContent = 'ACCESS_GRANTED: IDENTITY VERIFIED';
    hud.style.color = '#ed61ac';
    hud.style.borderColor = '#ed61ac';
    hud.style.boxShadow = '0 0 12px rgba(237, 97, 172, 0.25)';
});

card.addEventListener('mouseleave', () => {
    mouse.active = false;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';

    hud.textContent = 'STATUS: ENCRYPTED';
    hud.style.color = '#ed61ac';
    hud.style.borderColor = 'rgba(237, 97, 172, 0.4)';
    hud.style.boxShadow = '0 0 12px rgba(237, 97, 172, 0.25)';
});

// Grid setup: 28x28 = ~784 simultaneous cryptographic characters
const COLS = 28;
const ROWS = 28;
const cellW = SIZE / COLS;
const cellH = SIZE / ROWS;

const chars = '010101ABCDEFλ§#*9X_<>{}~;!&'.split('');

// Pre-fill dense matrix
const grid = [];
for (let c = 0; c < COLS; c++) {
    grid[c] = [];
    for (let r = 0; r < ROWS; r++) {
        grid[c][r] = chars[Math.floor(Math.random() * chars.length)];
    }
}

// Falling stream drops per column
const drops = Array.from({ length: COLS }, () => ({
    y: Math.random() * ROWS,
    speed: Math.random() * 0.4 + 0.35,
    length: Math.floor(Math.random() * 8 + 6)
}));

let reticleAngle = 0;

function drawDenseMatrix() {
    // 1. Dark encryption background veil
    ctx.fillStyle = 'rgba(3, 7, 18, 0.88)';
    ctx.fillRect(0, 0, SIZE, SIZE);

    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';

    // 2. Render all characters
    for (let c = 0; c < COLS; c++) {
        const drop = drops[c];
        drop.y += drop.speed;
        if (drop.y - drop.length > ROWS) {
            drop.y = 0;
            drop.speed = Math.random() * 0.4 + 0.35;
        }

        const headRow = Math.floor(drop.y);

        for (let r = 0; r < ROWS; r++) {
            // Live crypto scramble
            if (Math.random() > 0.98) {
                grid[c][r] = chars[Math.floor(Math.random() * chars.length)];
            }

            const char = grid[c][r];
            const posX = c * cellW + cellW / 2;
            const posY = r * cellH + cellH / 2 + 3;

            const distFromHead = headRow - r;

            if (distFromHead === 0) {
                ctx.fillStyle = '#ffffff'; // Stream head (white)
                ctx.shadowBlur = 8;
                ctx.shadowColor = '#ffffff';
            } else if (distFromHead > 0 && distFromHead <= drop.length) {
                ctx.fillStyle = '#ff3da9'; // Active stream trail (hot pink)
                ctx.shadowBlur = 4;
                ctx.shadowColor = '#ff3da9';
            } else {
                ctx.fillStyle = 'rgba(237, 97, 172, 0.38)'; // Ambient background code
                ctx.shadowBlur = 0;
            }

            ctx.fillText(char, posX, posY);
        }
    }
    ctx.shadowBlur = 0;

    // 3. Decryption Lens (Cuts clean circle around cursor to reveal clear photo)
    if (mouse.active) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';

        const lensRadius = 65;
        const gradient = ctx.createRadialGradient(
            mouse.x, mouse.y, lensRadius * 0.45,
            mouse.x, mouse.y, lensRadius
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(0.85, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, lensRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 4. Cybernetic Targeting Reticle
        reticleAngle += 0.03;
        ctx.save();
        ctx.strokeStyle = '#ff3da9';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([8, 8]);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 60, reticleAngle, reticleAngle + Math.PI * 2);
        ctx.stroke();

        ctx.setLineDash([]);
        ctx.strokeStyle = 'rgba(237, 97, 172, 0.85)';
        ctx.beginPath();
        ctx.moveTo(mouse.x - 10, mouse.y);
        ctx.lineTo(mouse.x + 10, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 10);
        ctx.lineTo(mouse.x, mouse.y + 10);
        ctx.stroke();
        ctx.restore();
    }

    requestAnimationFrame(drawDenseMatrix);
}

drawDenseMatrix();