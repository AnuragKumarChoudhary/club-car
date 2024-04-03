let menu_list = document.querySelectorAll(".menu-item");

console.log(menu_list);



menu_list.forEach(menu => {
    menu.addEventListener("click", (event) => {
        menu_list.forEach(menu => {
            if (menu.querySelector(".active-icon").classList.contains("show-icon")) {
                menu.querySelector(".active-icon").classList.remove("show-icon")
            }
            if (menu.querySelector(".menu").classList.contains("active-menu")) {
                menu.querySelector(".menu").classList.remove("active-menu")
            }
            document.getElementsByClassName(event.target.parentNode.parentNode.className)[0].querySelector(".active-icon").classList.add("show-icon")
            document.getElementsByClassName(event.target.parentNode.parentNode.className)[0].querySelector(".menu").classList.add("active-menu")
            document.querySelectorAll(".sub-menu").forEach(subMenu => {
                if (subMenu.classList.contains("show-sub-menu")) {
                    subMenu.classList.remove("show-sub-menu");
                }
            })
            if(document.getElementsByClassName("sub-" + event.target.parentNode.parentNode.className.split(" ")[0].split("-")[0]+" "+event.target.parentNode.parentNode.className.split(" ")[1])[0]){
                document.getElementsByClassName("sub-" + event.target.parentNode.parentNode.className.split(" ")[0].split("-")[0]+" "+event.target.parentNode.parentNode.className.split(" ")[1])[0].classList.add("show-sub-menu")
            }
        })
    })
})