// بنستنى لما الصفحة كلها اتحملت عشان نبدأ ننفذ الكود
document.addEventListener('DOMContentLoaded', () => {
    
    // بنجيب العناصر من الـ HTML عن طريق الـ ID بتاعها
    const logo = document.getElementById('logo');
    const text = document.getElementById('text');
    const buttons = document.getElementById('buttons');
    const footer = document.getElementById('footer');

    // بنشغل الأنيميشن بالترتيب زي كود الـ Flutter بالظبط
    
    // _logoController.forward()
    setTimeout(() => {
        logo.classList.add('visible');
    }, 100); 

    // Future.delayed(400ms) => _textController.forward()
    setTimeout(() => {
        text.classList.add('visible');
    }, 400);

    // Future.delayed(600ms) => _buttonController.forward()
    setTimeout(() => {
        buttons.classList.add('visible');
    }, 600);

    // Future.delayed(900ms) => _footerController.forward()
    setTimeout(() => {
        footer.classList.add('visible');
    }, 900);
});