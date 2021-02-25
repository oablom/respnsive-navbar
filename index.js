const hamburger = document.getElementsByClassName('navbar-hamburger')[0]
const navbar = document.getElementsByClassName('navbar')[0]

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active')
}

)