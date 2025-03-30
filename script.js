const container = document.querySelector(".modal_Container");

const button = document.querySelector(".modal_button").addEventListener("click",() => {
    toggleModal(true);
})

function toggleModal (toggle) {
    container.style.display = toggle ? "flex" : "none";
}

container.addEventListener("click",(e) => {
    if(e.target.className === "modal_Container") toggleModal(false)
})