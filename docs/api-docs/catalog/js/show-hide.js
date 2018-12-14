    function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }
	
	function toggle_text(id) {
       var f = document.getElementById(id);
       if(f.value == "Expand")
          f.value = "Close";
       else
          f.value = "Expand";
    }
