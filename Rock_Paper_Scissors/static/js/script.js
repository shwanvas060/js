//rps
function rpsgame(yourimg){
    console.log(yourimg.id); 
    var me, bot;
    me=yourimg.id;
    bot=numberToChoice(randtorpsint());
    console.log('computer Choice:', bot);
    results=winner(me,bot);
    console.log(results);
    message=finalmessage(results);
    frontend(yourimg.id,bot,message);



}
function randtorpsint(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return['rock','paper','Scissors'][number]
}
function winner(your, bot){
    var rps={'rock':{'Scissors':1,'rock':0.5,'paper':0},
             'paper':{'rock':1,'paper':0.5,'Scissors':0},
             'Scissors':{'paper':1,'Scissors':0.5,'rock':0}}
    var score = rps[your][bot];
    var comp = rps[bot][your];
    return [score, comp];        
}
function finalmessage([you, bot]){
    console.log(you);
    if(you === 0){
        return{'message': 'You lost!', 'color': 'red'}
    }else if(you === 0.5){
        return{'message': 'You tied!', 'color': 'yellow'}
    }else{
        return {'message': 'You Won!', 'color': 'green'}
    }
    }
function frontend(humanImageChoice, botImageChoice,finalMessage){
    var imgdb={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'Scissors':document.getElementById('Scissors').src,
    }
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('Scissors').remove()
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var refresh = document.createElement('div');
    humanDiv.innerHTML = "<img src='"+imgdb[humanImageChoice] + "' width=150 height=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 223, 1);' >"
    messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+"; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='"+imgdb[botImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'><br>"
    refresh.innerHTML = "<br/><a href='javascript:location.reload(true)'><img src='http://www.clker.com/cliparts/c/8/F/7/z/H/re-try-md.png' width=150 height=150/></a>"
    document.getElementById('flex_rps').appendChild(humanDiv);
    document.getElementById('flex_rps').appendChild(messageDiv);
    document.getElementById('flex_rps').appendChild(botDiv);
    document.getElementById('flex_rps').appendChild(refresh);



}
