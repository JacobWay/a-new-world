function toggleMenu(){
    $("#logo").hover(
        function(){
            $(".float-menu").css("visibility", "visible");
        },
        function(){
            $(".float-menu").css("visibility", "hidden");
        }
            );
}

function toggleFloat(){
    $(".float-menu").hover(
        function(){
            $(".float-menu").css("visibility", "visible");
        },
        function(){
            $(".float-menu").css("visibility", "hidden");
        }
            );
}

$(document).ready(function(){
    toggleMenu();
    toggleFloat();
});
