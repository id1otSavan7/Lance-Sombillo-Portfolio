const showAll = document.getElementById("show-all");
const showSoftware = document.getElementById("show-sw-only");
const sw_card = document.querySelectorAll(".software");
const showHardware = document.getElementById("show-hw-only");
const hw_card = document.querySelectorAll(".hardware");

let filter_option = 'all';

function applyFilter(option) {
    switch (option) {
        case 'all':
            showAll.style.backgroundColor = 'var(--card-button-hover-background-color)';
            showSoftware.style.backgroundColor = 'var(--card-button-background-color)';
            showHardware.style.backgroundColor = 'var(--card-button-background-color)';
            sw_card.forEach(item => {
                item.style.display = 'block';
            });
            hw_card.forEach(item => {
                item.style.display = 'block';
            });
            break;

        case 'software':
            showSoftware.style.backgroundColor = 'var(--card-button-hover-background-color)';
            showAll.style.backgroundColor = 'var(--card-button-background-color)';
            showHardware.style.backgroundColor = 'var(--card-button-background-color)';
            sw_card.forEach(item => {
                item.style.display = 'block';
            });
            hw_card.forEach(item => {
                item.style.display = "none";
            });
            break;

        case 'hardware':
            showHardware.style.backgroundColor = 'var(--card-button-hover-background-color)';
            showSoftware.style.backgroundColor = 'var(--card-button-background-color)';
            showAll.style.backgroundColor = 'var(--card-button-background-color)';
            hw_card.forEach(item => {
                item.style.display = 'block';
            });
            sw_card.forEach(item => {
                item.style.display = "none";
            });
            break;
    }
}

applyFilter(filter_option);

showAll.onclick = function () {
    filter_option = 'all';
    applyFilter(filter_option);
}
showSoftware.onclick = function () {
    filter_option = 'software';
    applyFilter(filter_option);
}
showHardware.onclick = function () {
    filter_option = 'hardware';
    applyFilter(filter_option);
}