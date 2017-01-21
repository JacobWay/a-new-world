function toggleMenu(){
    $("#overlay").hover(
        function(){
            $(".float-menu").css("display", "block");
        },
        function(){
            $(".float-menu").css("display", "none");
        }
            );
}

$(document).ready(function(){
    toggleMenu();
});
