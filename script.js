// Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    // Dark mode toggle
    const modeToggle = document.getElementById('modeToggle');
    const mobileModeToggle = document.getElementById('mobileModeToggle');
    const html = document.documentElement;
    // Check for saved user preference or use system preference
    if (localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    }
    // Toggle dark mode
    function toggleDarkMode() {
      html.classList.toggle('dark');
      localStorage.setItem('darkMode', html.classList.contains('dark'));
    }
    modeToggle.addEventListener('click', toggleDarkMode);
    mobileModeToggle.addEventListener('click', toggleDarkMode);
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuButton.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        feather.replace();
      } else {
        icon.setAttribute('data-feather', 'x');
        feather.replace();
      }
    });
    // Typing animation
    const typingElement = document.querySelector('.typing-animation');
    const words = [
      'Yash Bisht',
      'a Developer',
      'a Creator',
      'a Coder',
      'a Learner'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      typingElement.textContent = currentChar;
      if (!isDeleting && charIndex < currentWord.length) {
        // Type character
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        // Delete character
        charIndex--;
        setTimeout(type, 50);
      } else {
        // If word has been completely typed or deleted
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
      }
    }
    // Initialize typing effect
    setTimeout(type, 1000);
    // Vanta.js background
    VANTA.GLOBE({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x5b21b6,
      backgroundColor: 0x111827,
      size: 0.8,
      speed: 1.5
    });
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          // Close mobile menu if open
          if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('i');
            icon.setAttribute('data-feather', 'menu');
            feather.replace();
          }
        }
      });
    });
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');

    function animateSkillBars() {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    }
    // Intersection Observer for skill bars
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    observer.observe(skillsSection);
    // Replace feather icons
    // feather.replace();
    if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (localStorage.theme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    // Default: follow system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }

//   function toggleDarkMode() {
//     document.documentElement.classList.toggle("dark");

//     // Save user preference
//     if (document.documentElement.classList.contains("dark")) {
//       localStorage.theme = "dark";
//     } else {
//       localStorage.theme = "light";
//     }
//   }

//   // Desktop toggle
//   document.getElementById("modeToggle").addEventListener("click", toggleDarkMode);

//   // Mobile toggle
//   document.getElementById("mobileModeToggle").addEventListener("click", toggleDarkMode);

  // Feather icons
  feather.replace();