$(document).ready(function() {



	//event listener for form submit

	$('.form').on ('submit', function(event) {
	event.preventDefault();

	//grab the value from the field

	var value = $("#item").val()

	//generate template for new item
	var newitem = '<li><input type="checkbox" id="Milk"> <label for="Milk">' + value + '</label> <i class="fa fa-ban"></i></li>'
	  

	//add it to the list

	$('.listitems').append(newitem);

	 $('#item').val('');
	

});

	// remove from form after submit
	

	





//removing an item

//add event listener for clicking on the delete icon
	$('.listitems').on('click', '.fa-ban', function() {


	

//remove that item from the list
	$(this).closest('li').remove();

})



	


});


