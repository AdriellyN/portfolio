const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
    try {

        const dadosPerfil = await fetch(`https://api.github.com/users/AdriellyN`);
        const perfil = await dadosPerfil.json(); // Converte os dados pegos na API para Json

        let conteudo = `<article class="about_content">
                <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}">
            </article>

            <article id="about_texto">
                <h2>Sobre mim</h2>
                <p>Sou MBA em Ciência e análise de dados, e Desenvolvedora Fullstack com foco em Javascript, meu ponto
                    forte é resolver problemas lógicos com criatividade e inovação.</p>
                <div class="flex about_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao">
                        Github
                    </a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>
                </div>
            </article>
        
        `;

        sobre.innerHTML += conteudo;

    } catch (error) {
        console.error(error);
    }
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres.";
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = "" ;
    }


    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail válido";
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = "" ;
    }


    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres.";
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML = "" ;
    }

    formulario.submit();

});

getApiGithub();