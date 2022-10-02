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
           result =  acumulador + item.value
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

