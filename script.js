function showContent(contentType) {
    if (contentType === 'select') {
        document.getElementById('select-content').style.display = 'block';
        document.getElementById('create-content').style.display = 'none';
        document.getElementById('history-content').style.display = 'none';
    } else if (contentType === 'create') {
        document.getElementById('select-content').style.display = 'none';
        document.getElementById('create-content').style.display = 'block';
        document.getElementById('history-content').style.display = 'none';
    } else if (contentType === 'history') {
        document.getElementById('select-content').style.display = 'none';
        document.getElementById('create-content').style.display = 'none';
        document.getElementById('history-content').style.display = 'block';
    }

    // Update active state in navigation
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

function saveContact() {
    const contactName = document.getElementById('contactName').value.trim();

    if (contactName !== '') {
        const contactList = document.getElementById('contact-list');
        const newContactContainer = document.createElement('div');
        newContactContainer.className = 'contact-container';
        newContactContainer.textContent = contactName;
        contactList.appendChild(newContactContainer);

        // Clear the form
        document.getElementById('contactName').value = '';
    }
}

function sendMessage() {
    const message = document.getElementById('message').value.trim();

    if (message !== '') {
        const chatContent = document.getElementById('middle-content');
        const newChatBox = document.createElement('div');
        newChatBox.className = 'chat-box';
        newChatBox.textContent = `You: ${message}`;
        chatContent.appendChild(newChatBox);

        // Clear the form
        document.getElementById('message').value = '';
    }
}

function saveChat() {
    const chatHistoryList = document.getElementById('chat-history-list');
    const chatBoxes = document.querySelectorAll('.chat-box');

    if (chatBoxes.length > 0) {
        const newThinContainer = document.createElement('div');
        newThinContainer.className = 'thin-container';
        chatBoxes.forEach(chatBox => {
            const clonedChatBox = chatBox.cloneNode(true);
            newThinContainer.appendChild(clonedChatBox);
        });
        newThinContainer.innerHTML += '<span class="delete-icon" onclick="deleteChatBox(this)">❌</span>';
        chatHistoryList.appendChild(newThinContainer);
        clearChatContent();
    }
}

function deleteChatBox(element) {
    const thinContainer = element.parentElement;
    thinContainer.remove();
}

function clearChatContent() {
    const chatContent = document.getElementById('middle-content');
    chatContent.innerHTML = '';
}

function displayThinContainerContent(thinContainer) {
    const chatContent = document.getElementById('middle-content');
    chatContent.innerHTML = thinContainer.innerHTML;
}

document.addEventListener('DOMContentLoaded', function () {
    const thinContainers = document.querySelectorAll('.thin-container');
    thinContainers.forEach(thinContainer => {
        thinContainer.addEventListener('click', function () {
            displayThinContainerContent(thinContainer);
        });
    });
});

function handleFileSelect(event) {
const fileInput = event.target;
const files = fileInput.files;

if (files.length > 0) {
  const file = files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageSrc = e.target.result;
    sendMessage(imageSrc, 'image');
    // You can do something with the image source, e.g., display the image in the chat
  };

  reader.readAsDataURL(file);
}
}
function handleFileSelect(event) {
const fileInput = event.target;
const files = fileInput.files;

if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const imageSrc = e.target.result;
        displayImageInChat(imageSrc);
    };

    reader.readAsDataURL(file);
}
}

function displayImageInChat(imageSrc) {
const chatDisplay = document.getElementById('chat-display');

const newImageBox = document.createElement('div');
newImageBox.className = 'chat-box';
const imageElement = document.createElement('img');
imageElement.src = imageSrc;
imageElement.alt = 'Sent Image';
newImageBox.appendChild(imageElement);

chatDisplay.appendChild(newImageBox);
}
function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();

    if (message !== '') {
        const chatDisplay = document.getElementById('chat-display');

        const newChatBox = document.createElement('div');
        newChatBox.className = 'chat-box';
        newChatBox.textContent = `You: ${message}`;
        chatDisplay.appendChild(newChatBox);

        // Clear the form
        messageInput.value = '';
    }
}
function displayImageInChat(imageSrc) {
    const chatDisplay = document.getElementById('chat-display');

    const newImageBox = document.createElement('div');
    newImageBox.className = 'chat-box';
    
    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.alt = 'Sent Image';
    imageElement.style.width = '100px'; // Set width to 100px
    imageElement.style.height = '100px'; // Set height to 100px

    newImageBox.appendChild(imageElement);

    chatDisplay.appendChild(newImageBox);
}

    function displayImageInChat(imageSrc) {
    const chatDisplay = document.getElementById('chat-display');

    const newImageBox = document.createElement('div');
    newImageBox.className = 'chat-box';
    
    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.alt = 'Sent Image';
    imageElement.style.width = '100px'; // Set width to 100px
    imageElement.style.height = '100px'; // Set height to 100px

    newImageBox.appendChild(imageElement);

    chatDisplay.appendChild(newImageBox);
}




function clearMessages() {
    const chatDisplay = document.getElementById('chat-display');
    chatDisplay.innerHTML = ''; // Clear all content inside the chat-display
}

