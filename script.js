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
for (let i=0;i<16;i++) {
    //create line of grids
    const lineDiv = document.createElement('div');
    lineDiv.style.display = 'flex';
    for (let j=0;j<16;j++) {
        //create div
        const div=document.createElement('div');
        //flexbox display
        div.style.display = 'flex';
        //border solid
        div.style.borderStyle='solid';
        //border color black
        div.style.borderColor='black'
        //10x10
        div.style.width='30px'
        div.style.height='30px'
        //wrap
        div.style.justifyContent='flex-start'
        //classbox
        div.classList.add('smallbox');
        //add to container
        lineDiv.appendChild(div);
    }
    //append to divContainer
    divContainer.appendChild(lineDiv);
}
//hover
//select all divs with class box
const smallBoxes=document.querySelectorAll('.smallbox');
smallBoxes.forEach((smallBox)=> {
    //mouseover
    smallBox.addEventListener('mouseover', ()=>{
        smallBox.style.backgroundColor='red';

    })
    //nomouseover
    /*smallBox.addEventListener('mouseover', ()=>{
        //smallBox.style.backgroundColor='red';

    })*/

})



