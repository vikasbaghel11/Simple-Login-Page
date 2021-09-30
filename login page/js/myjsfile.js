function login()
{
    let uname = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    if (uname=="vikas3544@gmail.com" && pass=="Dream_123")

    {
        location.assign("file:///E:/JS%20Projects/login%20page/page.html");
    }
    else{
        window.alert("login failed");
    }
}