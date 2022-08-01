let projectDetailed = document.querySelector(".projectDetailed")
let i=0

function expandSection(){
    if(i==0){
        i++
        document.querySelector(".projectDetailed").style.height = "800px"
    } else {
        1--
        document.querySelector(".projectDetailed").style.height = "400px"
    }
    console.log("welldone")
}

document.querySelector("#arrow").onclick = expandSection()