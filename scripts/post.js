let divelem=document.getElementById('div-post')
let elem=document.getElementById('post-text')
let elem_title=document.getElementById('title-post')
let elem_div=document.getElementById('title-div')


const save=document.querySelector("#text-edit")
const edit1=document.querySelector(".edit-btn")
var state=false
var edit=`<tr id="text-edit">edit <i class="fa-solid fa-pen-to-square"></i></tr>`
var save1=`<tr id="text-edit">save <i class="fa-solid fa-floppy-disk"></i></tr>`
// function edit(){
//        if(!state){
//         save.innerHTML=save1
//         let html=elem.innerHTML
//         divelem.innerHTML=`'<textarea class"textarea form-control" id="textarea1">'${html}'</textarea>'`
//        let textarea=document.getElementById('textarea1')
//        textarea.addEventListener('blur',function(){
//         elem.innerHTML=textarea.value

// state=true
       
//        })}else{
//           save.innerHTML=edit
//           state=false
//        }
// }
edit1.addEventListener("click",()=>{
    if(!state){
        state=true
                edit1.innerHTML=save1
                let html=elem.innerHTML
                divelem.innerHTML=`'<textarea class"textarea form-control" id="textarea0">'${html}'</textarea>'`
               let textarea=document.getElementById('textarea0')
               textarea.addEventListener('blur',function(){
                elem.innerHTML=textarea.value
        
               
               })
               let html1=elem_title.innerHTML
                elem_div.innerHTML=`'<textarea class"textarea form-control" id="textarea1">'${html1}'</textarea>'`
               let textarea1=document.getElementById('textarea1')
               textarea1.addEventListener('blur',function(){
                elem_title.innerHTML=textarea1.value})
        
            }else{
                state=false
                  edit1.innerHTML=edit
                  let html=elem.innerHTML
                  divelem.innerHTML=`'<p id="post-text">Updated: '${html}'</p>'`
                 let textarea=document.getElementById('post-text')
                 textarea.addEventListener('blur',function(){
                  elem.innerHTML=textarea.value
          
               
})
let html1=elem_title.innerHTML
                  elem_div.innerHTML=`'<h3 id="post-text1"> Updated: '${html1}'</h3>'`
                 let textarea1=document.getElementById('post-text')
                 textarea1.addEventListener('blur',function(){
                  elem_title.innerHTML=textarea1.value
          
               
})
}
})