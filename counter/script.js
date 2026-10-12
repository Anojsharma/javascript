let count =0;
let cnt = document.getElementById('count')
let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let reset = document.getElementById('reset')

add.addEventListener('click',()=>{
count++;
cnt.textContent = count;
})
subtract.addEventListener('click',()=>{
count--;
cnt.textContent = count;
})
reset.addEventListener('click',()=>{
count = 0;
cnt.textContent = count;
})
