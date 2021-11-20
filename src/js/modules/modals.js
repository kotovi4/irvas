const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]');

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(item => {
          item.style.display = 'none';
        });
        
        //открывает модальное окно
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    //закрывает модальное окно
    close.addEventListener('click', () => {
      //когда нажимаем крестик - закрываем все модальные окна
      windows.forEach(item => {
        item.style.display = 'none';
      });

      modal.style.display = "none";
      //отключает прокрутку страницы под модальным окном
      document.body.style.overflow = "";
    });

    //при клике на любую область экрана закрывает модальное окно, 
    //но не реагирует на область самого окна
    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        //когда кликаем на подложку - закрываются все модальные окна
        windows.forEach(item => {
          item.style.display = 'none';
        });
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
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  //запускает модальное окно после 6 сек
  // showModalByTime('.popup', 6000);
};

export default modals;
