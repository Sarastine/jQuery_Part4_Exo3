$(function() {
	name = '';
	firstName = '';
	email = '';
	phoneNumber = '';
	$('#name').focusout(function(){
		name = $('#name').val();
		var regex1 = new RegExp(/[^a-zA-Z\-]/); // Pourquoi "var"?
		if (regex1.test(name)) {
			$('#name').val('');
			$('#nameError').text('N\'utilisez que des lettres et éventuellement un tiret (-)');
		} else {
			$('#nameError').text('');
			console.log('Correct');
		} 
	});
	$('#firstName').focusout(function(){
		firstName = $('#firstName').val();
		var regex2 = new RegExp(/[^a-zA-Z\-]/); // Pourquoi "var"?
		if (regex2.test(firstName)) {
			$('#firstName').val('');
			$('#firstNameError').text('N\'utilisez que des lettres et éventuellement un tiret (-)');
		} else {
			$('#firstNameError').text('');
			console.log('Correct');
		} 
	});
	$('#email').focusout(function(){
		email = $('#email').val();
		var regex3 = new RegExp(/^[a-zA-Z0-9.-_]{1,}@[[a-zA-Z0-9]{1,}.[a-zA-Z]{1,}$/); // Pourquoi "var"?
		if (regex3.test(email)) {
			$('#mailError').text('');
			console.log('Correct');
		} else {
			$('#email').val('');
			$('#mailError').text('Entrez une adresse mail valide');
		} 
	});
	$('#phoneNumber').focusout(function(){
		phoneNumber = $('#phoneNumber').val();
		var regex4 = new RegExp(/[^0-9 ]/); // Pourquoi "var"?
		if (regex4.test(phoneNumber)) {
			$('#phoneNumber').val('');
			$('#phoneError').text('N\'utilisez que des chiffres');
		} else {
			$('#phoneError').text('');
			console.log('Correct');
		} 
	});
});