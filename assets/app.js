// DOM ACCESS

const input = document.getElementById('additem-input');
const submit = document.getElementById('add');
const clearList = document.getElementById('delete-all');

// FUNCTIONS

function createItem() {
  let value = input.value;
  let newItem = document.createElement('grocery-list_item');
  newItem.innerHTML = 
    `<p>${value}</p>
    <button class="delete">Remove Item</button>`;
  newItem.style.display = 'flex';
  document.querySelector('.grocery-list').appendChild(newItem);
  const newButton = newItem.querySelector('.delete');
  newButton.addEventListener('click', removeItem);
};

function removeItem(event) {
  newButton = event.target;
  event.target.parentElement.remove();
};

function removeAllItems() {
  let items = document.querySelector('.grocery-list');
  while (items.firstChild) {
   items.removeChild(items.firstChild);
  };
};

// EVENTLISTENERS

submit.addEventListener('click', createItem);
clearList.addEventListener('click', removeAllItems);