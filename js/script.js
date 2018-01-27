$('.content-search-btn').click(function(){
   $('.content-search-list').toggle()
});

$('.url-btn').click(function(){
   $('.url-section').addClass("active");
   $('.delete-btn:first').hide();
   $('.content-search-list').css({'display' : '', 'none' : ''});
});

$('.trash-btn').click(function(){
   $('.url-section').removeClass("active");

});

$('.delete-btn').click(function(){
   $('.url-content').first().remove();
   $('.delete-btn:first').hide();
   $('.url-content:first').removeClass('borderClass');
});

$('.add-btn').click(function(){
	$( ".url-content" ).first().clone(true).appendTo( ".url-box-container" );
	$('.delete-btn:last').show();
	$('.url-content:last').addClass('borderClass'); 
});







