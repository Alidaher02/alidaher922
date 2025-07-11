const btn =document.getElementById('menu-btn')
const nav =document.getElementById('menu')
const close= document.getElementById('nav-close')

close.addEventListener('click', () => {
    nav.classList.add('hidden')
})

btn.addEventListener('click', () => {
    nav.classList.remove('hidden')
})
