window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar')
    if(this.window.scrollY > 50){
        navbar.classList.add('scrolled')
    } 
    else{
        navbar.classList.remove('scrolled')
    }
})

const navItem = document.querySelectorAll('nav-item a')
navItem.forEach(item => {
    item.addEventListener('mouseenter', ()=> {
        item.style.color = ' #4976b5;';
    });

    item.addEventListener('mouseenter', ()=>{
        item.style.color = '#fff';ls

    });
});