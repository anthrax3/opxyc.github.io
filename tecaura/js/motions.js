document.addEventListener('DOMContentLoaded', function() {
	setTimeout(afterTwoSeconds,0);
	function afterTwoSeconds() {    
		document.getElementById('toPop').className+=" push-left"; 
	}
}, false);

function right(count){
	var curr=document.getElementById('ws-curr');
	if(curr.value>=count)
		return false;
	var prev=document.getElementById('ws-prev');
	var current=curr.value;
	var previous=prev.value;
	var next=parseInt(current)+1;
	document.getElementById('ws-slide-'+current).className="huddle-holder outdisplay";
	document.getElementById('ws-slide-'+next).className="huddle-holder indisplay";
	curr.value=next;
	prev.value=current;
}

function left(count){
	var curr=document.getElementById('ws-curr');
	if(curr.value<=count)
		return false;
	var prev=document.getElementById('ws-prev');
	var current=curr.value;
	var previous=prev.value;
	var next=parseInt(current)-1;
	document.getElementById('ws-slide-'+current).className="huddle-holder outdisplay";
	document.getElementById('ws-slide-'+next).className="huddle-holder indisplay";
	curr.value=next;
	prev.value=current;
}