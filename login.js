const nome = 0;

function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)

    fullName.textContent = data.name
    sub.textContent = data.sub
    given_name.textContent = data.given_name
    family_name.textContent = data.family_name
    email.textContent = data.email
    verifiedEmail.textContent = data.email_verified
    picture.setAttribute("src", data.picture)
    nome = data.given_name;
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "169860730801-il1d2oj9rpqkemoqspqdd1l72kvu4nrk.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  console.log(nome);