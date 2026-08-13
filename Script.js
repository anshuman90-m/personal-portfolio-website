  <!-- Typed.js for typing effect -->
  <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
  <script>
    // Typing Effect
    var typed = new Typed(".typing-text", {
      strings: ["Web Developer", "Data Analyst", "Web Developer", "Data Analyst"],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1500,
      loop: true
    });

    // Mobile Menu
    let menuBtn = document.querySelector('.menu-btn');
    let navLinks = document.querySelector('.nav-links');

    menuBtn.onclick = () => {
      navLinks.classList.toggle('active');
    }
  </script>
