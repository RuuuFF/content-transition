const navButtons = document.querySelectorAll('.nav-links') 
const pages = document.querySelectorAll('.pages')

function remove() {
  pages.forEach(page => {
    page.classList.remove('active')
  })
}

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    remove()
    pages[index].classList.add('active')
  })
})