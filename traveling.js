Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
     e.addEventListener('keyup',(el)=>{
        if(e.value.length>0){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(180deg)";
        }else{
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(0deg)";
        }
     })
})

const menu=document.getElementsByClassName('bi-three-dots')[0];
const menu_bx=document.getElementById('menu-1');
menu.addEventListener("click",()=>{
    menu_bx.classList.toggle('ul_active');

})



