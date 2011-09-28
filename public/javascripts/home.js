(function( $, undefined){
    var playeras = {
        "images/cuadro-playera1.png" : "images/cuadro-playera1-over.png",
        "images/cuadro-playera2.png" : "images/cuadro-playera2-over.png",
        "images/cuadro-playera3.png" : "images/cuadro-playera3-over.png"
    }

    var playerasover = {
        "images/cuadro-playera1-over.png" : "images/cuadro-playera1.png",
        "images/cuadro-playera2-over.png" : "images/cuadro-playera2.png",
        "images/cuadro-playera3-over.png" : "images/cuadro-playera3.png"
    }

    var loadOvers = function(){
        $("img#playeras").mouseover(function(){
            $(this).attr("src", playeras[$(this).attr("src")]);
        });
        
        $("img#playeras").mouseleave(function(){
            $(this).attr("src", playerasover[$(this).attr("src")]);
        });
    }

    var initialize = function(){
        loadOvers();
    }

    $(document).ready(initialize);
})(jQuery);
