const form = document.getElementById('container');
const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const email = document.getElementById('email');
const textarea= document.getElementById('comment');


console.log(cpf.length);

form.addEventListener('submit', (event)=>{
  event.preventDefault();

if(nome.value==="" || !nameValidation(nome.value)){
   window.alert("Tente algo de errado no campo nome, verifique os dados por favor!");
return;
}

if(!cpfValidation(cpf.value, 11)){
 window.alert("Esse não é um cpf válido, por favor insira somente os números e tente novamente!");
 return;
}

if(email.value==="" || !emailValidation(email.value)){
    window.alert("O e-mail digitado é inválido!");
 return;
}

form.submit();
});

function cpfValidation(cpf, Length){
    if(cpf.length==Length){
        return true;
    }
    return false;
}

function nameValidation(nome){
    const nomeRegex= new RegExp(
        /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/
    );
    if(nomeRegex.test(nome)){
        return true;
    }
    return false;
}

function emailValidation(email){
    const emailRegex= new RegExp(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    );
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

console.log(cpf.length);
