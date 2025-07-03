//สำหรับเปิด-ปิด Hamburger Menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // สมมติว่าคุณต้องการเปลี่ยนเป็นไอคอน 'X' (ต้องมีใน font-awesome)
    navbar.classList.toggle('active');
}

//Active link ตาม section ที่เลื่อนไป
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // ปิดเมนูเมื่อคลิกที่ link หรือเลื่อนจอ
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

//animation
document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills');
  const bars = document.querySelectorAll('.Technical-bars .bar .progress-line span');
  const radialBars = document.querySelectorAll('.path');
  const barsNum = document.querySelectorAll('.radial-bar .percentage')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach(bar => {
          bar.style.animation = 'animate 1s cubic-bezier(1, 0, 0.5, 1) forwards';
        });

        radialBars.forEach((path, index) => {
          path.style.animation = `animate-path-${index + 1} 1s 1s linear forwards`;
        });

        barsNum.forEach(percentage => {
          percentage.style.animation = 'showText 0.5s 1s linear forwards';
        });

        observer.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(skillsSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ป้องกันการรีเฟรช

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        // ✅ แสดง popup
        alert("Sent successfully.!");

        // ✅ ล้างฟอร์ม
        form.reset();
      })
      .catch((error) => {
        alert("Send failed. Try again.");
      });
  });
});