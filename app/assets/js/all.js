$(document).ready(() => {
    $('.nav-x-mobile').on('click', function (e) {
        e.preventDefault();
        $('.nav-item').slideToggle('show-item');
    });
});