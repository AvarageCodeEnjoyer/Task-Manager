const items = document.getElementsByClassName('task')
console.log(items)
Array.from(items).forEach(item => {
  item.addEventListener('click', e => {
    let text = e.target.innerText
    console.log(text)
    item.classList.toggle('marked-off')
  
  })
});