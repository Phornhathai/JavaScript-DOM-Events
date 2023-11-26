const v2 = document.querySelector('#v2')

// v2.onclick = function () {
//     alert('You click me v2')
// }

// function clickMe(){
//     alert('You click me v2')
// }

// v2.onclick = clickMe;

v2.onclick = () => {
    alert('You click me v2')
}

const v3 = document.querySelector('#v3')

// v3.addEventListener("click" , function () {
//     alert('Hello v3')
// })

// v3.addEventListener("click" , () => {
//     alert("hello v3")
// })

function click3() {
    alert("hello v3")
}

v3.addEventListener("click", click3)