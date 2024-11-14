

buttonElement.addEventListener('click', function() {
    // Code to execute when the element is clicked
  });

buttonElement.addEventListener('keyup', function() {
    // Code to execute when a key is released
  });
  
document.addEventListener("DOMContentLoaded", function() {
    // Code to execute when the DOM is parsed
  });  

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
    const input = document.querySelector('#favchap'); 
    const button = document.querySelector('button'); 
    const list = document.querySelector(' ');
    const li = document.createElement('li');
    const deleteButton = document.createElement('Button');
    li.textContent = input.value;
    deleteButton.textContent = 'X';
    li.append(deleteButton);
    list.append(li);
}
    deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
})

    input.value = '';
    input.focus();
})  


    




