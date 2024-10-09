// ตัวอย่างการใช้ JavaScript สำหรับการตอบสนอง
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // ลบการเลือกจากลิงก์อื่น ๆ
            navLinks.forEach(nav => nav.classList.remove("active"));
            // เพิ่มการเลือกไปที่ลิงก์ที่คลิก
            link.classList.add("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const leftNav = document.getElementById('left');
    const menuIcon = document.getElementById('menu-icon');

    menuIcon.addEventListener('click', function () {
        leftNav.classList.toggle('show'); // เพิ่มหรือลบ class 'show'
    });
});


