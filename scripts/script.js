var state= false;
function toggle(){
     if (state){
        document.getElementById("password")
        .setAttribute("type","password");
        document.getElementById("eye").style.color='black'
        state=false;
     }
     else{
        document.getElementById("password")
        .setAttribute("type","text");
        document.getElementById("eye").style.color='grey'
        state=true;
     }
    
}
function toggle1() {
    if (state){
        document.getElementById("confirm-password")
        .setAttribute("type","password");
        document.getElementById("eye1").style.color='black'
        state=false;
     }
     else{
        document.getElementById("confirm-password")
        .setAttribute("type","text");
        document.getElementById("eye1").style.color='grey'
        state=true;
     }
}
function toggle2() {
    if (state){
        document.getElementById("signin-password")
        .setAttribute("type","password");
        document.getElementById("eye2").style.color='black'
        state=false;
     }
     else{
        document.getElementById("signin-password")
        .setAttribute("type","text");
        document.getElementById("eye2").style.color='grey'
        state=true;
     }
}