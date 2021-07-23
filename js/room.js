//room.js
function init(){
    const elP = document.querySelectorAll('p');
    let data,tagList='';

    fetch('data.json')
    .then( res => res.json())
    .then( data => callback(data));

    function callback(data){
        
        data.room.forEach(function(data){
            tagList += `<p>${data.info}</p>`;
        });
        elP.innerHTML = tagList;
        
    }

}
window.onload = init;
