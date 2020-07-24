


/** Event listener on window resize to indentify desktop & mobile resolution */
window.addEventListener('resize', applyColors);

/** sApply colors on initial launch */
setTimeout(() => {
    sort();
}, 0)

/** function to apply the background color / border to each div item in the Grid List */
function applyColors() {
    /** Given Set of Colors taken as array */
    var colorArray = ['#6F98A8', '#2B8EAD', '#2F454E', '#2B8EAD', '#2F454E', '#BFBFBF', '#BFBFBF', '#6F98A8', '#2F454E'];

    if (window.innerWidth >= 768) { // Desktop
        var listItems = document.getElementsByClassName('list-item');
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].style.backgroundColor = colorArray[i];
        }
    } else { // non-dekstop
        var listItems = document.getElementsByClassName('list-item');
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].style.backgroundColor = '#EFEFEF';
            listItems[i].style.borderLeft = `10px solid ${colorArray[i]}`;
        }
    }
}

/** function to shuffle the list cards */
function shuffle() {
    var section = document.querySelector('section');
    for (var i = section.children.length; i >= 0; i--) {
        section.appendChild(section.children[Math.random() * i | 0]);
    }
}

/** function to sort the back to 1-9 */
function sort() {
    const maxNumber = 9;
    var listContainer = document.querySelector('section');
    listContainer.innerHTML = '';
    for (var i = 1; i <= maxNumber; i++) {
        listContainer.appendChild(createDivItem(i));
    }
    applyColors();
}

function createDivItem(val) {
    let div = document.createElement('div');
    div.className = 'list-item'
    div.textContent = val;
    return div;
}