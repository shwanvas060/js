// generate cat
// let count=0;

function generatecat(){
    //count++;
    var image = document.createElement('img');
    var div = document.getElementById("flex_cat");
    var ts = new Date().getTime();
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small&timestamp="+ts;
    /*if(count%2==0){
        image.src="static/images/cat.gif"
    }
    else{
        image.src="static/images/cat0.gif"
    }*/
    div.appendChild(image);
}
