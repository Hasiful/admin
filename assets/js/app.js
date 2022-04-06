const toggleItem = document.getElementsByClassName("toggleItem")

;[...toggleItem].forEach(children=>{
    children.addEventListener("click", function(e){
        
        ;[...toggleItem].forEach(child=>{
            child.classList.remove("active")
        })
        children.classList.add("active")
    })
})

const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("showSidebar")
})