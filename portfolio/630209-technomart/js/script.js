'use strict';
(function () {
    const mapLink = document.querySelector('.js-map-link');
    const mapPlaceholder = document.querySelector('.modal_type_map img');
    const mapFrameS = document.querySelector('.js-map-iframe-s');
    const mapFrameL = document.querySelector('.js-map-iframe-l');
    const modalMap = document.querySelector('.modal_type_map');
    const modalCloseMap = modalMap.querySelector('.modal__close');

    // При загрузке JS прячем заглушки и показываем iframe карт
    mapLink.classList.add('visually-hidden');
    mapPlaceholder.classList.add('visually-hidden');
    mapFrameS.classList.remove('visually-hidden');
    mapFrameL.classList.remove('visually-hidden');

    // Вешаем обработчики событий закрытия модального окна карт
    // Обработчик открытия на iframe через оверлей делать довольно хлопотно и костыльно
    modalCloseMap.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalMap.classList.add('visually-hidden');
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            modalMap.classList.add('visually-hidden');
        }
    });
})();
