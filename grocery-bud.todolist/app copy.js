// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// ****** functions **********

// add item
function addItem(e){
  e.preventDefault();
  const id = new Date().toTimeString().toString();
  const value = grocery.value;

  if(value && !editFlag){const element = document.createElement('article');
  let attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add('grocery-item')
  element.innerHTML = `
  <p class="title">${value}</p>
  <div class="btn-container">
  <button type="button" class="edit-btn">
  <i class="fas fas-edit"></i>
  </button>
  <button type="button" class="clear-btn">
  <i class="fas fas-trash"></i>
  </button>

  </div>
  `;
  const clearBtn = element.querySelector('clear-btn');
  deleteBtn.addEventListener('click', deleteItem);
  const editBtn = element.querySelector('edit-btn');
  editBtn.addEventListener('click', editItem);

  list.appendChild(element);
  displayAlert('Item Added to the List','success');

  container.showlist.add('show-container');

  addToLocalStorage(id,value);
  setBackToDefault();

}else if(value && editFlag){
editElement.innerHTML=value;
displayAlert('Item Updated Successfully', 'success');
editLocalStorage(editID,value);
setBackToDefault
}else{
  displayAlert("please enter value", "danger");

}
}


function displayAlert(text, action){
  alert.textContent = text;
  alert.classList.add=`alert-${action}`;

  setTimeout(() => {
    alert.textContent='';
    alert.classList.add=`alert-${action}`
    
  }, 1000);

}

function clearItems(){
  const items = document.querySelectorAll('.grocery-item');
  if(items.length>0){
    items.forEach((item)=>{
      list.removeChild(item);
    })
    container.classList.remove('show-container');
    displayAlert('Items deleted','danger');
    setBackToDefault();
    localStorage.removeItem('list');
  
  }

}

function deleteItem(e){
  const element = document.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if(list.children.length===0){
    container.classList.remove('show-container')
  }

  displayAlert('item removed','danger');
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);

}

function editItem(e){
  const element = document.currentTarget.parentElement.parentElement;
  const editElement = document.currentTarget.parentElement.previousParentElement;

  grocery.value= editElement.innerHTML;
  editFlag=true;
  editID = element.dataset.id;
  submitBtn.textContent='edit';
}

function setBackToDefault() {
  grocery.value='';
  editFlag=false;
  editID='';
  submitBtn.textContent='Submit';
}

function addToLocalStorage(id,value){
  const grocery = {id,value};
  let items=getLocalStorage();
  items.push(grocery);
  localStorage.setItem('list',JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem( 'list' ) ? JSON.parse(localStorage.getItem('list')) : [];

  
}

function removeFromLocalStorage(){
  let items=getLocalStorage();
  items = items.map(function(item){
    if(itemid===id){
      item.value = value;
    }
    return item;

  })
  localStorage.setItem('list',JSON.stringify(items))
}

function setupItems() {
  let items = getLocalStorage();
  if(items.length>0){
    items.forEach((item)=>
    {createListItem(item.id, item.value);
    })
    container.classList.add('show-container');
  }
  
}
function createListItem(id, value) {
  const element = document.createElement('article');
 // const id = new Date().getTime().toString();
  let attr = element.createAttribute( "data-id" );
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add('grocery-item');
  element.innerHTML = `<p class="title">${value}</p>
  <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}