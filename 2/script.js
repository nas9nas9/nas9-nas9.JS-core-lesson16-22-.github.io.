setInterval(() => {
    const getRandomColor = function () {
    const data = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += data[Math.floor(Math.random() * 16)]
    }
        return color
    }
    // let width = Math.floor(Math.random()*300);      
    // let height = Math.floor(Math.random()*300);
    let containerHeight = $('.container').height();
    let containerWidth = $('.container').width();
    let circleHeight = $('.circle').height();
    let circleWidth = $('.circle').width();
    let top = Math.floor(Math.random() * (containerHeight - circleHeight));
    let left = Math.floor(Math.random() * (containerWidth - circleWidth));
    $('.circle').animate({
        // width: `${width}`,
        // height: `${height}`,
        top: top + 'px',
        left: left + 'px',
    }, 2000, 'easeInOutBack');
    $('.circle').css({
        background: `${getRandomColor()}`,
        boxShadow: '0px 0px 40px'  + getRandomColor(),
        border: '5px solid' + getRandomColor(),
    })
}, 1000)