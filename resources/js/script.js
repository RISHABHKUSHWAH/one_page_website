$(document).ready(function(){

    $(".about-section").waypoint(function(direction){
        if(direction=="down"){
        $("nav").addClass('sticku-nav');
    }
       else{
        $("nav").removeClass('sticku-nav');
    }
    });

    $(".about-section").waypoint(function(direction){
        if(direction=="down"){
        $("nav").addClass('sticku-nav');
    }
       else{
        $("nav").removeClass('sticku-nav');
    }
    });
});
