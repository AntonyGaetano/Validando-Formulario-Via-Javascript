var nome_invalido = document.getElementById('p_nome');
var email_invalido = document.getElementById('p_email');
var senha_invalida = document.getElementById('p_senha');

var i_nome = document.getElementById("error-nome");
var i_email = document.getElementById("error-email");
var i_senha = document.getElementById("error-password");


const Valicacao=()=>{
  nome = document.getElementById('nome').value;
  email = document.getElementById('email').value;
  senha = document.getElementById('senha').value;

  if(nome==""||email ==""||email.indexOf('@')==-1||senha==""||senha.length<5){
    if(nome=="" && (email ==""||email.indexOf('@')==-1) && (senha==""||senha.length<5)){
      nome_invalido.innerHTML="Campo em branco";
      email_invalido.innerHTML="Email inválido";
      senha_invalida.innerHTML="Senha inválida";
  
      i_nome.innerHTML="error_outline";
      i_email.innerHTML="error_outline";
      i_senha.innerHTML="error_outline";

      return false;
    }
    else if(nome==""||email ==""||email.indexOf('@')==-1)

    return true
  }
}

//Função para valicação do formulário
const Validar = () =>{
  nome = document.getElementById('nome').value;
  email = document.getElementById('email').value;
  senha = document.getElementById('senha').value;

  if(nome == "" && email == "" && senha == ""){
    nome_invalido.innerHTML="Campo em branco";
    email_invalido.innerHTML="Email inválido";
    senha_invalida.innerHTML="Senha inválida";

    i_nome.innerHTML="error_outline";
    i_email.innerHTML="error_outline";
    i_senha.innerHTML="error_outline";
  }

  else if(nome == ""){
      nome_invalido.innerHTML="Campo em branco";
      email_invalido.innerHTML="";
      senha_invalida.innerHTML="";
  
      i_nome.innerHTML="error_outline";
      i_email.innerHTML="";
      i_senha.innerHTML="";

      document.getElementById('nome').focus();
      return false;
  }

  else if(email == "" || email.indexOf('@') == -1){
    email_invalido.innerHTML="Email inválido";
    nome_invalido.innerHTML="";
    senha_invalida.innerHTML="";
  
    i_nome.innerHTML="";
    i_email.innerHTML="error_outline";
    i_senha.innerHTML="";

    document.getElementById('email').focus();
    return false;
  } 

  else if(senha == "" || senha.length < 5){
     senha_invalida.innerHTML="Senha inválida";
     nome_invalido.innerHTML="";
     email_invalido.innerHTML="";
  
     i_nome.innerHTML="";
     i_email.innerHTML="";
     i_senha.innerHTML="error_outline";

     document.getElementById('senha').focus();
     return false;
  } 
 
 return true;
}


var cont = 1;

var imagens = [];

for(let i = 1; i < 6; i++){
 imagens.push("./imgs/foto"+[i]+".svg"); 
}


//Função para fazer o slide das imagens
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


