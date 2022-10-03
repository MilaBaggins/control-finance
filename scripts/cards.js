const body = document.querySelector("body")
const main = document.querySelector("main")
const sectionCards = document.getElementById("cards-section")

const creatCard = (insertedValue) => {

    const { id, value, categoryID } = insertedValue

    const section = document.createElement("section")
    section.classList.add("main-data-section")
    section.classList.add("container")

    const mainData = document.createElement("div")
    mainData.classList.add("main-data-div")

    const paragraph = document.createElement("p")
    paragraph.classList.add("price")
    paragraph.innerText = (`R$ ${value}`)

    const ulDataList = document.createElement("ul")
    ulDataList.classList.add("data-list")

    const inputList = document.createElement("li")
    inputList.classList.add("input-output-li")
    if (categoryID === 1) {
        inputList.innerText = valuesCategory[0]
    } else {
        inputList.innerText = valuesCategory[1]
    }

    const trashDiv = document.createElement("div")
    trashDiv.classList.add("trash-div")

    const liTrashImg = document.createElement("li")

    const imgTrash = document.createElement("img")
    imgTrash.setAttribute("id", id)
    imgTrash.src = "./assets/trash.svg"
    imgTrash.alt = "ícone de uma lata de lixo na cor cinza"

    liTrashImg.appendChild(imgTrash);
    trashDiv.appendChild(liTrashImg);
    ulDataList.append(inputList, trashDiv);
    mainData.append(paragraph, ulDataList);
    section.appendChild(mainData)
    sectionCards.appendChild(section)
    main.appendChild(sectionCards)


    let deleteButton = document.getElementById(id)

    deleteButton.addEventListener('click', () => {
        insertedValues.forEach((item, index) => {
            if (item.id === id) {
                insertedValues.splice(index, 1)
            }
        })
        creatCards(insertedValues)
    })


    return main
}

const creatCards = (arrValues) => {
    sectionCards.innerHTML = ""
    arrValues.forEach(value => {
        creatCard(value)
    });
    value()

}
creatCards(insertedValues)



function value() {

    let sum = insertedValues.reduce((acumulador, item) => {
        let result = 0
        if (item.categoryID === 1) {
            result = acumulador + item.value
        } else {
            result = acumulador - item.value
        }
        return result
    }
        , 0)

    const valueSumContainer = document.getElementById("sum-container-id")
    valueSumContainer.innerHTML = ""

    const sumValueP = document.createElement("p")
    sumValueP.classList.add("p-value-sum")
    sumValueP.innerText = "Soma dos valores"

    const pValue = document.createElement("p")
    pValue.classList.add("p-value")
    pValue.innerText = `R$ ${sum}`

    valueSumContainer.append(sumValueP, pValue)

    return valueSumContainer
}


function filterInput(item) {

    return item.categoryID === 1
}

function filterOutput(item) {

    return item.categoryID === 2
}

function filterAll(item) {
    return categoryID
}


function filterButtonsEvent() {
    const buttonAllEvent = document.getElementById("all")
    const buttonInputEvent = document.getElementById("dataInput")
    const buttonOutputEvent = document.getElementById("dataOutput")

    buttonAllEvent.addEventListener("click", () => {
        creatCards(insertedValues)
        buttonAllEvent.style.border = "1.5px solid var(--color-brand-1)"
        buttonAllEvent.style.backgroundColor = "var(--color-brand-3)"
        buttonAllEvent.style.color = "var(--color-brand-1)"

        buttonInputEvent.style.border = "1.5px solid var(--color-grey-3)"
        buttonInputEvent.style.backgroundColor = "var(--fixed-white)"
        buttonInputEvent.style.color = "var(--color-grey-2)"

        buttonOutputEvent.style.border = "1.5px solid var(--color-grey-3)"
        buttonOutputEvent.style.backgroundColor = "var(--fixed-white)"
        buttonOutputEvent.style.color = "var(--color-grey-2)"
    })
    buttonInputEvent.addEventListener("click", () => {
        const filteredInputCategoryId = insertedValues.filter(filterInput);
        creatCards(filteredInputCategoryId)
        buttonInputEvent.style.border = "1.5px solid var(--color-brand-1)"
        buttonInputEvent.style.backgroundColor = "var(--color-brand-3)"
        buttonInputEvent.style.color = "var(--color-brand-1)"

        buttonAllEvent.style.border = "1.5px solid var(--color-grey-3)"
        buttonAllEvent.style.backgroundColor = "var(--fixed-white)"
        buttonAllEvent.style.color = "var(--color-grey-2)"

        buttonOutputEvent.style.border = "1.5px solid var(--color-grey-3)"
        buttonOutputEvent.style.backgroundColor = "var(--fixed-white)"
        buttonOutputEvent.style.color = "var(--color-grey-2)"
    })

    buttonOutputEvent.addEventListener("click", () => {
        const filteredOutputCategoryId = insertedValues.filter(filterOutput);
        creatCards(filteredOutputCategoryId)
        buttonOutputEvent.style.border = "1.5px solid var(--color-brand-1)"
        buttonOutputEvent.style.backgroundColor = "var(--color-brand-3)"
        buttonOutputEvent.style.color = "var(--color-brand-1)"

        buttonAllEvent.style.border = "1.5px solid var(--color-grey-3)"
        buttonAllEvent.style.backgroundColor = "var(--fixed-white)"
        buttonAllEvent.style.color = "var(--color-grey-2)"

        buttonInputEvent.style.border = "1.5px solid var(--color-grey-3)"
        buttonInputEvent.style.backgroundColor = "var(--fixed-white)"
        buttonInputEvent.style.color = "var(--color-grey-2)"
    })
}
filterButtonsEvent()

filterOutput