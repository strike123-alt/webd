function valid(){
    let a = document.getElementById("rr1").value;
    let b = document.getElementById("rr2").value;
    let c = document.getElementById("rr3").value / 20;
   
    if(a == "" || b == "" || c == ""){
        alert("Missing values");
        return false;
    }   
    return true;
}
