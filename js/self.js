(function($){
    function sayHiInConsole(){
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("Welcom aboard if you open the developer console!");
        console.log("你好，朋友，来自console的招呼");
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    }

    function addFooterText(){
        var text = $(".addFooterText").text();
        var year = new Date().getFullYear();
        text = "&nbsp;&nbsp;" + year + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + text;
        $(".addFooterText").html(text);
    }

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
        sayHiInConsole();
        addFooterText();
        toggleMenu();
        toggleFloat();
    });
})(window.jQuery)
