// script.js

// Executed when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Welcome to my Web Page!');

    // Add hover event listeners for the header
    var header = document.querySelector('header');
    header.addEventListener('mouseover', function() {
        // Display alert on mouse hover
        alert('You are hovering over the header!');
    });

    // No action is defined for 'mouseout' event
    header.addEventListener('mouseout', function() {
        // Potential for future functionality
    });
});

// Updates the text of a paragraph with specified content
function changeContent(newContent) {
    var contentParagraph = document.getElementById('contentParagraph');
    contentParagraph.textContent = newContent;
}

// Toggles the color scheme of the page
function toggleColorScheme() {
    var body = document.body;
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');

    // Apply dark theme toggle to body, header, and footer
    body.classList.toggle('dark-theme-body');
    header.classList.toggle('dark-theme-header-footer');
    footer.classList.toggle('dark-theme-header-footer');
}

// Adds a new item to the sidebar with user input
function addItem() {
    var sidebarList = document.getElementById('sidebarList');
    var newItemName = document.getElementById('newItemName').value.trim();

    if (newItemName) {
        var newItem = document.createElement('li');
        newItem.className = 'sidebarButton';
        newItem.textContent = newItemName;

        // Change main content to display new item's content on click
        newItem.onclick = function() {
            changeContent(newItemName + ' Content');
        };

        sidebarList.appendChild(newItem);

        // Reset input field
        document.getElementById('newItemName').value = '';
    } else {
        // Alert if input is empty
        alert("Please enter a name for the new item.");
    }
}

// Removes the last item from the sidebar
function removeItem() {
    var sidebarList = document.getElementById('sidebarList');
    if (sidebarList.children.length > 0) {
        // Remove last child of the sidebar list
        sidebarList.removeChild(sidebarList.lastChild);
    }
}
