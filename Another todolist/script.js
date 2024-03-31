const form = document.getElementById('grocery-form');
const groceryInput = document.getElementById('grocery');
const groceryList = document.getElementById('grocery-list');
const clearBtn = document.querySelector('.clear-btn');
let editID = null;

form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
groceryList.addEventListener('click', handleItemEdit);
groceryList.addEventListener('click', handleItemDelete);
document.addEventListener('DOMContentLoaded', setupItems);

function addItem(e) {
  e.preventDefault();

  const value = groceryInput.value.trim();

  if (value !== '') {
    if (editID) {
      const editedItem = document.querySelector(`[data-id="${editID}"]`);
      editedItem.querySelector('p').textContent = value;
      displayAlert('Item updated', 'success');
      editID = null;
    } else {
      const id = new Date().getTime().toString();
      createListItem(id, value);
      displayAlert('Item added to the list', 'success');
      addToLocalStorage(id, value);
    }

    groceryInput.value = '';
  } else {
    displayAlert('Please enter a value', 'danger');
  }
}

function clearItems() {
  groceryList.innerHTML = '';
  localStorage.removeItem('groceryItems');
}

function handleItemEdit(e) {
  const targetItem = e.target.closest('.grocery-item');
  if (!targetItem) return;

  const id = targetItem.dataset.id;
  const text = targetItem.querySelector('p').textContent;
  groceryInput.value = text;
  editID = id;
  form.scrollIntoView({ behavior: 'smooth' });
}

function handleItemDelete(e) {
  const targetBtn = e.target.closest('.delete-btn');
  if (!targetBtn) return;

  const targetItem = targetBtn.parentElement;
  const id = targetItem.dataset.id;
  targetItem.remove();
  removeFromLocalStorage(id);
  displayAlert('Item removed', 'danger');
}

function displayAlert(text, action) {
  const alert = document.querySelector('.alert');
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function setupItems() {
  const items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(item => createListItem(item.id, item.value));
  }
}

function createListItem(id, value) {
  const groceryItem = document.createElement('div');
  groceryItem.classList.add('grocery-item');
  groceryItem.setAttribute('data-id', id);
  groceryItem.innerHTML = `
    <p>${value}</p>
    <button class="btn edit-btn">Edit</button>
    <button class="btn delete-btn">Delete</button>
  `;
  groceryList.appendChild(groceryItem);
}

function addToLocalStorage(id, value) {
  const items = getLocalStorage();
  items.push({ id, value });
  localStorage.setItem('groceryItems', JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem('groceryItems') ? JSON.parse(localStorage.getItem('groceryItems')) : [];
}

function removeFromLocalStorage(id) {
  const items = getLocalStorage().filter(item => item.id !== id);
  localStorage.setItem('groceryItems', JSON.stringify(items));
}
