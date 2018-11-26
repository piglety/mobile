/***********************************/
/**************	Modal **************/
/***********************************/
$(document).on("click","a",function(event){
	if ($(this).attr("target")=="modal"){
		scrollTopBody = $(window).scrollTop();
		$("body").css("top", -scrollTopBody);
		
		var url = $(this).attr("href");
		
		if (!$(this).data("size")) $(this).data("size", "lg");
		$("#modal .modal-dialog").removeClass("modal-lg modal-md modal-sm").addClass("modal-" + $(this).data("size"));
		
		$('#modal').modal();
		/*if ($(this).data("mode")=="iframe") $("#modal div.modal-body").html("<iframe src='" + url + "' style='width:100%; height:520px' border='0' frameborder='0'></iframe>");
		else*/ $('#modal .modal-body>div').load(url, function(){
			setTimeout(function () {
				myScroll = new IScroll('#wrapper', { mouseWheel: true, scrollbars: true });	
			}, 500);
		});
		$('#modal .modal-header h4').html($(this).data("label"));
		if (typeof $(this).data("label")!="undefined") $('#modal .modal_tit').html($(this).data("label"));
		event.preventDefault();
		return false;
	}
});

$(window).on('shown.bs.modal', function(){
   blockTouchmove = true;
});
$(window).on('hidden.bs.modal', function(){ 
   blockTouchmove = false;
   $("body").scrollTop(scrollTopBody);
	myScroll.destroy();
});

$(document).on("click",".modal-close",function(event){
	$('#modal').modal('hide');
});
