$(document).ready(function () {
    let divWidth = $('#sliderBoard').width();
    let imgCount = $('#content li').length;
    // alert(imgCount)

    $('#content').width(divWidth * imgCount);
    $('#content li').width(divWidth);

    for (let i = 0; i < imgCount; i++) {
        $('#contentButton').append('<li></li>');
    }
    $('#contentButton li:nth-child(1)').addClass('clickMe');

    let index;
    $('#contentButton li').click(function () {
        index = $(this).index();

        $('#content').animate({
            left: divWidth * index * -1,
        });

        $(this).addClass('clickMe');
        $('#contentButton li').not(this).removeClass('clickMe');
    });

});