/*side navigator toggling*/
$(document).ready(function(){
    $("#mySidenav").click(function(){
        $(".sideNav").toggleClass("sideNavopen");
        $(".linktext").toggleClass('linktext1');
        $(".myContainer").toggleClass("mycontainer1");
    });
});