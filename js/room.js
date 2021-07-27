$(function(){
    //start

    $.ajax({
        url:'js/data.json',
        success:function(data){
            // console.log('hi');
            let tagList='',idx=0;

            data.room.forEach(function(v){
                tagList +=`<p>${v.info[idx]}</p>`;
                console.log(tagList);
            });

            $('.room1 p, .room2 p, .room3 p').html(tagList);

        }
    });
});
