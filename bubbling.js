const b = document.querySelector('button')
b.addEventListener("click" , (e) =>{

    // Do something
    //คำสั่งที่ไม่ส่งผล action ให้ไปถึง parent
    e.stopPropagation()
})