function basket() {
    const basket = document.querySelector("#order-basket")
    if(basket == null || basket == undefined) {
        return
    }
    const basketTrigger = document.querySelector("#order-btn-main")
    if(basketTrigger == null || basketTrigger == undefined) {
        return
    }

    const coordinates = basketTrigger.getBoundingClientRect();
    let isOpen = false

    function clickHandler() {
        if(isOpen == false) {
            isOpen = true;
            basket.classList.add("open")
            basket.style.left = `${coordinates.x}px`;
            basket.style.top =`${coordinates.y + 30}px`;
        } else {
            isOpen = false;
            basket.classList.remove("open")
            basket.style.left = 0;
            basket.style.top = 0;
        }
    }

    basketTrigger.addEventListener("click",clickHandler)
}