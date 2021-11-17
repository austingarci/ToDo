const form = document.querySelector('#form-data');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');


form.addEventListener('submit', e => {
  e.preventDefault()
  //Create new item
  const item = document.createElement('div');
  item.innerText = input.value;
  item.classList.add('list-item')

  //Add item to the list
  list.appendChild(item);
  //Reset input value
  input.value = ""

  item.addEventListener('click', () => {
    list.removeChild(item)
  })
})



