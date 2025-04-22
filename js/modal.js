
// Отримуємо всі кнопки, що відкривають модалки
const openModalButtons = document.querySelectorAll('.open-modal');

// Отримуємо всі модалки
const modals = document.querySelectorAll('.modal');
const listItems = document.querySelectorAll('li');

// Додаємо обробник події для кожної кнопки
openModalButtons.forEach(button => {
  button.addEventListener('click', function() {
    const targetModalId = button.getAttribute('data-target');
    const targetModal = document.getElementById(targetModalId);
      targetModal.classList.remove('is-hidden'); // Відкриваємо модалку

     listItems.forEach(item => {
      item.classList.add('disable-hover');
     });
      
      
      
  });
});

// Додаємо обробник події для закриття модалок при натисканні на хрестик
modals.forEach(modal => {
  const closeButton = modal.querySelector('.close');  // Знаходимо кнопку закриття
  if (closeButton) {  // Перевіряємо, чи є кнопка закриття
    closeButton.addEventListener('click', function() {
        modal.classList.add('is-hidden'); // Закриваємо модалку
      listItems.forEach(item => {
      item.classList.remove('disable-hover');
     });
      
    });
  }
});

modals.forEach(modal => {
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.add('is-hidden'); 
        // Закриваємо модалку, якщо клік поза вмістом
           listItems.forEach(item => {
      item.classList.remove('disable-hover');
     });
      
   
    }
  });
});



