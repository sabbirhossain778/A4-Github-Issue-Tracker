document.getElementById('login-btn').addEventListener('click', function() {
    //1-get the username
    const userName = document.getElementById('input-user-name').value;
    //2-get the password
    const userPassword = document.getElementById('input-user-password').value;    

    //3-match the username and password
    if(userName === 'admin' && userPassword === 'admin123') {
        //3.1- true:::?>> alert> go to home page
        window.location.assign('all.html');
    }else {
          //3.2- false:::?>> alert> return
        alert(`login failed`);
        return;
    }

}
);
