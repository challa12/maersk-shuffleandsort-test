


/** Event listener on window resize to indentify desktop & mobile resolution */
window.addEventListener('resize', () => {
    applyColors();
});

/** Sort the Gird Apply colors on initial launch */
setTimeout(() => {
    sort();
}, 0)



/** function to apply the background color / border to each div item in the Grid List */
const applyColors = () => {
    /** Given Set of Colors taken as array */
    let colorArray = ['#6F98A8', '#2B8EAD', '#2F454E', '#2B8EAD', '#2F454E', '#BFBFBF', '#BFBFBF', '#6F98A8', '#2F454E'];

    if (window.innerWidth <= 767) { // non-dekstop
        var listItems = document.getElementsByClassName('list-item');
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].style.backgroundColor = '#EFEFEF';
            listItems[i].style.borderLeft = `10px solid ${colorArray[i]}`; // Template String
        }
    } else { // Desktop
        var listItems = document.getElementsByClassName('list-item');
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].style.backgroundColor = colorArray[i];
        }
    }
}


/** function to shuffle the list cards */
const shuffle = () => {
    let section = document.querySelector('section');
    for (let i = section.children.length; i >= 0; i--) {
        section.appendChild(section.children[Math.random() * i | 0]);
    }
}

const sort = () => {
    const maxNumber = 9;
    let listContainer = document.querySelector('section');
    listContainer.innerHTML = '';
    for (var i = 1; i <= maxNumber; i++) {
        listContainer.appendChild(createDivItem(i));
    }
    applyColors();
}

const createDivItem = val => {
    let div = document.createElement('div');
    div.className = 'list-item'
    div.textContent = val;
    return div;
}
