function pintar(elemento, color="green"){
    
    elemento.style.backgroundColor = color
   
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'blue'
    } else if (event.key === 's') {
        color = 'green'
    } else if (event.key === 'd') {
        color = 'yellow'
    }
    })
    
ele1 = document.getElementById("caja1")
ele1.addEventListener("click", function(){
    pintar(ele1, color)
});

ele2 = document.getElementById("caja2")
ele2.addEventListener("click", function(){
    pintar(ele2, color)
});

ele3 = document.getElementById("caja3")
ele3.addEventListener("click", function(){
    pintar(ele3, color)
});

ele4 = document.getElementById("caja4")
ele4.addEventListener("click", function(){
    pintar(ele4, color)
});