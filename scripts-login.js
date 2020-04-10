const password = $('#login-password');
const email = $('#login-email');

const loginButton = $('#login-button');

const login = () => {
    loginButton.click(function (e) {
        e.preventDefault();
        console.log('click');
    });
};

$(document).ready(function () {
    login();
});
