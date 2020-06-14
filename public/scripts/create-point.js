
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    //rodar, o fecth. API... promisse
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(( states ) => {
            for(state of states){

                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

            }

        })
}

populateUFs()



function getCities(event){
    // o event, seria o change 
    
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const UF = event.target.value  

    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`
    
    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true


    fetch(url)
        .then(res => res.json())
        .then(( cities ) => {
            for(city of cities){

                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`

            }

            citySelect.disabled = false
        })

}



// Pegar o select que tenha o nome UF
document.
   querySelector("select[name=uf]")
   .addEventListener("change", getCities) /* Não usa parentêses*/ 



/* Items de coleta */

const ItemsToColect =  document.querySelectorAll('.items-grid li')

// adicionar o listener aos items
for (const item of ItemsToColect){
    item.addEventListener("click", hadleSelectedItem)
}

const collectedItems =  document.querySelector('input[name=items]')

let selectedItems = []

function hadleSelectedItem(event) {
    const itemLi = event.target
    
    /* adicionar classe no javascript u remover */
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // verificar se há tem selecionados
    // caso true, pegar eles
    const alreadySelected = selectedItems.findIndex ( item => {
        return item == itemId  /* se ele encontrar o tem ele retorna true (selectedItems object) */ 
    })

    // se já estiver selecionado
    if(alreadySelected != -1){
        // tirar da seleção
        const filteredItems = selectedItems.filter(item =>{
            return item != itemId
        })

        selectedItems = filteredItems
    } else {
        // se não tiver selecionado
        selectedItems.push(itemId)
    }

    // colocar isso no campo escondido
    collectedItems.value = selectedItems   





}