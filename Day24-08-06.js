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

    const userData = {
        username: name,
        usernumber: number,
        useremail: email,
        userpassword: password
    }

    localStorage.setItem("StudentsList", JSON.stringify(userData))

    document.getElementById("username").value = "";
    document.getElementById("usernumber").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("userpassword").value = "";

    alert("Registered")
  
    
}



// var mydata = {
//     myage:50,
//     mysurname:"pooja",
//     xyz: true,
// }
// console.log(mydata.myage)
// console.log(mydata.mysurname)
// console.log(mydata.xyz)
