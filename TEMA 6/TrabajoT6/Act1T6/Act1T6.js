var obj_alumno = {
  nombre: "",
  apellidos: "",
  edad: 0,
  ciudad: "",
  fullInfo: function () {
    return (
      this.nombre + " " + this.apellidos + " " + this.edad + " " + this.ciudad
    );
  },
};

var alumno1 = Object.create(obj_alumno);
var alumno2 = Object.create(obj_alumno);
var alumno3 = Object.create(obj_alumno);
var alumno4 = Object.create(obj_alumno);

alumno1.nombre = "Francisco";
alumno1.apellidos = "García Orille";
alumno1.edad = 40;
alumno1.ciudad = "Madrid";

alumno2.nombre = "Lara";
alumno2.apellidos = "De Vicente";
alumno2.edad = 48;
alumno2.ciudad = "Santander";

alumno3.nombre = "Papa";
alumno3.apellidos = "García Robledo";
alumno3.edad = 69;
alumno3.ciudad = "Oviedo";

alumno4.nombre = "Mama";
alumno4.apellidos = "Orille Nuñez";
alumno4.edad = 68;
alumno4.ciudad = "Ujo";

var alumnos = new Array(4);
alumnos[0] = alumno1;
alumnos[1] = alumno2;
alumnos[2] = alumno3;
alumnos[3] = alumno4;

var text = "<ul>";
alumnos.forEach(introduceDatos);

function introduceDatos(element) {
  text += "<li>" + element.fullInfo() + "</li>";
}

text += "</ul>";

/*

CODIGO ALTERNATIVO

var ul = document.createElement("ul");

for (var i=0;i<alumnos.length;i++){
    var li= document.createElement("li");
    li.innerHTML(alumnos[i].fullInfo();
    ul.appendChild(li);
}
document.getElementsByTagname("p")[0].apendChild(ul);
ojo porque getElemetsByTagname("etiqueta") devuelve un array.
*/

var container = document.getElementById("contenedor");
container.innerHTML=text;
