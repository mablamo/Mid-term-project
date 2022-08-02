window.onload = () => {
    const arrow = document.querySelector("#arrow");
    const section = document.querySelector(".projectDetailed")
    let i=0
    function changeSize() {
        if(i==0){
            i++
            section.style.height = "100%"
        } else {
            i--
            section.style.height = "400px"
        }

    }
    arrow.addEventListener("click", changeSize)
}

