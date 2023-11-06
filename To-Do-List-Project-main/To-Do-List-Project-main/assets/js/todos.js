var notes;
if(localStorage.getItem("savedNotes") == null || localStorage.getItem("savedNotes") == undefined){
	notes = []; //NO PREVIOUSLY SAVED NOTES, CREATING AN EMPTY ARRAY

}else{
	notes = JSON.parse(localStorage.getItem("savedNotes")); //NOTES HAVE BEEN SAVED BEFORE, LOADING THEM
}


// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
		
		notes.shift();
		console.log(notes);
		localStorage.setItem("savedNotes", JSON.stringify(notes));
		
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
		notes.push("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		localStorage.setItem("savedNotes", JSON.stringify(notes));
		
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

function loadSavedNotes(){

	if(localStorage.getItem("savedNotes") == null || localStorage.getItem("savedNotes") == undefined){
		//NO PREVIOUSLY SAVED NOTES
	
	}else{
		notes = JSON.parse(localStorage.getItem("savedNotes"));

		notes.forEach(note => {
			$("ul").append(note);
		});

	}

}