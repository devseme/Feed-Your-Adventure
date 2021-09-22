// var eduname=document.getElementById("name")
// var eduemail=document.getElementById("email")
var form=document.getElementById("contactform")
// var eduErrors=document.getElementById(eduerror)

// form.addEventListener("submit",(e)=>{
//     var errorName=[]
//     if(eduname.value===''||eduname.value==null){
//         errorName.push('Please enter your name')
//     }
//     if(errorName.length>0){
//         e.preventDefault()
//         eduErrors.innertext = errorName.join(",")

//     }
// })

$(document).ready(function () {
    $("form#contactform").submit(function () {
        var eduName = $("input#name").val();
        var eduEmail = $("input#email").val();
        var eduField = $("input#field").val();
        if ($("input#name").val() && $("input#email").val()) {
            alert("Hello " + eduName + " Thankyou for your subscription. You will receive a notification whenever there is an intake for "+ eduField);
        }
        else {
            alert("Please enter a valid Name and Email.");
        }
    });
}); 