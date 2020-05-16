
//Comentário de Linha
/*
  Comentário de Bloco
 */

slide1();

function slide1() {
  document.getElementById('lateral1').src = "./img/banner-1.gif";
  document.getElementById('lateral2').src = "./img/banner-3.gif";
  document.getElementById('img-1').href = "http://pudim.com.br";
  document.getElementById('img-2').href = "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6";
  setTimeout("slide2()", 3000);
}
function slide2() {
  document.getElementById('lateral1').src = "./img/banner-2.gif";
  document.getElementById('lateral2').src = "./img/banner-1.gif";
  document.getElementById('img-1').href = "https://fontawesome.com/";
  document.getElementById('img-2').href = "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/05/Alpes.jpg";
  setTimeout("slide3()", 3000);
}
function slide3() {
  document.getElementById('lateral1').src = "./img/banner-3.gif";
  document.getElementById('lateral2').src = "./img/banner-2.gif";
  document.getElementById('img-1').href = "https://unsplash.com/t/business-work";
  document.getElementById('img-2').href = "https://www.hackthebox.eu/";
  setTimeout("slide1()", 3000);
}
