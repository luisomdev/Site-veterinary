document.addEventListener('DOMContentLoaded', ()=>{
    const theme = localStorage.getItem('theme')
    const button = document.getElementById('theme-switch')
    button.addEventListener('click', ()=>{
        if(theme === 'nord'){
            console.log(button.value)
            localStorage.setItem('theme', 'forest')
        } 
    })
    console.log(theme)
})