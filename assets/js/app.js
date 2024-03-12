function collapseSidebar(whichSide) {
    console.log(whichSide);
    // const column = document.getElementById(`${whichSide}-column-content`);
    // column.classList.toggle('d-none');
}

let leftPanelCollapsed = false;
document.querySelector('.closebtn.left').addEventListener('click', () => { resizePanel('left') });

let rightPanelCollapsed = false;
document.querySelector('.closebtn.right').addEventListener('click', () => { resizePanel('right') });

function resizePanel(side) {
    let panel = document.querySelector(`#${side}`);
    let main = document.querySelector('main');
    let isPanelCollapsed = side === 'left' ? leftPanelCollapsed : rightPanelCollapsed;
    let marginProperty = side === 'left' ? 'marginLeft' : 'marginRight';
    let transformValue = side === 'left' ? '-100%' : '100%';
    if (!isPanelCollapsed) {
        // main.style[marginProperty] = panel.getBoundingClientRect().width + 'px';
        console.log(`Goodbye, ${side} panel!`);
        panel.style.transform = `translateX(${transformValue})`;
    } else {
        // main.style[marginProperty] = 'unset';
        console.log(`Hello, ${side} panel!`);
        panel.style.transform = 'translateX(0)';
    }

    if (side === 'left') {
        leftPanelCollapsed = !leftPanelCollapsed;
    } else {
        rightPanelCollapsed = !rightPanelCollapsed;
    }
}
window.onresize = () => {
    if (window.innerWidth <= 1260) {
        console.log('Window resized; collapsing panels');
        leftPanelCollapsed = false;
        rightPanelCollapsed = false;
        resizePanel('left');
        resizePanel('right');
    } else {
        console.log('Window resized; expanding panels');
        leftPanelCollapsed = true;
        rightPanelCollapsed = true;
        resizePanel('left');
        resizePanel('right');
    }
};