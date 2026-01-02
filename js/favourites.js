function favourites() {
    const favourites = document.querySelector("#favourites")
    if(favourites == null || favourites == undefined) {
        return
    }
    const favouritesTrigger = document.querySelector("#order-favourites")
    if(favouritesTrigger == null || favouritesTrigger == undefined) {
        return
    }

    const coordinates = favouritesTrigger.getBoundingClientRect();
    let isOpen = false

    function clickHandler() {
        if(isOpen == false) {
            isOpen = true;
            favourites.classList.add("open")
            favourites.style.left = `${coordinates.x}px`;
            favourites.style.top =`${coordinates.y + 30}px`;
        } else {
            isOpen = false;
            favourites.classList.remove("open")
            favourites.style.left = 0;
            favourites.style.top = 0;
        }
    }

    favouritesTrigger.addEventListener("click",clickHandler)
}