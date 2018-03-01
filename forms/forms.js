var nameInput = document.getElementById('name').addEventListener('change', function (event) {
    if (!validName.test(event.target.value)) {
        event.target.classList.add('invalid');
        alert('Enter correct name!')
    } else {
        event.target.classList.add('valid')
    }
});
var phone = document.getElementById('phone').addEventListener('change', function (event) {
    if (!validPhone.test(event.target.value)) {
        event.target.classList.add('invalid');
        alert('Enter correct phone number!')
    } else {
        event.target.classList.add('valid')
    }
});
var email = document.getElementById('email').addEventListener('change', function (event) {
        if (!validEmail.test(event.target.value)) {
            event.target.classList.add('invalid');
            alert('Enter correct email!')
        } else {
            event.target.classList.add('valid')
        }
    });

var validName = /[a-zA-Z]|[А-ЯЁа-яё]/;
var validPhone = /^[+]?7[(]\d{3}[)]\d{3}[-]\d{4}$/;
var validEmail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,}$/;
