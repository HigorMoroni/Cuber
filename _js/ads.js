var sorte;
	sorte=getRandom(15);
document.write ('<img src="_imagens/ads/'+parseInt(sorte)+'.gif">');
function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}