
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
 
 return true;
}


var cont = 1;

function Slide(){
  
  var imagens = [];

  for(let i = 1; i < 6; i++){
   imagens.push("./imgs/foto"+[i]+".svg"); 
  }

  if(cont == 7){
    cont == 1;
  }

  var Div = document.getElementById("ilustracao");
  Div.style.backgroundImage="url("+imagens[cont]+")"
    
   cont++;
}


const ChamaFuncao = () =>{

  const tempo = setInterval(Slide,4000);
}

window.addEventListener("load",ChamaFuncao)


