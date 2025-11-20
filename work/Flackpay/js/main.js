const navbtn = document.getElementById('navbtn')
const navbtn_x = document.getElementById('navbtn-x')
const mobile_header = document.querySelector('.mobile-header')

navbtn.addEventListener('click', ()=>{
    mobile_header.classList.remove('mobile-header')
})
navbtn_x.addEventListener('click', ()=>{
    mobile_header.classList.add('mobile-header')
})