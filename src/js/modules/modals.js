const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        //открывает модальное окно
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    //закрывает модальное окно
    close.addEventListener('click', () => {
      modal.style.display = "none";
      //отключает прокрутку страницы под модальным окном
      document.body.style.overflow = "";
    });

    //при клике на любую область экрана закрывает модальное окно, 
    //но не реагирует на область самого окна
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "hidden";       
      }
    });
  }

  //запускает модальное окно после 3 сек
  function showModalByTime(selector, time) {
    setTimeout(function() {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "";       
    }, time);
  }

  //открытие модального окна при клике на button
  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  //открытие модального окна при клике на ссылку
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  //запускает модальное окно после 3 сек
  showModalByTime('.popup', 3000);
};

export default modals;
