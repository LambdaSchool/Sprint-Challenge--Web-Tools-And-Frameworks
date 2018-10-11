
let className = document.querySelector('.activeDropdown');


document.getElementById('dropdown').addEventListener('mouseover',()=>{
console.log(className);

className.classList.toggle("not-active-dropdown");
})
