let believe = document.querySelector('.believe');

window.onscroll = () =>{
    let pos = window.scrollY -800;
    believe.style.left = `$(pos)px`
}