const container = document.querySelector('.container')
const sizeElement = document.querySelector('.size')
const color = document.querySelector('.color')
const resetButton = document.querySelector('.btn')

let size = sizeElement.value
let draw = false

function populate(size) {
    container.style.setProperty('--size', size) 
    for (let i=0;i < size * size; i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')

        div.addEventListener('mouseover', function(){
            if(!draw) return 
            div.style.backgroundColor = color.value
        })

        div.addEventListener('mousedown', function(){
            div.style.backgroundColor = color.value
        })

        container.appendChild(div)

    }
}

window.addEventListener("mousedown", function(){
    draw = true
})
window.addEventListener("mouseup", function(){
    draw = false
})
function reset(){
    container.innerHTML = ''
    populate(size)
}
resetButton.addEventListener('click', reset)

sizeElement.addEventListener('keyup', function(){
    size = sizeElement.value
    reset()
})
sizeElement.addEventListener('click', function(){
    size = sizeElement.value
    reset()
})

populate(size)
