const side = {
    maxSide: 350,
    initialSide: 150,
}

$('.container-box_elem').each(function (index, elem) {
    let isShown = false
    $(elem).on('click', function () {
        if (isShown) {                
            $(elem).animate({
                width: side.initialSide,
                height: side.initialSide,
                top: 0,
                right: 0
            }, 1000, 'easeOutExpo', function () {
                $(elem).css({
                    zIndex: 2
                })
                $('.modal').css({
                    zIndex: -1,
                    backgroundColor: '#fff'
                })
            })
            isShown = false
        } else if (!isShown) {
            $('.modal').css({
                zIndex: 3,
                backgroundColor: 'rgb(67, 66, 66)',
                opacity: 0.4
            })
            $(elem).css({
                zIndex: 4
            })
            $(elem).animate({
                width: side.maxSide,
                height: side.maxSide,
                top: ((window.innerHeight / 2 - side.maxSide)),
                right: -(($('.container').width() - side.maxSide) / 2) + ((side.initialSide + 4) * index)
            }, 1000, 'easeOutExpo')
            isShown = true
        }
    })
})
