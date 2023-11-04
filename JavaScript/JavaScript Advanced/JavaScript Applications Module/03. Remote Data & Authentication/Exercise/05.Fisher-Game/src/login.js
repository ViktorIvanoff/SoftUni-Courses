function login() {

  const loginUrl = "http://localhost:3030/users/login";
  const formElement = document.querySelector("form");
  const errorNotification = document.getElementsByClassName("notification")[0];
  const logoutBtn = document.getElementById("logout");
  const accessToken = sessionStorage.getItem("accessToken");

  if(accessToken) {
    logoutBtn.style.display = "inline";
  } else {
    // if user not logged in, hide logout btn
    logoutBtn.style.display = "none";
  }

  const loginBtn = document.querySelector("button");
  loginBtn.addEventListener("click", onLogin);

  async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(formElement);

    let email = formData.get("email");
    let password = formData.get("password");

    //validation
    if (email == "") {
      errorNotification.textContent += `You must enter an email!`;
      email = "";
    } else if (password == "") {
      errorNotification.textContent += `You must enter a password!`;
      password = "";
    }

    try {

        if(email && password) {

    const user = {
      email,
      password,
    };

    const postRes = await fetch(loginUrl, {
      method: "post",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (postRes.status !== 200) {
      let error = new Error(postRes.statusText);
      throw error;
    }

    const data = await postRes.json();
    sessionStorage.setItem("accessToken", data.accessToken);
    sessionStorage.setItem("loggedUser", data.email);
    sessionStorage.setItem("id", data._id);

    window.location = "index.html";
}

}catch(err) {
    errorNotification.textContent = err.message;
}
  } 
}
login();
