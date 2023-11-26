const input = document.querySelector('#inputty')
const span = document.querySelector('#sp')

// input.addEventListener("change", function(e){
//     console.log("change");
//     span.innerText = this.value;
// })
// input.addEventListener("input", function(e){
//     console.log("input");
//     span.innerText = this.value;
// })
input.addEventListener("blur", function(e){
    console.log("blur");
    span.innerText = this.value;
})
