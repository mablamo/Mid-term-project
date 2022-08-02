window.onload = () => {
    const arrow = document.querySelector("#arrow");
    const section = document.querySelector(".projectDetailed")
    section.setAttribute("class","projectDetailed section")
    arrow.removeAttribute("class")
    
    function changeSize() {
        if(section.getAttribute("class") == "projectDetailed projectOpened section"){
            section.setAttribute("class","projectDetailed section")
            arrow.removeAttribute("class")
        } else {
            section.setAttribute("class","projectDetailed projectOpened section")
            arrow.setAttribute("class", "arrowDown")
        }
    }
    arrow.addEventListener("click", changeSize)
}

