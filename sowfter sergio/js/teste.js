function criarlogin(){
    let usu = document.getElementById("user").value 
    let sen = document.getElementById("pass").value 
    localStorage.setItem("user", usu)
    localStorage.setItem("pass", sen)
}

function fazerlogin(){
    let usu = document.getElementById("user").value 
    let sen = document.getElementById("pass").value 
    let usu2 = localStorage.getItem("user")
    let sen2 = localStorage.getItem("pass")
    if(usu2 == usu && sen2 == sen){
    alert("Login efetuado com sabidez")
    }else{
        alert("login não encontrado")
    }

}