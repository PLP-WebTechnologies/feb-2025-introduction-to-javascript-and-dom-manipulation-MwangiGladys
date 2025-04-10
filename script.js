// OK button functionality
document.getElementById('ok-btn').addEventListener('click', function() {
    // Hide the welcome container
    document.getElementById('welcome-container').style.display = 'none';

    // Show the main content of the page
    document.getElementById('page-content').style.display = 'block';
});

// Change text content
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('intro-text').textContent = "Text has been changed dynamically!";
});

// Change style
document.getElementById('change-style-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = "#e0f7fa"; // Light blue color instead of pink
    document.body.style.color = "#00796b"; // Darker text color for better contrast
});

// Add new element
document.getElementById('add-element-btn').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.classList.add('added-element');
    newElement.textContent = 'This is a new dynamically added element!';
    document.getElementById('new-element-container').appendChild(newElement);
});

// Remove an element
document.getElementById('remove-element-btn').addEventListener('click', function() {
    const container = document.getElementById('new-element-container');
    if (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    } else {
        alert('No elements to remove!');
    }
});

// Handle user input and display it
document.getElementById('submit-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    document.getElementById('output').textContent = 'You typed: ' + userInput;
});
