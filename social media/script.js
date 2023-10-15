const socialicon=document.querySelector('.container');

setInterval(()=>{
const firsticon=socialicon.firstElementChild
firsticon.classList.add('fade-out')
const thirdchild=socialicon.children[3]
thirdchild.classList.add('light')
thirdchild.previousElementSibling.classList.remove('light')
setTimeout(()=>{
    socialicon.removeChild(firsticon)
    socialicon.append(firsticon)
    setTimeout(()=>{
        firsticon.classList.remove('fade-out')
    },500)
},500)



},3000)