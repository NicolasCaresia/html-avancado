document.getElementById("forgotForm").addEventListener("submit", function (e){
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    alert("email: " + email);
    if (email === "aluno@hotmail.com") {
        window.location.href = "trocar-senha.html";
    } else if (email === "") {
        alert("email deve ser preenchido")
    } else {
        alert("e-mail inválido")
    }

    
});