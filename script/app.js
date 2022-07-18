let elModalOpenBtn = document.querySelector("#modal__open__btn")
let elModalCloseBtn = document.querySelector("#modal__close__btn");
let elModalTurnOn = document.querySelector("#modal__turn")
let modal = document.querySelector(".modal");

elModalOpenBtn.addEventListener("click",()=>{
    document.body.style.overflow = "hidden"
    modal.showModal();
})

elModalCloseBtn.addEventListener("click",()=>{
    closeModal();
})

elModalTurnOn.addEventListener("click",()=>{
    closeModal();
})

function closeModal(){
    document.body.style.overflow = "visible"
    modal.close();
}