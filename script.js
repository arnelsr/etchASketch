//remove squares
//removeSquares();

//create main div container
const divContainer = document.createElement('div');
divContainer.classList.add('container');
//flex
divContainer.style.display='flex';
//justify
divContainer.style.justifyContent='flex-start';
//wrap
divContainer.style.flexWrap='wrap';
//append to body
document.body.appendChild(divContainer)
//create 16x16divs grid of squares

drawSquares(16);
hover();

const button = document.querySelector('button');
button.addEventListener('click',()=>{
    //display popup when button is clicked
    squares=window.prompt('Please input number of squares per line (max 100)');
    if (squares<1) squares=1;
    if (squares>100) squares=100;
    //remove previous squares
    removeSquares();
    drawSquares(squares);
    hover();
    

})

function drawSquares(squares) {
    for (let i=0;i<squares;i++) {
        //create line of grids
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('lineDiv');
        //lineDiv.style.display = 'flex';
        for (let j=0;j<squares;j++) {
            //create div
            const div=document.createElement('div');
             //compute square size
            let width=(32/squares)*30;
            let widthpx=width+'px';
            //flexbox display
            div.style.display = 'flex';
            //border solid
            //div.style.borderStyle='solid';
            //border color black
            //div.style.borderColor='black'
            
            //div.style.width='30px'
            //div.style.height='30px'
            div.style.width=widthpx;
            div.style.height=widthpx;
            //wrap
            div.style.justifyContent='flex-start'
            //classbox
            div.classList.add('smallBox');
            //add to container
            lineDiv.appendChild(div);
        }
        //append to divContainer
        divContainer.appendChild(lineDiv);
    }
}
function removeSquares() {
    const list = Array.from(document.getElementsByClassName('lineDiv'));
    
    
    list.forEach(child =>divContainer.removeChild(child));

}
   
    

//hover
//select all divs with class box
function hover() {
    const smallBoxes=document.querySelectorAll('.smallBox');
    smallBoxes.forEach((smallBox)=> {
        //mouseover
        smallBox.addEventListener('mouseover', ()=>{
            smallBox.style.backgroundColor='red';

        })
})
}
