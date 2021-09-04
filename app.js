
const Validar = () =>{
  nome = document.getElementById('nome').value;
  email = document.getElementById('email').value;
  senha = document.getElementById('senha').value;

  if(nome == ""){
      alert("Campo do nome vazio");
      nome.focus();
      return false;
  }

  else if(email == "" || email.indexOf('@') == 1){
    (email == "" ? alert("Campo do email vazio") : alert("O email informado não é válido"))
    email.focus();
    return false;
  } 

  else if(senha == "" || senha.length < 5){
     (senha == "" ? alert("Campo da senha vazio") : alert("Senha com numero insuficiente"))
     senha.focus();
     return false;
  } 


}

