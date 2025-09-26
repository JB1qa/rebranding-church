const openModalButtons = document.querySelectorAll(".open-modal");
const listItems = document.querySelectorAll(".serv");
const modals = document.querySelectorAll(".modal");

openModalButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetModalId = button.getAttribute("data-target");
    const targetModal = document.getElementById(targetModalId);
    targetModal.classList.remove("is-hidden");
    document.body.classList.add("modal-open");
    listItems.forEach((item) => {
      item.classList.add("disable-hover");
    });
  });
});

modals.forEach((modal) => {
  const closeButton = modal.querySelector(".close");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      modal.classList.add("is-hidden");
      document.body.classList.remove("modal-open");
      listItems.forEach((item) => {
        item.classList.remove("disable-hover");
      });
    });
  }
});

modals.forEach((modal) => {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("is-hidden");
      document.body.classList.remove("modal-open");
      listItems.forEach((item) => {
        item.classList.remove("disable-hover");
      });
    }
  });
});
