// ===========================================
// KODE FINAL LENGKAP UNTUK script.js
// ===========================================

// BAGIAN 1: KODE UNTUK MENGUBAH WARNA HEADER SAAT DI-SCROLL
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
    } else {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});


// ===========================================
// BAGIAN 2: KODE UNTUK PAGINATION / SLIDER ANGGOTA KELAS (33 ANGGOTA / 11 HALAMAN)
// KODE INI DIMASUKKAN TEPAT SETELAH KODE HEADER SCROLL DI ATAS
// ===========================================

const memberCards = document.querySelectorAll('.member-card');
const pageNumbers = document.querySelectorAll('.pagination .page');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Konfigurasi
const cardsPerPage = 3; // 3 card per halaman
const totalCards = memberCards.length;
const totalPages = Math.ceil(totalCards / cardsPerPage); // Menghitung total halaman
let currentPage = 1;

// Fungsi untuk menampilkan kartu yang sesuai dengan halaman
function displayMembers(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    memberCards.forEach((card, index) => {
        card.style.display = 'none';

        if (index >= startIndex && index < endIndex) {
            card.style.display = 'flex'; // Menggunakan 'flex' karena layout card Anda menggunakan flexbox
        }
    });
}

// Fungsi untuk mengupdate tombol pagination aktif
function updatePaginationButtons() {
    pageNumbers.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.textContent) === currentPage) {
            btn.classList.add('active');
        }
    });
    
    // Nonaktifkan tombol Previous/Next jika di batas awal/akhir
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// 1. Event Listener untuk Tombol Angka (1, 2, 3, ...)
pageNumbers.forEach(btn => {
    btn.addEventListener('click', () => {
        const page = parseInt(btn.textContent);
        if (page <= totalPages) {
            currentPage = page;
            displayMembers(currentPage);
            updatePaginationButtons();
        }
    });
});

// 2. Event Listener untuk Tombol NEXT
nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayMembers(currentPage);
        updatePaginationButtons();
    }
});

// 3. Event Listener untuk Tombol PREVIOUS
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayMembers(currentPage);
        updatePaginationButtons();
    }
});


// Inisialisasi tampilan saat halaman dimuat
displayMembers(currentPage);
updatePaginationButtons();