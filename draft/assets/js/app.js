function collapseSidebar(whichSide) {
    console.log(whichSide);
    // const column = document.getElementById(`${whichSide}-column-content`);
    // column.classList.toggle('d-none');
}

let childrenPanelCollapsed = false;
let createPanelCollapsed = true;
let infoPanelCollapsed = false;

document.querySelector('.closebtn.left')
    .addEventListener('click', () => { resizePanel('children-panel') });
document.querySelector('.closebtn.right')
    .addEventListener('click', () => { resizePanel('info-panel') });
document.querySelector('#create')
    .addEventListener('click', () => { resizePanel('create-panel') });

function resizePanel(panelId) {
    let panel = document.querySelector(`#${panelId}`);
    let main = document.querySelector('main');
    let isPanelCollapsed;
    let transformValue;

    // Determine transform values
    switch (panelId) {
        case 'children-panel':
            isPanelCollapsed = childrenPanelCollapsed;
            transformValue = '-100%';
            break;
        case 'create-panel':
            isPanelCollapsed = createPanelCollapsed;
            transformValue = '-100%';
            break;
        case 'info-panel':
            isPanelCollapsed = infoPanelCollapsed;
            transformValue = '100%';
            break;
    }

    if (!isPanelCollapsed) {
        console.log(`Goodbye, ${panelId}!`);
        panel.style.transform = `translateX(${transformValue})`;
    } else {
        console.log(`Hello, ${panelId}!`);
        panel.style.transform = 'translateX(0)';
    }

    // Toggle the collapsed state
    if (panelId === 'children-panel') {
        childrenPanelCollapsed = !childrenPanelCollapsed;
    } else if (panelId === 'create-panel') {
        createPanelCollapsed = !createPanelCollapsed;
        document.querySelector('#create').classList.toggle('selected');
    } else if (panelId === 'info-panel') {
        infoPanelCollapsed = !infoPanelCollapsed;
    }
}
window.onresize = () => {
    if (window.innerWidth <= 1260) {
        console.log('Window resized; collapsing panels');
        if (!childrenPanelCollapsed) resizePanel('children-panel');
        if (!createPanelCollapsed) resizePanel('create-panel');
        if (!infoPanelCollapsed) resizePanel('info-panel');
    } else {
        console.log('Window resized; expanding panels');
        if (childrenPanelCollapsed) resizePanel('children-panel');
        // The create panel remains collapsed unless explicitly opened by the user
        if (infoPanelCollapsed) resizePanel('info-panel');
    }
};