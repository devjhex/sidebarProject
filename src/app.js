/* Select the bars element the closeButton and the aside element */

let open = document.getElementById("open");
let close = document.getElementById("close");
let sidebar = document.getElementById("sidebar");

console.log(open);

open.addEventListener("click", function(){
    sidebar.classList.toggle('translate-x-0');
});

close.addEventListener("click", function(){
    sidebar.classList.remove("translate-x-0");
})

