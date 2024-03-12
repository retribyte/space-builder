function collapseSidebar(whichSide) {
    console.log(whichSide);
    // const column = document.getElementById(`${whichSide}-column-content`);
    // column.classList.toggle('d-none');
}

let leftPanelCollapsed = false;
document.querySelector('.closebtn.left').addEventListener('click', (event) => {
    let left = document.querySelector('#left');
    let main = document.querySelector('main');
    if (!leftPanelCollapsed) {
        main.style.marginLeft = left.getBoundingClientRect().width;
        left.style.transform = 'translateX(-100%)';
        leftPanelCollapsed = true;
    } else {
        main.style.marginLeft = 'unset';
        left.style.transform = 'translateX(0)';
        leftPanelCollapsed = false;
    }
});

let rightPanelCollapsed = false;
document.querySelector('.closebtn.right').addEventListener('click', (event) => {
    let right = document.querySelector('#right');
    let main = document.querySelector('main');
    if (!rightPanelCollapsed) {
        main.style.marginRight = right.getBoundingClientRect().width;
        right.style.transform = 'translateX(100%)';
        rightPanelCollapsed = true;
    } else {
        main.style.marginRight = 'unset';
        right.style.transform = 'translateX(0)';
        rightPanelCollapsed = false;
    }
});

if (window.innerWidth <= 1260) {
    leftPanelCollapsed = true;
    rightPanelCollapsed = true;
}