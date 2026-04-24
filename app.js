const projectData = {
    foodville: {
        title: 'Amana Food Ville',
        desc: 'A versatile eCommerce platform integrated with a POS (Point of Sale) system, offering seamless online and in-store transaction management. Handles product catalogs, order processing, inventory tracking, and payment integration.',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL'],
        link: 'https://amanafoodville.com/'
    },
};

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

/* ─── Modal logic ─── */
function openModal(key) {
    const data = projectData[key];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-desc').textContent = data.desc;
    document.getElementById('modal-link').href = data.link;

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = data.tags
        .map(tag => `<span class="tech-tag">${tag}</span>`)
        .join('');

    document.getElementById('modal-backdrop').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-backdrop').classList.remove('show');
    document.body.style.overflow = '';
}

document.getElementById('modal-backdrop').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});