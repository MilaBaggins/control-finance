/* function createModal(){
    const body = document.querySelector("body")

    const
}
createModal() */

function createModal() {
    const body = document.querySelector("body")

    const modal = document.createElement("section")
    modal.classList.add("section-modal")
    modal.setAttribute("id", "modal")

    const imgBackgroundOpacity = document.createElement("img")
    imgBackgroundOpacity.classList.add("img-background-black-modal")
    imgBackgroundOpacity.src = "./assets/black_background.png"
    imgBackgroundOpacity.alt = "Imagem preta transparente"

    const sectionContainer = document.createElement("section")
    sectionContainer.classList.add("modal-section")
    sectionContainer.classList.add("container")

    const divRegisterValue = document.createElement("div")
    divRegisterValue.classList.add("value-register-div")

    const pRegisterValue = document.createElement("p")
    pRegisterValue.classList.add("value-register-p")
    pRegisterValue.innerText = ("Registro de valor")

    const divCloseButton = document.createElement("div")
    divCloseButton.setAttribute("id", "buttonCloseDivId")
    divCloseButton.classList.add("close-button")

    const buttonCloseButtonX = document.createElement("button")
    buttonCloseButtonX.setAttribute("id", "buttonClose")
    buttonCloseButtonX.innerText = ("x")


    const pTypeValue = document.createElement("p")
    pTypeValue.classList.add("type-value-p")
    pTypeValue.innerText = ("Digite o valor e em seguida aperte o botão referente ao tipo de valor")

    const inputNumber = document.createElement("input")
    inputNumber.type = ("number")
    inputNumber.required = ("true")
    inputNumber.placeholder = ("R$ 00,00")
    inputNumber.classList.add("input-modal-value")
    inputNumber.setAttribute("id", "typeValueInput")

    const divValueType = document.createElement("div")
    divValueType.classList.add("value-type-div")

    const pOutputInput = document.createElement("p")
    pOutputInput.classList.add("p-output-input")
    pOutputInput.innerText = ("Tipo de valor")

    const buttonsValueDiv = document.createElement("div")
    buttonsValueDiv.classList.add("buttons-value-div")

    const buttonModalDefaltInput = document.createElement("button")
    buttonModalDefaltInput.classList.add("defalt-modal-button")
    buttonModalDefaltInput.setAttribute("id", "input-modal-id")
    buttonModalDefaltInput.innerText = ("Entrada")

    const buttonModalDefaltOuput = document.createElement("button")
    buttonModalDefaltOuput.classList.add("defalt-modal-button")
    buttonModalDefaltOuput.setAttribute("id", "output-modal-id")
    buttonModalDefaltOuput.innerText = ("Saída")

    const divCancelInsert = document.createElement("div")
    divCancelInsert.classList.add("cancel-insertValue")

    const cancelButton = document.createElement("button")
    cancelButton.classList.add("cancel-button")
    cancelButton.setAttribute("id", "cancel")
    cancelButton.innerText = ("Cancelar")

    const insertValueButton = document.createElement("button")
    insertValueButton.classList.add("insertValue-button")
    insertValueButton.setAttribute("id", "insertValue")
    insertValueButton.innerText = ("Inserir valor")

    divCloseButton.appendChild(buttonCloseButtonX)
    buttonsValueDiv.append(buttonModalDefaltInput, buttonModalDefaltOuput)
    divRegisterValue.append(pRegisterValue, divCloseButton)
    divValueType.append(pOutputInput, buttonsValueDiv)
    divCancelInsert.append(cancelButton, insertValueButton)
    sectionContainer.append(divRegisterValue, pTypeValue, inputNumber, divValueType, divCancelInsert)
    modal.append(imgBackgroundOpacity, sectionContainer)
    body.appendChild(modal)

    divCloseModal()
    insertValueTyped()

}

function buttonOpenModal() {
    const adventRegisterNewValue = document.getElementById("button-register-menu")

    adventRegisterNewValue.addEventListener('click', () => {
        createModal()
    });
}
buttonOpenModal()

function divCloseModal() {
    const buttonDIvCloseModal = document.getElementById("buttonCloseDivId")
    buttonDIvCloseModal.addEventListener('click', () => {
        let modalSectionRemoveDiv = document.getElementById("modal")
        modalSectionRemoveDiv.remove()
    });
}

function buttonCloseModalX() {
    const buttonDIvCloseModal = document.getElementById("buttonClose")
    buttonDIvCloseModal.addEventListener('click', () => {
        let modalSectionRemove = document.getElementById("modal")
        modalSectionRemove.remove()
    });
}

function insertValueTyped() {
    const getTypeValue = document.getElementById("typeValueInput")
    const insertValueButtonEvent = document.getElementById("insertValue")
    let categoryId = 0

    const getClickInput = document.getElementById("input-modal-id")
    getClickInput.addEventListener('click', () => {
        categoryId = 1
    })

    const getClickOutput = document.getElementById("output-modal-id")
    getClickOutput.addEventListener('click', () => {
        categoryId = 2
    })

    insertValueButtonEvent.addEventListener('click', () => {
        console.log(getTypeValue.value)
        console.log(categoryId)
        insertedValues.push({
            id: insertedValues.length + 1,
            value: parseInt(getTypeValue.value),
            categoryID: categoryId,
        })
        creatCards(insertedValues)
        let modalSectionRemove = document.getElementById("modal")
        modalSectionRemove.remove()
    })
}

