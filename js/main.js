$('#view-work').on('click', function () {
    const images = $('#images').offset().top;

    console.log(images);

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});


