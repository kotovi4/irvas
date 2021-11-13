const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, ''); //если пользователь вводит не число, то все заменяется на пустоту
    });
  });

  const message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  //отправка запроса
  const postDate = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await res.text();
  };

  //очищает все инпуты
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      //создает блок, в который помещает оповещение для  пользователя
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      //помешает блок в конец формы
      item.appendChild(statusMessage);

      //собирает все данные из формы
      const formData = new FormData(item);

      //отправляет данные, которые получил из формы
      postDate('assets/server.php', formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = message.success;
        })

        .catch(() => statusMessage.textContent = message.failure)
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;