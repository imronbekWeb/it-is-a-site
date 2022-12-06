document.addEventListener("DOMContentLoaded", function (e) {
    setInterval(function () {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var clock = hours + ":" + minutes + ":" + seconds;
        document.getElementById("clock").innerHTML = clock;
    });
    const turnon = document.getElementById("TURNON");
    
 turnon.addEventListener("click", function(e) {
    $('.button_js').toggleClass("_active");
 });
});
