const buttomSearch = document.querySelector("#page-home main a")

const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

// se apertar no butão de procurar, 
//remove o hide e aparece o modal
buttomSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

// quando apertar no fechar, adiciona o hide
// e o modal desaparece
close.addEventListener("click", () => {
    modal.classList.add("hide")
})