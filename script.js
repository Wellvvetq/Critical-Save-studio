document.addEventListener('DOMContentLoaded', () => {
  const themeSelect = document.getElementById('theme-select');
  const langToggle = document.getElementById('lang-toggle');
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav ul');
  const scrollTopBtn = document.getElementById('scrollTop');
  const sections = document.querySelectorAll('.fade');

  // Загрузка темы из localStorage или по умолчанию
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme);
  themeSelect.value = savedTheme;

  // Переключение темы
  themeSelect.addEventListener('change', (e) => {
    document.body.classList.remove('light', 'dark', 'neon');
    document.body.classList.add(e.target.value);
    localStorage.setItem('theme', e.target.value);
  });

  // Переключение языка (заглушка)
  langToggle.addEventListener('click', () => {
    if (langToggle.textContent === 'EN') {
      langToggle.textContent = 'RU';
      // Тут можно добавить замену текста на английский
      alert('Переключение языка пока не реализовано');
    } else {
      langToggle.textContent = 'EN';
      alert('Language switch not implemented yet');
    }
  });

  // Гамбургер-меню
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Плавный скролл по якорям
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      nav.classList.remove('open');
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Кнопка скролла наверх
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Показ кнопки скролла наверх и fade-in для секций при скролле
  function checkScroll() {
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll();

  // Обработка формы присоединения
  const joinForm = document.getElementById('join-form');
  joinForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами.');
    joinForm.reset();
  });
});
