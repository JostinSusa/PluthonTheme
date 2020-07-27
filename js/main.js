// $(document).ready(function(){

    $('#toggle').click(function(){
        $('#menu').slideToggle(300);
    });
    $('#menu li a').click(function(){
        $('#menu li a').removeClass('active');
        $(this).addClass('active');
    });
// });