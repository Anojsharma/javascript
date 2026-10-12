let cnt = document.getElementById('count')
let text = document.getElementById('text')

text.addEventListener('input',()=>{
    const length = text.value.length
    cnt.textContent = length
})