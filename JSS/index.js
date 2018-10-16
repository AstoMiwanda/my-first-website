$(document).ready(function() {
	$("#logo").click(function() {
		alert('Astocreation Web');
	});
	$('#aMenu').click(function() {
		alert('Halaman Belum Tersedia !!');
	});
	var listServices = $('#ourServices .content');
		titleContent = $('.title-content');
		subscribe = $('#notification-subscribe .content');
		subscribeOffset = subscribe.offset().top/2;
		titleContentOffset = titleContent.offset().top/2;
		listServicesOffset = listServices.offset().top/2;
		documentList = $(document);

	documentList.on('scroll', function() {
		if(documentList.scrollTop() > (subscribeOffset + 400) && subscribe.hasClass('hidden')){ subscribe.removeClass('hidden') };
		if(documentList.scrollTop() > titleContentOffset && titleContent.hasClass('hidden')){ titleContent.fadeIn() };
		if(documentList.scrollTop() > listServicesOffset && listServices.hasClass('hidden')){ listServices.removeClass('hidden') };
	});
});