$("document").ready(function(){
    $(".addTo").hide();
    $(".showOne").show();
    $(".showTwo").show();
    $(".showThree").show();
    $(".showFour").show();
    $(".showFive").show();

    $(".showOne").click(function(){
        $(".hiddenOne").show();
        $(".showOne").hide();
        $(".minimizeOne").show();
    });
    $(".showTwo").click(function(){
        $(".hiddenTwo").show();
        $(".showTwo").hide();
        $(".minimizeTwo").show();
    });
    $(".showThree").click(function(){
        $(".hiddenThree").show();
        $(".showThree").hide();
        $(".minimizeThree").show();
    });
    $(".showFour").click(function(){
        $(".hiddenFour").show();
        $(".showFour").hide();
        $(".minimizeFour").show();
    });
    $(".showFive").click(function(){
        $(".hiddenFive").show();
        $(".showFive").hide();
        $(".minimizeFive").show();
    });
    $(".minimizeOne").click(function(){
        $(".hiddenOne").hide();
        $(".showOne").show();
        $(".minimizeOne").hide();
    });
    $(".minimizeTwo").click(function(){
        $(".hiddenTwo").hide();
        $(".showTwo").show();
        $(".minimizeTwo").hide();
    });
    $(".minimizeThree").click(function(){
        $(".hiddenThree").hide();
        $(".showThree").show();
        $(".minimizeThree").hide();
    });
    $(".minimizeFour").click(function(){
        $(".hiddenFour").hide();
        $(".showFour").show();
        $(".minimizeFour").hide();
    });
    $(".minimizeFive").click(function(){
        $(".hiddenFive").hide();
        $(".showFive").show();
        $(".minimizeFive").hide();
    });
    $("form.addTo").submit(function(event){
        event.preventDefault();
        alert("We have received your message. Thankyou for your contribution.")
    });
    $("#addTo").click(function(){
        $("form.addTo").toggle();
    });
});