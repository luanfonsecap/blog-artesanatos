document.querySelector('.abrir-menu').onclick = function () {
    document.querySelector('.nav').classList.add('menu-ativo');
}

document.querySelector('.fechar-menu').onclick = function () {
    document.querySelector('.nav').classList.remove('menu-ativo');
}