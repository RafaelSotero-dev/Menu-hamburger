const btn = document.getElementById('btn-mobile')

function toggle(){
    const nav = document.getElementById('nav-bar')
    const header = document.getElementById('cabecalho')

    header.classList.toggle('active')
    nav.classList.toggle('active')
    nav.classList.toggle('off')

}

btn.addEventListener('click', toggle)
btn.addEventListener('click', toggle)
