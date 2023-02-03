
const LAMBDA_TRIGGER_API ="https://4vi0sulyi8.execute-api.us-east-1.amazonaws.com/prodStage";



let ordinalIndicator;
function setOrdinalIndicator(visitorCount){
    if (visitorCount%10 === 1) {
        ordinalIndicator='st';
    }else if(visitorCount%10 === 2){
        ordinalIndicator='nd';
    }else if(visitorCount%10 === 3){
        ordinalIndicator='rd';
    }else{
        ordinalIndicator='th';
    }
}


const request = new XMLHttpRequest();
request.addEventListener("load", reqListener);
request.open("GET", LAMBDA_TRIGGER_API);
request.send();

function reqListener(){
    if(this.readyState === XMLHttpRequest.DONE){
        console.log(this.responseText);
        var visitorCount = this.responseText;
    }
    setOrdinalIndicator(visitorCount);
    var newText ="You are the "+ visitorCount + ordinalIndicator +" visitor of my cloud resume!"
    var contentHolder = document.getElementById('visitorCounter');
    contentHolder.innerHTML = newText;
}




