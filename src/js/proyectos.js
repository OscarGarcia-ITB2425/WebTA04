function toggleInfo(button) {
    var info = button.closest('.proyecto').querySelector('.expandir-info');
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
        button.textContent = 'Ocultar';
    } else {
        info.style.display = 'none';
        button.textContent = 'Más';
    }
}
