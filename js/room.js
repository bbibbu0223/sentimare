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
});
