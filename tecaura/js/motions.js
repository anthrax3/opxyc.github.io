document.addEventListener('DOMContentLoaded', function() {
	setTimeout(afterTwoSeconds,0);
	function afterTwoSeconds() {    
		document.getElementById('toPop').className+=" push-left"; 
	}
}, false);

function down(count,ev){
	var curr=document.getElementById(ev+'-curr');
	if(curr.value>=count)
		return false;
	var prev=document.getElementById(ev+'-prev');
	var current=curr.value;
	var previous=prev.value;
	var next=parseInt(current)+1;
	document.getElementById(ev+'-slide-'+current).className="huddle-holder outdisplay";
	document.getElementById(ev+'-slide-'+next).className="huddle-holder indisplay";
    document.getElementById(ev+'-button-up').style.border="1px solid #e0e0e0";
    if(next==count)
        document.getElementById(ev+'-button-down').style.border="1px solid rgba(255,255,255,0.2)";
	curr.value=next;
	prev.value=current;
}

function up(count,ev){
	var curr=document.getElementById(ev+'-curr');
	if(curr.value<=count)
		return false;
	var prev=document.getElementById(ev+'-prev');
	var current=curr.value;
	var previous=prev.value;
	var next=parseInt(current)-1;
	document.getElementById(ev+'-slide-'+current).className="huddle-holder outdisplay";
	document.getElementById(ev+'-slide-'+next).className="huddle-holder indisplay";
    document.getElementById(ev+'-button-down').style.border="1px solid #e0e0e0";
    if(next==0)
        document.getElementById(ev+'-button-up').style.border="1px solid rgba(255,255,255,0.2)";
	curr.value=next;
	prev.value=current;
}

function changeDayTo(day){
    for(var i=1;i<=3;i++){
        if(i==day){
            document.getElementById('trigger-'+i).className="heading-schedule selected";
            document.getElementById('day-'+i).className="on";
        }
        else{
            document.getElementById('trigger-'+i).className="heading-schedule";
            document.getElementById('day-'+i).className="off";
        }
    }
    
}
function changePlaceTo(day,place){
    for(var i=1;i<=3;i++){
        if(i==place){
            document.getElementById('place-trigger-'+day+'-'+i).className="each-place-chosen";
            document.getElementById('place-'+day+'-'+i).className="on";
        }
        else{
            document.getElementById('place-trigger-'+day+'-'+i).className="each-place";
            document.getElementById('place-'+day+'-'+i).className="off";
        }
    }
}