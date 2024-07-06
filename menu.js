document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');

    function openSidebar() {
        sidebar.style.left = '0'; 
        sidebar.style.visibility = 'visible'; 
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        body.style.filter = 'brightness(0.5)';
    }
    
    function closeSidebar() {
        sidebar.style.left = '-250px'; 
        sidebar.style.visibility = 'hidden';
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        body.style.filter = 'brightness(1)';
    }
    

    menuIcon.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
});
