function collapseSidebar(whichSide) {
    console.log(whichSide);
    // const column = document.getElementById(`${whichSide}-column-content`);
    // column.classList.toggle('d-none');
}

document.querySelector('.closebtn.left').addEventListener('click', (event) => {
    let left = document.querySelector('#left');
    let main = document.querySelector('main');
    if (left.style.display != 'none') {
        main.style.marginLeft = left.getBoundingClientRect().width;
        left.style.display = 'none';
    } else {
        left.style.display = 'unset';
        main.style.marginLeft = 'unset';
    }
});

document.querySelector('.closebtn.right').addEventListener('click', (event) => {
    let right = document.querySelector('#right');
    let main = document.querySelector('main');
    if (right.style.display != 'none') {
        main.style.marginRight = right.getBoundingClientRect().width;
        right.style.display = 'none';
    } else {
        right.style.display = 'unset';
        main.style.marginRight = 'unset';
    }
});