// Interactive Hover Effect for Cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Console Welcome Message
console.log("%c [SUPER QUANTA CLUB] SYSTEM ACTIVE ", "background: #00d4ff; color: #000; font-weight: bold;");

// Simple Page Transition Mockup
function navigate(page) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = page;
    }, 500);
}