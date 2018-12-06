(function(){
    $('#m-menu--burger').on('click', function(){
        $(this).toggleClass('menu-open');
        $('header').toggleClass('menu-open');
        $('.m-menu--mobile--bg').toggleClass('menu-open');
    });

    $('.m-menu--mobile--bg').on('click', function(){
        $(this).removeClass('menu-open');
        $('header').removeClass('menu-open');
        $('#m-menu--burger').removeClass('menu-open');
    });
})();

(function(){
    $('#o-hero--home').vide('http://localhost/movon/assets/video/movon.mp4', {
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%',
        posterType: 'none',
        bgColor: '#000',
        resizing: true, 
    });
})();

(function(){
      var el = document.getElementById('o-hero--home');
			if(el !== null){
          var words;
          if(el.classList.contains('english')){
            words = new Array("to feel it?","to live it?","to enjoy it?");
          }else if(el.classList.contains('spanish')){
            words = new Array("sentirlo?","vivirlo?","disfrutarlo?");
          }

          var sortWords = words.sort(function(a, b){return 0.5 - Math.random()});
          var catchWord = document.getElementById("catch");
          goText(0);
      }


			function showText(word, text, posLetra, posPalabra){
				text += word[posLetra];
				catchWord.innerHTML = text;
				posLetra++;

				if(posLetra<word.length){	
					setTimeout(function(){showText(word,text,posLetra,posPalabra);},170);
				}else{
					posPalabra++;
					if(posPalabra == sortWords.length){posPalabra = 0;};
					setTimeout(function(){goText(posPalabra);},1500);
				}
			}

			function goText(posPalabra){
				var word = sortWords[posPalabra].split("");
				var j = 0;
				var text = "";
				setTimeout(function(){showText(word,text,j,posPalabra);},700);
			}
})();

(function(){
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
    var map = L.map('map').setView([41.40332,2.18152], 17).addLayer(osm);
    L.marker([41.40332,2.18152])
        .addTo(map)
        .bindPopup('Movon')
        .openPopup();
})();