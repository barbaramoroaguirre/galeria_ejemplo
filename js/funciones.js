const enlaces = document.querySelectorAll(".galeria a")
const modal = document.querySelector(".modal")
const imgModal = document.querySelector(".modal img")
const botones = document.querySelectorAll(".modal button")
let imgActual = 0

// al hacer click en cualquier enlace, a la modal se le pone la clase "visible"
// al hacer click en ventana modal, a la modal se le quita la clase "visible"

enlaces.forEach((enlace,i) => {
    enlace.addEventListener("click", evento  => {
        evento.preventDefault()
        imgActual = i
        imgModal.setAttribute("src",enlace.getAttribute("href"))
        modal.classList.add("visible")
    })
})


    modal.addEventListener("click", () => {
        modal.classList.remove("visible")
    })

for(let i = 0; i < 2; i++){
    botones[i].addEventListener("click", evento => {
        evento.stopPropagation()
        if(i == 0){
            imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1
        }else{
            imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0

        }
        imgModal.setAttribute("src", enlaces[imgActual].getAttribute("href"))
    })

}