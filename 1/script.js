$('.circle').each(function(ind,elem){
    $(elem).on('click', function(){
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        let width = Math.floor(Math.random()*300);
        let height = Math.floor(Math.random()*300);
        let containerHeight = $('.container').height();
        let containerWidth = $('.container').width();
        let circleHeight = $('.circle').height();
        let circleWidth = $('.circle').width();
        let top = Math.floor(Math.random() * (containerHeight - circleHeight));
        let left = Math.floor(Math.random() * (containerWidth - circleWidth));
        $('.circle').animate({
            width: `${width}`,
            height: `${height}`,
            top: top + 'px',
            left: left + 'px'
        }, 5000, 'easeInOutBack');
        $('.circle').css('background', `rgb(${r}, ${g}, ${b})`);
    })

})