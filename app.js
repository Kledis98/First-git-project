const btnlikes =document.querySelector('button')
const num= document.querySelector('span')

btnlikes.addEventListener('click', function(){
    num.innerText = Number(num.innerText)+1
})