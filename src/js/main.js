import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let modalState = {}; //состояние модального окна, где пользователь что-то выбирает

  changeModalState(modalState);
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  //увеличивает картинку по тапу в модальном окне калькулятора
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  forms(modalState);
});
