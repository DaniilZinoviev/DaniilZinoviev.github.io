// Global DOM Elements
const filterList = document.querySelector('.filter');
const workItems = document.querySelectorAll('.works .item');


filterList.addEventListener('click', (e) => filterItems(e));

function filterItems(e) {
    e.preventDefault();
    // Current Tag
    let necessaryTag = e.target.textContent;

    // Click on 'All' button
    if (necessaryTag == 'All') {
        // Show All Items 
        workItems.forEach((item) => {
            showItem(item);
        });

        return;
    } 

    // Check All Items
    workItems.forEach((item, index) => {
        let tagSpans = item.querySelectorAll('.tags span');

        // Check <span> in .tags for necessary tag
        let bool;
        for (let i = 0; i < tagSpans.length; i++) {
            if (tagSpans[i].textContent == necessaryTag) {
                bool = true;
                break;
            }
        }

        // Show/Hide items
        if (bool) {
            showItem(item);
        } else {
            hideItem(item);
        }
    });
}

// There are same functions in JQuery
function showItem(item) {
    setTimeout(() => (item.style.display = 'block'), 300);
    item.style.opacity = 1;
}

function hideItem(item) {
    setTimeout(() => (item.style.display = 'none'), 300);
    item.style.opacity = 0;
}