let screen=document.getElementById('screen');
let setflag;
buttons = document.querySelectorAll('button');
let screenValue = ' ';
for(item of buttons){
    item.addEventListener('click',(e)=>{
       
        buttonText=e.target.innerText;
        // console.log('Button text is ', buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            console.log('Updated button text ',buttonText);
            screenValue += buttonText;
           screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue = " ";
            screen.value=screenValue;
            
        }
        else if(buttonText=='='){
            let str=screenValue;
            console.log(screenValue);
            screen.value=eval(screenValue);
            // screen.value="";
            setflag=true;
        }
        else{
            if(setflag==true){
                screenValue=buttonText;
                screen.value=screenValue;
                setflag=false;
            }
            else{
            screenValue += buttonText;
            screen.value = screenValue;
            }
        }
    })
}
