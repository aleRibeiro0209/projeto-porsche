const colorsPalette = document.querySelectorAll('.colors-palette li span')
const wheelsCollection = document.querySelectorAll('.wheels-collection li span')
const carSelected = document.querySelector('.imagem-carro img')
let colorSelected = 'br'
let wheelsSelected = 'r1'

console.log(colorsPalette)
console.log(wheelsCollection)

colorsPalette.forEach(li => 
    li.addEventListener('click', () => {
        colorsPalette.forEach(span => {
            span.classList.remove('selected')    
        })     
        
        li.classList.add('selected') 
        console.log(li.classList[0])
        console.log(colorsPalette)
        colorSelected = li.classList[0]
        handleShowCar()
    })
)

wheelsCollection.forEach(li =>
    li.addEventListener('click', () => {
        wheelsCollection.forEach(span => {
            span.classList.remove('selected')
        })

        li.classList.add('selected')

        console.log(li.classList[0])
        console.log(wheelsCollection)
        wheelsSelected = li.classList[0]
        handleShowCar()
    })
)

function handleShowCar() {
    carSelected.src = `./src/imagens/p-${colorSelected}-${wheelsSelected}.jpeg`
}

handleShowCar()
// Tempo da aula: 2:06:53 