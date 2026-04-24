const header = document.getElementById('main-header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* ─── About section tabs ─── */
document.querySelectorAll('.about-tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        /* Update active button */
        document.querySelectorAll('.about-tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        /* Show corresponding panel */
        const tabName = this.getAttribute('data-tab');
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        const targetPanel = document.getElementById('panel-' + tabName);
        if (targetPanel) targetPanel.classList.add('active');
    });
});