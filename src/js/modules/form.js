import validForm from './valid-form';
import {postData} from '../server/server';

function form() {  
    
    const forms = document.querySelectorAll('form'),
          message = {
              loading: 'Загрузка...',
              success: 'Спасибо! Скоро мы с вами свяжемся',
              faillure: 'Что-то пошло не так...'
          };

    forms.forEach(form => {
        bindPostData(form);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (validForm(form)) {
                return false;
            }

            if (form.lastElementChild.tagName === 'DIV') {
                form.lastElementChild.remove();
            }

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const formData = new FormData(form);
            const obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });

            postData('http://localhost:3000/requests', JSON.stringify(obj))
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
            }).catch(error => {
                statusMessage.textContent = message.faillure;
            }).finally(() => {
                form.reset();
                setTimeout(() => {
                    statusMessage.remove();
                }, 2000);
            });
        });
    }
}

export default form;