$(function () {
    // 绑定事件
    $("#top-header-2").on("mouseover", function () {
        $(this).css("opacity","1");
        let slogen = $(this).find("#slogen");
        slogen.attr("src", "./images/slogen.png");
        let links = $(this).find(".top2-right a");
        let currentLink = $(this).find(".top2-right .current")[0];
        $.each(links, function (i, item) {
            if($(item)[0]==currentLink){
                $(item).css({ "color": "#FF6000", "border-bottom": "3px solid #FF6000" });
                return;
            }
            $(item).css("color", "black");
        });
    });
    $("#top-header-2").on("mouseleave", function () {
        $(this).css("opacity","0.8");
        let slogen = $(this).find("#slogen");
        slogen.attr("src", "./images/slogen_fix.png");
        let links = $(this).find(".top2-right a");
        let currentLink = $(this).find(".top2-right .current")[0];
        $.each(links, function (i, item) {
            if($(item)[0]==currentLink){
                $(item).css({ "color": "#fff", "border-bottom": "3px solid #fff" });
                return;
            }
            $(item).css("color", "white");
        });
    });
});