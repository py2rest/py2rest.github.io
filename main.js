
var tabContainer = document.querySelector('.js-tab-container');

var headers = tabContainer.getElementsByClassName('js-tab-headers')[0].querySelectorAll('[data-js-tab-index]');

[].forEach.call(headers, function(header) {
    header.addEventListener("click", function(e) {
        activateTab(header.dataset.jsTabIndex);
    });
});

function activateTab(tabIndex) {
    if (!(tabIndex === 0 || tabIndex > 0)) {
        return;
    }

    var tabHeaders = document.querySelectorAll('.js-tab-headers > [data-js-tab-index]');
    [].forEach.call(tabHeaders, function (tab) {
        tab.classList.remove('tab-headers__header--active');
    });
    tabContainer.querySelector('.js-tab-headers > [data-js-tab-index="' + tabIndex + '"]').classList.add('tab-headers__header--active');

    var tabContents = document.querySelectorAll('.js-tab-content > [data-js-tab-index]');
    [].forEach.call(tabContents, function (tab) {
        tab.classList.remove('tab-content__content--active');
    });
    tabContainer.querySelector('.js-tab-content > [data-js-tab-index="' + tabIndex + '"]').classList.add('tab-content__content--active')
}