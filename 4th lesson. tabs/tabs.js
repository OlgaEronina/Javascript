$(function () {
    $('#button1').on('click', function () {
        $('#firstTab').show();
        $('#secondTab').hide();
        $('#thirdTab').hide();
        $('#fourthTab').hide()
    });

    $('#button2').on('click', function () {
        $('#firstTab').hide();
        $('#secondTab').show();
        $('#thirdTab').hide();
        $('#fourthTab').hide()
    });

    $('#button3').on('click', function () {
        $('#firstTab').hide();
        $('#secondTab').hide();
        $('#thirdTab').show();
        $('#fourthTab').hide()
    });

    $('#button4').on('click', function () {
        $('#firstTab').hide();
        $('#secondTab').hide();
        $('#thirdTab').hide();
        $('#fourthTab').show()
    });

});
