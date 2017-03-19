var tagAlvo = new Array('p');
var tamanhos = new Array('10px','11px','12px','13px','14px','15px','16px','17px','18px','19px','20px','21px','22px','23px','24px','25px','26px','27px','28px','29px','30px');
var tamanhoInicial = 6;

function mudaTamanho(idAlvo,acao){
	if (!document.getElementById) return
	var selecionados = null,tamanho = tamanhoInicial,i,j,tagsAlvo;
	tamanho += acao;
	if ( tamanho < 0 ) tamanho = 0;
	if ( tamanho > 20 ) tamanho = 20;
	tamanhoInicial = tamanho;
	if ( !( selecionados = document.getElementById( idAlvo ) ) ) selecionados = document.getElementsByTagName( idAlvo )[ 0 ];
 
	selecionados.style.fontSize = tamanhos[ tamanho ];
 
	for ( i = 0; i < tagAlvo.length; i++ ){
		tagsAlvo = selecionados.getElementsByTagName( tagAlvo[ i ] );
		for ( j = 0; j < tagsAlvo.length; j++ ) tagsAlvo[ j ].style.fontSize = tamanhos[ tamanho ];
	}
	return false;
}

function original(idAlvo){
if (!document.getElementById) return
	var selecionados = null,tamanho = tamanhoInicial,i,j,tagsAlvo;
	tamanho = 6;
	tamanhoInicial = tamanho;
	if ( !( selecionados = document.getElementById( idAlvo ) ) ) selecionados = document.getElementsByTagName( idAlvo )[ 0 ];
 
	selecionados.style.fontSize = tamanhos[ tamanho ];
 
	for ( i = 0; i < tagAlvo.length; i++ ){
		tagsAlvo = selecionados.getElementsByTagName( tagAlvo[ i ] );
		for ( j = 0; j < tagsAlvo.length; j++ ) tagsAlvo[ j ].style.fontSize = tamanhos[ tamanho ];
	}
	return false;
}
function mudaCor(cor) {
	var sorte = cor;
	var objDiv = document.getElementById("acess");
	if (sorte == 1) {
		objDiv.style.color = "white";
	}
	else if (sorte == 2) {
		objDiv.style.color = "black";
	}
	else if (sorte == 3) {
		objDiv.style.color = "red";
	}
	else if (sorte == 4) {
		objDiv.style.color = "yellow";
	}
	else if (sorte == 5) {
		objDiv.style.color = "orange";
	}
	else if (sorte == 6) {
		objDiv.style.color = "blue";
	}
	else if (sorte == 7) {
		objDiv.style.color = "green";
	}
}
function mudaFundo(cor) {
	var sorte = cor;
	var objDiv = document.getElementById("tudo");
	if (sorte == 1) {
		objDiv.style.background = "white";
	}
	else if (sorte == 2) {
		objDiv.style.background = "black";
	}
	else if (sorte == 3) {
		objDiv.style.background = "red";
	}
	else if (sorte == 4) {
		objDiv.style.background = "yellow";
	}
	else if (sorte == 5) {
		objDiv.style.background = "orange";
	}
	else if (sorte == 6) {
		objDiv.style.background = "#15c3bc";
	}
	else if (sorte == 7) {
		objDiv.style.background = "green";
	}
}