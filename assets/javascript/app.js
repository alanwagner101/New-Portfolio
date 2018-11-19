$(document).ready(function() {

    $("#phone").on("click", function() {
        var text = $("#phone").html();

        var tempElement = $("<input>").val(text).appendTo('body').select();
        console.log(tempElement)
        document.execCommand("copy");
        tempElement.remove();

        alert("Phone Number Has Been Copied");
    })

    $("#email").on("click", function() {
        var text = $("#email").html();

        var tempElement = $("<input>").val(text).appendTo('body').select();
        console.log(tempElement)
        document.execCommand("copy");
        tempElement.remove();

        alert("Email Has Been Copied");
    })

    $("#project1").on("click", function() {
        
    })

})

