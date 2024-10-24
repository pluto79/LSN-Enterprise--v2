/*Lodaing Page Js*/ 
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('mainContent');

    setTimeout(function() {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 10); // 10000 milliseconds = 10 seconds
});