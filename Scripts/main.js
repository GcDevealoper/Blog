
	
	let inicio = document.getElementById('Inicio');
	let comida = document.getElementById('Comida');
	let features = document.getElementById('Caracteristicas');
	let histori = document.getElementById('Historia');
	const MainCard = document.getElementById('MainCard')
	let Status = "Index";
	let comidaBtn = document.querySelector('.Food');
	let indexBtn = document.querySelector('.Index');
	let featuresBtn = document.querySelector('.Carac');
	let historiBtn = document.querySelector('.Histori');

	const IndexInfo = `<div id="Inicio">
		<i class="fa-solid fa-microchip" id="FirstLogo"></i>
		<h2>Dispositivos Semiconductores </h2>
		<p><b style="color:rgb(85, 184, 255);">Los dispositivos semiconductores</b> son componentes electrónicos que están diseñados y fabricados utilizando materiales semiconductores, como el silicio o el germanio. Estos materiales tienen la propiedad única de poder conducir electricidad de manera controlada, es decir, pueden actuar como conductores o como aislantes dependiendo de las condiciones en las que se encuentren.</p>
		<p><b style="color:rgb(85, 184, 255);">Los dispositivos semiconductores</b> son fundamentales en la industria electrónica, ya que forman la base de una amplia gama de dispositivos y sistemas electrónicos modernos. Algunos ejemplos comunes de dispositivos semiconductores incluyen los diodos, los transistores y los circuitos integrados.
		Los diodos son dispositivos que permiten el flujo de corriente eléctrica en una sola dirección, bloqueando la corriente en la dirección opuesta. Son utilizados en muchas aplicaciones, como rectificadores de corriente en fuentes de alimentación y en circuitos de protección contra sobretensiones.</p>
		<img src="Media/semi1.jpg" class="RefImage">
		<p><b style="color:rgb(85, 184, 255);">Los transistores son dispositivos que amplifican o controlan el flujo de corriente eléctrica.</b> Son esenciales en la construcción de circuitos lógicos y amplificadores de señal. Hay diferentes tipos de transistores, como los transistores bipolares y los transistores de efecto de campo (FET), que se utilizan en diversas aplicaciones electrónicas.

		<br><br>Los circuitos integrados son dispositivos que contienen múltiples componentes electrónicos, como transistores, resistencias y condensadores, integrados en un solo chip. Estos chips pueden contener miles o incluso millones de componentes y se utilizan en una amplia variedad de dispositivos electrónicos, desde computadoras y teléfonos móviles hasta electrodomésticos y sistemas de comunicación.</p>

	</div>`

  const HistoryInfo =`<div id="Historia">
       <i class="fa-solid fa-clipboard Logo"></i>
	   <h3>La Historia de los Semiconductores</h3>
	   <p>
	   La historia de los semiconductores es una de las más fascinantes en el campo de la tecnología y ha revolucionado la forma en que vivimos y nos comunicamos en la actualidad.<br><br>	   
	   Todo comenzó a finales del siglo XIX, cuando científicos como Thomas Edison y Nikola Tesla estaban experimentando con electricidad y descubrieron que ciertos materiales, como el silicio y el germanio, tenían propiedades eléctricas únicas. Estos materiales, conocidos como semiconductores, tenían la capacidad de conducir la electricidad de manera intermedia entre los conductores (como el cobre) y los aislantes (como el vidrio).<br><br>
	   <img src="../Media/semi5.avif" style="width: 100%;"><br><br>
	   Sin embargo, no fue hasta la década de 1940 cuando los semiconductores comenzaron a ser utilizados en aplicaciones prácticas. Durante la Segunda Guerra Mundial, los científicos investigaban cómo utilizar semiconductores para mejorar las comunicaciones militares. Fue entonces cuando se desarrollaron los primeros dispositivos electrónicos basados en semiconductores, como los diodos y los transistores.<br><br>
	   <img src="../Media/semi6.png" style="width: 100%;"><br><br>
	   El transistor, inventado en 1947 por John Bardeen, Walter Brattain y William Shockley en los laboratorios Bell, fue un avance revolucionario en la industria electrónica. Reemplazó a las válvulas de vacío utilizadas hasta ese momento, ya que era más pequeño, más confiable y consumía menos energía. Esto permitió la miniaturización de los dispositivos electrónicos, lo que a su vez condujo al desarrollo de la electrónica portátil, como las radios transistorizadas y los primeros ordenadores.<br>br>
	   <img src="../Media/semi7.jpg" style="width: 100%;"><br><br>
	   En la década de 1960, se introdujo otro avance importante en la industria de los semiconductores: el circuito integrado. Jack Kilby de Texas Instruments y Robert Noyce de Fairchild Semiconductor desarrollaron de forma independiente el concepto de integrar múltiples transistores en un solo chip de silicio. Esto permitió la fabricación masiva de dispositivos electrónicos más complejos y a un menor costo.<br><br>
	   A partir de entonces, la industria de los semiconductores ha experimentado un crecimiento exponencial. Los avances en la tecnología han permitido la fabricación de chips cada vez más pequeños y potentes, lo que ha impulsado el desarrollo de computadoras más rápidas, teléfonos inteligentes, dispositivos médicos, automóviles eléctricos y muchas otras innovaciones tecnológicas.<br><br>
	   <img src="../Media/semi3.jpeg" style="width: 100%;"><br><br>
	   Hoy en día, los semiconductores son una parte integral de nuestra vida cotidiana y su importancia solo continúa creciendo. La historia de los semiconductores es un claro ejemplo de cómo la curiosidad científica y la búsqueda de soluciones prácticas pueden dar lugar a descubrimientos que transforman el mundo.<br><br>
	   </p>
	 </div>`

  const CaracteristicasInfo = `<div id="Caracteristicas">
		

  <i class="fa-solid fa-box-archive Logo"></i>
<h3>Características de los Semiconductores</h3>
<p>Las características de los semiconductores son las siguientes:<br><br>

<b style="color:rgb(85, 184, 255)">- Conductividad eléctrica intermedia:</b> Los semiconductores tienen una conductividad eléctrica mayor que los aislantes pero menor que los conductores metálicos. Esto significa que pueden conducir la electricidad bajo ciertas condiciones, pero no de manera tan eficiente como los metales.<br><br>
<b style="color:rgb(85, 184, 255)">- Banda de energía prohibida:</b> Los semiconductores tienen una banda de energía prohibida o brecha de energía entre su banda de valencia y su banda de conducción. Esta brecha determina la cantidad de energía necesaria para que los electrones salten de la banda de valencia a la banda de conducción y, por lo tanto, influye en su capacidad para conducir la electricidad.<br><br>
<b style="color:rgb(85, 184, 255)">- Sensibilidad a la temperatura:</b> La conductividad eléctrica de los semiconductores varía con la temperatura. A medida que la temperatura aumenta, la conductividad también aumenta debido al aumento en la energía térmica disponible para excitar los electrones.<br><br>
<b style="color:rgb(85, 184, 255)">- Dopaje:</b> Los semiconductores se pueden dopar, es decir, introducir impurezas controladas en su estructura cristalina para modificar sus propiedades eléctricas. El dopaje con impurezas tipo P (donadoras de huecos) o tipo N (donadoras de electrones) permite crear regiones con exceso o defecto de portadores de carga, lo que es fundamental para la fabricación de dispositivos electrónicos como diodos y transistores.<br><br>
<b style="color:rgb(85, 184, 255)">- Comportamiento no lineal:</b> Los semiconductores exhiben un comportamiento no lineal en su respuesta a la corriente eléctrica y el voltaje aplicado. Esto se debe a su estructura cristalina y a las interacciones entre los electrones en la banda de valencia y la banda de conducción. <br><br>
<b style="color:rgb(85, 184, 255)">- Fotosensibilidad:</b> Los semiconductores pueden generar electricidad cuando se exponen a la luz, ya que los fotones pueden excitar los electrones en la banda de valencia a la banda de conducción. Esto es la base del funcionamiento de dispositivos como las células solares.<br><br>

En resumen, las características clave de los semiconductores son su conductividad eléctrica intermedia, su banda de energía prohibida, su sensibilidad a la temperatura, su capacidad de dopaje, su comportamiento no lineal y su fotosensibilidad. Estas características son fundamentales para su aplicación en dispositivos electrónicos y tecnología moderna.
</p>
	 </div>`

  const ComidaInfo = `<div id="Comida">		
  <i class="fa-solid fa-clipboard-list Logo"></i>
  <h3>¿Que tipos de Semiconductores existen?</h3> 
  <p>
  Existen dos tipos principales de semiconductores:<br>
  los semiconductores intrínsecos y los semiconductores extrínsecos.<br><br>

  Los semiconductores intrínsecos son aquellos que están compuestos por un solo tipo de material, como el silicio puro (Si) o el germanio puro (Ge). Estos materiales tienen una estructura cristalina en la que los átomos están dispuestos de manera ordenada. Los electrones en la banda de valencia están fuertemente unidos a los átomos y no pueden moverse fácilmente. Sin embargo, a temperaturas más altas, algunos electrones pueden adquirir suficiente energía para saltar a la banda de conducción, creando así portadores de carga libres.<br><br>
  Los semiconductores extrínsecos son aquellos que han sido dopados con impurezas para alterar sus propiedades eléctricas. La dopación consiste en agregar átomos de otro elemento a la estructura cristalina del semiconductor. Dependiendo del tipo de impureza agregada, se pueden obtener dos tipos de semiconductores extrínsecos: los tipo n y los tipo p.<br><br>
  En un semiconductor tipo n, se agrega una impureza con átomos que tienen más electrones en su capa de valencia que el semiconductor original. Estos átomos adicionales liberan electrones adicionales a la banda de conducción, lo que aumenta la cantidad de portadores de carga negativos (electrones) en el semiconductor.<br><br>
  En un semiconductor tipo p, se agrega una impureza con átomos que tienen menos electrones en su capa de valencia que el semiconductor original. Estos átomos "faltantes" crean huecos en la banda de valencia, que pueden ser ocupados por electrones de la banda de conducción. Esto crea portadores de carga positivos (huecos) en el semiconductor.<br><br>
  La combinación de semiconductores tipo n y tipo p es fundamental para la construcción de dispositivos electrónicos como los diodos y los transistores. Estos dispositivos se basan en la interacción entre los portadores de carga negativos y positivos para controlar el flujo de corriente eléctrica.<br><br>
  <img src="../Media/semi8.png" style="width: 100%;background-color:#fff;"><br><br>
  </p>		
  
  </div>`

  const Links = `
  <div class="Links">
    <a class="Abutton Carac" href="#Top">Caracteristicas</a>
    <a class="Abutton Histori" href="#Top">Historia</a>
    <a class="Abutton Food" href="#Top">Tipos de Semiconductores</a>
  </div>`

  const Links2 = `<div class="Links"><a class="Abutton Index" id="ReturnIndex" href="#Top">Volver al Inicio</a></div>`

MainCard.insertAdjacentHTML("afterbegin", IndexInfo);
