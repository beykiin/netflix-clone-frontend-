
const accr=document.getElementsByClassName("accordion")
for(let i=0;i<accr.length;i++){
    accr[i].addEventListener("click",function(){
        this.classList.toggle("active")
        let panel=this.nextElementSibling
        if(panel.style.maxHeight){
            panel.style.maxHeight=null
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+"px"
        }
    })
}
