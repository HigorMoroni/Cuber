$(document).ready(function(){
	var seletorLinkAbrir = $(".jmodalabrir");
	var seletorLinkFechar = $(".jmodalfechar");
	var containerModal = $(".jmodal");

	seletorLinkAbrir.click(function(){
		containerModal.fadeToggle(0);
		return false;
	});
	seletorLinkFechar.click(function(){
		containerModal.fadeToggle(0);
		return false;
	});
});