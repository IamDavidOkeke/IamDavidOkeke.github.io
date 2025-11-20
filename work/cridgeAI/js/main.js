const navbtn = document.getElementById('navbtn')
const navbtn_x = document.getElementById('navbtn-x')
const mobileHeader = document.querySelector('.mobile-header')
const dropdownMenu = document.querySelector('.dropdown-menu')
const dropdown = Array.from(document.querySelectorAll('.dropdown-toggle'))

navbtn.addEventListener('click', ()=>{
    mobileHeader.classList.remove('mobile-header')
})
navbtn_x.addEventListener('click', ()=>{
    mobileHeader.classList.add('mobile-header')
})

for(let i=0; i<dropdown.length; i++){
    dropdown[i].addEventListener('click', ()=>{
        // dropdown[i].classList.toggle('show')
        // dropdownMenu.classList.toggle('show')
        dropdown[i].parentElement.classList.toggle('show')
       dropdown[i].nextElementSibling.classList.toggle('show')
    })
}