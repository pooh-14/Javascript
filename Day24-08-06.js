function register(event){
    event.preventDefault();
    var name= document.getElementById("username").value;
    console.log(name,"-name")
    var number= document.getElementById("usernumber").value;
    console.log(number,"-number")
    var email= document.getElementById("useremail").value;
    console.log(email,"-email")
    var password= document.getElementById("userpassword").value;
    console.log(password,"-password")

    document.getElementById("username").value = "";
    document.getElementById("usernumber").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("userpassword").value = "";

    alert("Registered")
  
    
}