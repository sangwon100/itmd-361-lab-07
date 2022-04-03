	function display(){
       var s=document.getElementById('entryinput').value;
       var x = document.getElementsByClassName("center");
       var t=x[1].textContent;
       alert(t+": "+s);
       window.addEventListener('load', init);	
	   }