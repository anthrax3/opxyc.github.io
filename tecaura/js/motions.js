document.addEventListener('DOMContentLoaded', function() {
	setTimeout(afterTwoSeconds,0);
	function afterTwoSeconds() {    
		document.getElementById('toPop').className+=" push-left"; 
	}
}, false);