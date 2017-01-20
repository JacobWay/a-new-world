(function($){
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

    function addFooterText(){
        var text = $(".addFooterText").text();
        var year = new Date().getFullYear();
        text = "&nbsp;&nbsp;" + year + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + text;
        $(".addFooterText").html(text);
    }

    $(document).ready(function(){
        toggleMenu();
        toggleFloat();
        addFooterText();
    });
})(window.jQuery)
