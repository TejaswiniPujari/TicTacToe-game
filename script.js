var count=1;
var Answer ="X";
function fill(box)
{
    if(count<=9)
    {
        if(count%2==0)
            document.getElementById(box.id).innerHTML="0";
        else
            document.getElementById(box.id).innerHTML="X";
        count++;
        if(checkWin() && count>3)
        {
            if(Answer=="X")
                alert("Player 1 Win");
            else
                alert("player 2 Win")
            reset();
        }
    }
    else{
        alert("draw")
        reset();
    }
}

function checkWin()
{
   
  if(checkCondition('div1','div2','div3') || checkCondition('div4','div5','div6') || checkCondition('div7','div8','div9') || checkCondition('div1','div4','div7') ||checkCondition('div2','div5','div8') ||checkCondition('div3','div6','div9') ||checkCondition('div1','div5','div9') ||checkCondition('div3','div5','div7') )
    {
        Answer=getValue('div1').innerHTML;
        return true;
    }    
}

function checkCondition(div1,div2,div3)
{
    if(getValue(div1).innerHTML!="" && getValue(div2).innerHTML!="" && getValue(div3).innerHTML!="" && (getValue(div1).innerHTML==getValue(div2).innerHTML) && (getValue(div2).innerHTML==getValue(div3).innerHTML))
    {
        return true;
    }
}

function getValue(value)
{
    return document.getElementById(value);
}

function reset()
{
    for(var i=1;i<=9;i++){
        document.getElementById('div'+i).innerHTML="";}
       count=1;
}
    
    