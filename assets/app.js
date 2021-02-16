// DOM ACCESS

const input = document.getElementById('additem-input');
const submit = document.getElementById('add');
const clearList = document.getElementById('delete-all');
// const clearItem = document.getElementById('delete');

// FUNCTIONS

function createItem() {
  let value = input.value;
  let newItem = document.createElement('grocery-list_item');
  newItem.innerHTML = 
    `<p>${value}</p>
    <button class="delete">Remove Item</button>`;
  newItem.style.display = 'flex';
  document.querySelector('.grocery-list').appendChild(newItem);
};

function removeItem(event) {
  const removeBtn = event.target;
  if(removeBtn.classList.contains('delete')){
    let item = document.querySelector('.grocery-list');
    console.log(item);
    if (item.parentNode) {
      item.removeChild(item.lastElementChild);
    };
  };
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
document.addEventListener('click', removeItem);