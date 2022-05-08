function valid(){

  let fname = document.getElementById('f1').value;
  let uname = document.getElementById('u1').value;
  let pname = document.getElementById('p1').value;
  let ename = document.getElementById('e1').value;
  let mname = document.getElementById('m1').value;


  let name = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let u_name = /^[a-zA-Z_0-9]{2,14}$/;
  let passch = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,16}$/;
  let emch = /^[A-za-z_]{3,}@[A-za-z]{2,}[.]{1}[A-za-z.]{2,5}$/;
  let mno = /^[6789][0-9]{9}$/;

  if(name.test(fname)){
    document.getElementById("name-error").innerHTML = "";
  }
  else{
    document.getElementById("name-error").innerHTML = "* Name is Invalid";
    return false;
  }

  if(u_name.test(uname)){
    document.getElementById("uname-error").innerHTML = "";
  }
  else{
    document.getElementById("uname-error").innerHTML = "* User-Name is Invalid";
    return false;
  }

  if(passch.test(pname)){
   document.getElementById("pass-error").innerHTML = "";
  }
  else{
    document.getElementById("pass-error").innerHTML = "* Password is Invalid";
    return false;
  }
  if(mno.test(mname)){
   document.getElementById("pass-error").innerHTML = "";
  }
  else{
    document.getElementById("pass-error").innerHTML = "* Mobile Number is Invalid";
    return false;
  }
  return true;
}

