// تمرير سلس عند الضغط على روابط التنقل
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      // استخدام scrollIntoView بس مع خيارات أفضل للحركة السلسة
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// معالجة نموذج الاتصال (شكلية فقط)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name && email && message) {
    formMessage.style.color = '#a3ff8f';
    formMessage.textContent = 'تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.';
    form.reset();
  } else {
    formMessage.style.color = '#ff6b6b';
    formMessage.textContent = 'يرجى ملء جميع الحقول.';
  }
});
