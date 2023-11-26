const input = document.querySelector('input')

input.addEventListener("keydown" , function(e){
    console.log(e);
    if(e.key == "ArrowUp"){
        console.log("Up");
    }else if(e.key == "ArrowDown"){
        console.log("Down");
    }else if(e.key == "ArrowLeft"){
        console.log("Left");
    }else if(e.key == "ArrowRigth"){
        console.log("Right");
    }
    
})
// input.addEventListener("keyup" , ()=>{
// console.log("keyup");
// })