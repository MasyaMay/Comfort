$('form').submit(function(event) {
	event.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		alert("Сообщение успешно отправлено");
		$("form").trigger("reset");
	});
	return false;
});

$(function(){
  $("#phone").mask("+7 (999) 999 - 99 - 99");
});
$(function(){
  $("#phone-main").mask("+7 (999) 999 - 99 - 99");
});