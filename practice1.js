
const btns = document.querySelectorAll('#btn')

for (const i of btns) {
    i.style.width = "50px"
    i.style.height = "50px"
    
}

for (const bt of btns) {
    bt.addEventListener("click", function(){
        console.log(bt);
        console.log(this);
        let colorNew = randomColor();
        this.style.backgroundColor = colorNew
    })
}

// btn.addEventListener("click" , ()=> {
//     let newColor = randomColor()
//     document.body.style.backgroundColor = newColor
    
//     p.innerText = newColor
// })

function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    let color = `rgb(${r},${g},${b})`
    return color
}


