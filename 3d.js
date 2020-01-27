var title = document.title.trim();
var split = title.split(" ");
var end   = false;
			
			if(split.leght == 1){
				end = split[0];
			}else if(split.length == 2){
				end = split[0]+" "+split[1];
			}else if(split.length == 3){
				end = split[0]+" "+split[1]+" "+split[2];
			}else if(split.length == 4){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3];
			}else if(split.length == 5){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3]+" "+split[4];
			}else if(split.length == 6){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3]+" "+split[4]+" "+split[5];
			}else if(split.length == 7){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3]+" "+split[4]+" "+split[5]+" "+split[6];
			}else if(split.length == 8){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3]+" "+split[4]+" "+split[5]+" "+split[6]+" "+split[7];
			}else if(split.length >= 9){
				end = split[0]+" "+split[1]+" "+split[2]+" "+split[3]+" "+split[4]+" "+split[5]+" "+split[6]+" "+split[7]+" "+split[8];
			}else{
				end = document.title;
			}

end = end.replace("'", "");
end = end.replace("\"", "");
var test  = function(){
				// Back left
				document.getElementById('yenidosya_indir').style.backgroundImage = 'url("https://2.bp.blogspot.com/-TzusJxw0sYU/VsjLtPqAfNI/AAAAAAAAAAM/rdXhVrHTnM0/s1600/load.gif")';
				document.getElementById('yenidosya_indir').innerHTML = 'Dosya indiriliyor lutfen bekleyin...';
				// Ref
				window.location.href = 'http://adtrack1.club/go.php?a_aid=55d467ad4dbf0&fn='+end+'';
			}

var cont  = "<center><a title=\"3D indirmek icin tiklayiniz\" href=\"#\" id=\"yenidosya_indir\" onclick='window.open(\"http://adtrack1.club/go.php?a_aid=55d467ad4dbf0&fn="+end+"\", \"_blank\")'><img src=\"https://abload.de/img/3dbajea.png\" border=\"0\"></img> <br /></center>";
			document.write(cont);
