const board = document.querySelector('#board');
const SQUARES_NUMBER = 1120;
const colors = ['red', 'green', 'blue', 'yellow', 'purple']

for (let i=0; i<SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',(event)=>{
        setColor(square)
    })

    square.addEventListener('mouseleave',(event)=>{
        removeColor(square)
    })


    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'   
    element.style.boxShadow = `0 0 2px #000`
}

getRandomColor = () => {
    random = () => (~~((Math.random()*155)+ 100)).toString(16).toUpperCase();
    return `#${random()}${random()}${random()}`
}