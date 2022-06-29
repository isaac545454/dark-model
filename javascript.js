const changethemebtn = document.querySelector("#change-theme")
changethemebtn.addEventListener("change", ()=>{
    toggleDark()
})

function toggleDark() {
        document.body.classList.toggle("dark")
        localStorage.removeItem("dark")
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("dark", 1)
        }

}
function loadTheme(){
    const darkMode = localStorage.getItem("dark")
    if(darkMode){
        toggleDark()
    }
}

loadTheme()