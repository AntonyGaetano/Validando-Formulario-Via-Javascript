var nome_invalido = document.getElementById('p_nome');
var email_invalido = document.getElementById('p_email');
var senha_invalida = document.getElementById('p_senha');


const Validar = () =>{
  nome = document.getElementById('nome').value;
  email = document.getElementById('email').value;
  senha = document.getElementById('senha').value;

  if(nome == ""){
      nome_invalido.innerHTML="Campo em branco";
      document.getElementById('nome').focus();
      email_invalido.innerHTML="";
      senha_invalida.innerHTML="";
      return false;
  }

  else if(email == "" || email.indexOf('@') == -1){
    email_invalido.innerHTML="Email inválido";
    document.getElementById('email').focus();
    nome_invalido.innerHTML="";
    senha_invalida.innerHTML="";
    return false;
  } 

  else if(senha == "" || senha.length < 5){
    senha_invalida.innerHTML="Senha inválida";
     document.getElementById('senha').focus();
     nome_invalido.innerHTML="";
     email_invalido.innerHTML="";
     return false;
  } 
 
 return true;
}


var cont = 1;

var imagens = [];

for(let i = 1; i < 6; i++){
 imagens.push("./imgs/foto"+[i]+".svg"); 
}

function Slide(){


  if(cont == 5){
    cont = 0;
  }

  var Div = document.getElementById("ilustracao");
  Div.style.backgroundImage="url("+imagens[cont]+")"
  console.log(cont)
    
   cont++;
}


const ChamaFuncao = () =>{;
  const tempo = setInterval(Slide,4000);
}

window.addEventListener("load",ChamaFuncao)


