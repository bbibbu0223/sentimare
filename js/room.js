$(function(){
    //start

    $.ajax({
        url:'js/data.json',
        success:function(data){
            // console.log('hi');
            let tagList='';

            data.room.forEach(function(v,k){
                tagList =`<p>${v.info}</p>`;
                console.log(tagList);

                $(`.room${k+1}`).append(tagList);
            });
        
            
            

        }

    });

    $(".slider").slick({
        arrows:false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000
    });

    $(".slider2").slick({
        arrows:false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000
    });

    $(".slider3").slick({
        arrows:false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000
    });

});
