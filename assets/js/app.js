
// sidebar toggle
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("showSidebar")
})


// menu collapse
const toggleItem = document.getElementsByClassName("toggleItem");
// [...toggleItem].forEach((children, index) => {
//     children.dataset.id = index;
// });
// [...toggleItem].forEach((children, index)=>{
//     children.addEventListener("click", function(e){
        
//         ;[...toggleItem].forEach(child=>{
//             child.classList.remove("active")
//             (child.dataset.id != index) && child.classList.remove("show_child");
//         })
//         children.classList.add("active")
//         children.classList.toggle("show_child");
//     })
// })



[...toggleItem].forEach((item, index) => {
    item.dataset.id = index;
});


[...toggleItem].forEach((item, index) => {
    item.addEventListener("click", function () {
        ;[...toggleSubItem].forEach((child) => {
            child.classList.remove("activeList");
        });
      
        [...toggleItem].forEach((children) => {
            children.classList.remove("active");
            (children.dataset.id != index) && children.classList.remove("show_child");
        });
        item.classList.add("active");
        item.classList.toggle("show_child");
    });
});


const toggleSubItem = document.getElementsByClassName('toggleItemSub');
[...toggleSubItem].forEach((item, index) => {
    item.dataset.number = "inner_"+index;
});
;[...toggleSubItem].forEach((children, index) =>{
    children.addEventListener("click" ,function(e){
        e.stopPropagation();
        ;[...toggleSubItem].forEach(child =>{
            child.classList.remove("activeList");
            (child.dataset.number != "inner_"+index) && child.classList.remove("show_InnerChild");
        })
        children.classList.add("activeList")
        children.classList.toggle("show_InnerChild")
    })
})

