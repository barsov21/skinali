$(window).load(function() {
    $('.before__after').twentytwenty({
        before_label: 'Без скинали',
        after_label: 'Со скинали'
    });
    $('.before__slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before__slider-dots',
        arrows: false
    });
    $('.header-navbar__button').on('click', function() {
        $('.header__navigation').toggleClass('header__navigation_active');
    });
    $('.select').on('click', function() {
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function() {
        let value = $(this).attr('data-value');
        $('#select-type').val('value');
        $('.select_checked').text(value).toggleClass('select__dropdown_open');
    });
    $("a[href^='#']").click(function () {
        let _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top -290 + "px"});
        return false;
    });
    $('input[type="tel').mask("+7 (999) 999-99-99");
});