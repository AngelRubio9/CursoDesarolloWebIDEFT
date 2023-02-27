
//alert("");
var number = 33;
var number2 = 10;
var result = number - number2;
//document.write(number);
let name = "Angel ";

if(window.location.pathname.includes("practicas"))
{
	document.getElementById('demo').innerHTML =  "La suma del numero: " + number + " mas el numero: " + number2 + " es:" + (number + number2) + "<br>" ;
}

let tengoTrabajo = true;
if(window.location.pathname.includes("index"))
{
	if(tengoTrabajo)
		document.getElementById('CV').innerHTML = "Actualmente tengo trabajo, gracias por visitar mi pagina Web.";
	else
		document.getElementById('CV').innerHTML = "Estoy abierto a oportunidades laborales.";
	
	const experiences = document.getElementsByClassName("experience");
	for (var i = 0; i <experiences.length; i++)
	{
		const item = experiences[i];
		item.addEventListener("mouseenter", function (event)
		{
			event.target.style = "background-color: #999999";
		});
		item.addEventListener("mouseleave", function (event)
		{
			event.target.style = "";
		});
	}
}