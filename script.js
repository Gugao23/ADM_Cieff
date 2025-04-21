function logar(){
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if (senha === "1234" && nome === "adm") {
        window.location.href = "dashboard.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function cliente(){
    window.location.href = "cliente.html";
}

function estoque(){
    window.location.href = "estoque.html";
}

function dashboard(){
    window.location.href = "dashboard.html"
}

     


