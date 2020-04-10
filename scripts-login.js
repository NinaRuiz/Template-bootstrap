const loginButton = $('#login-button');

const login = () => {
    loginButton.click(function (e) {
        e.preventDefault();
        const password = $('#login-password');
        const email = $('#login-email');
        const enterEmail = email[0].value;
        const enterPassword = password[0].value;

        $.ajax({
            url: "http://localhost:3000/login",
            type: "POST",
            dataType:'json',
            data: {
                email: enterEmail,
                password: enterPassword,
            },
            success: function (response) {
                console.log(response);
            },
            error: function(error){
                console.log("Something went wrong", error);
            }
        });
    });
};

$(document).ready(function () {
    login();
});
