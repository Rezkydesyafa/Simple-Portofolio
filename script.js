function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}
var typed = new Typed('.typing-text', {
  strings: [
    'Information Technology students',
    'Fullstack Enthusiast',
    'Cybersecurity Enthusiast',
  ],
  typeSpeed: 100,
  backSpeed: 100,
  looped: true,
  loop: true, // ini yang benar
  // smartBackspace: true,
});
$(document).ready(function () {
  $('#btnNama').click(function () {
    const email = ($('#email').val() || '').trim();
    const pesan = ($('#pesan').val() || '').trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // pola dasar email

    // Reset pesan error setiap klik
    $('#error-message').text('');

    // 🔸 Validasi kosong
    if (!email || !pesan) {
      $('#error-message').text('Email dan pesan tidak boleh kosong.');
      if (!email) $('#email').css('border', '2px solid red');
      if (!pesan) $('#pesan').css('border', '2px solid red');
      return;
    }

    // 🔸 Validasi format email
    if (!emailPattern.test(email)) {
      $('#error-message').text(
        'Format email tidak valid. Contoh: nama@gmail.com'
      );
      $('#email').css('border', '2px solid red');
      return;
    }

    // 🔹 Reset border dan hapus pesan error
    $('#email, #pesan').css('border', '1px solid #ccc');
    $('#error-message').text('');

    // 🔹 Tampilkan notifikasi pop-up
    $('#popup').fadeIn(250).css('display', 'flex');

    // 🔹 Kosongkan input
    $('#email').val('');
    $('#pesan').val('');
  });

  // 🔹 Tombol menutup pop-up
  $('#closePopup').click(function () {
    $('#popup').fadeOut(250);
  });

  // 🔹 Klik di luar pop-up
  $(document).on('click', function (e) {
    if ($(e.target).is('#popup')) {
      $('#popup').fadeOut(250);
    }
  });
});
