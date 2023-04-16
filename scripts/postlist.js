var state=true
function background(id){
    if(state){
        document.getElementById(id).style.boxShadow='5px 5px 10px 0 purple'
        state=false;
    }
    else{
        document.getElementById(id).style.boxShadow=''
        state=true;
    }

}


        

    
function sendid(Id){
  
 
 
    document.getElementById(Id).innerHTML = '';
 
} 