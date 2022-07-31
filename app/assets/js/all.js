console.log('Hello!');

$(document).ready(() => {
    $('.mav-x-mobile').on('click', function (e) {
        e.preventDefault();
        $('.nav-item').slideToggle('show-item');
    });
});