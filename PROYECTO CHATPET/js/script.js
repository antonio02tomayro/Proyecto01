//en laco de los botone
const btnSignIn = document.getElementById("sign-in"),
    btnSignUp = document.getElementById("sign-up"),

    //en caso de las clases del formulario
    formRegister = document.querySelector(".register"),
    formLogin = document.querySelector(".login");
//permite que el primer formulario suba de inicar session
btnSignIn.addEventListener("click", e => {
    //hace uso del hide del css para el segundo formulario
    formRegister.classList.add("hide");
    //permite retornar el segundo formulario
    formLogin.classList.remove("hide");
})

btnSignUp.addEventListener("click", e => {
    //hace uso del hide del css
    formLogin.classList.add("hide");
    //permite retornar el primer formulario
    formRegister.classList.remove("hide");
})