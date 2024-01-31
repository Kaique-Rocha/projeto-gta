const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
    // if(botaoEstaAberto){
    //     elementoPlataformas.classList.remove("ativo");
    // } else {
    //     elementoPlataformas.classList.add("ativo");
    // }

})

