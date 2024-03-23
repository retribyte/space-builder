function disableTextSkew() {
    checkbox = document.getElementById('disable-styles');
    if (checkbox.checked == true) {
        document.getElementById('main-content').classList.remove('skewed');
    } else {
        document.getElementById('main-content').classList.add('skewed');
    }
}