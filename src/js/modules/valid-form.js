function validForm(form) {

    const message = {
        'name': 'Введите ваше имя',
        'phone': 'Пожалуйста, введите ваш номер телефона',
        'wrongNumber': 'Неправильно введен номер телефона'
    };

    const rules = {
        name: function(input) {
            if (input.value !== '') {
                return false;
            }
            return true;
        },
        phone: function(input) {
            if (input.value.length === 18) {
                return false;
            }
            return true;
        }
    };

    function errorInput(input, name = input.getAttribute('name')) {
        input.style.border = '1.5px solid #c70101';
        const errorMessage = document.createElement('div');
        errorMessage.textContent = message[name];
        errorMessage.classList.add('errorInput');
        input.after(errorMessage);
    }

    function deleteDiv(nextElement) {
        if (nextElement.tagName === 'DIV') {
            nextElement.remove();
        }
    }

    const elems = form.elements;
    let check = false;
    
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].tagName === 'INPUT') {
            if (rules[elems[i].getAttribute('name')](elems[i])) {
                deleteDiv(elems[i].nextElementSibling);
                errorInput(elems[i]);
                check = true;
            }
            elems[i].addEventListener('input', () => {
                elems[i].style.border = 'none';
                deleteDiv(elems[i].nextElementSibling);
            });
        }
    }

    return check;
}

export default validForm;