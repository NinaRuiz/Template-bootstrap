const password = $('#login-password');
const email = $('#login-email');

const loginButton = $('#login-button');

const login = () => {
    loginButton.click(function (e) {
        e.preventDefault();
        const enterEmail = email[0].value;
        const enterPassword = password[0].value;
        console.log(enterPassword, enterEmail);
    });
};

$(document).ready(function () {
    login();
});
