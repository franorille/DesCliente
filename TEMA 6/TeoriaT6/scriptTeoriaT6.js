var student = {
  name: "Alumno1",
  surname: "Surname1",
  age: 26,
  city: "Madrid",
  fullinfo: function () {
    return this.name + " " + this.surname + " " + this.age + " " + this.city;
  },
};
function loadStudent() {
  var div = document.getElementById("container");
  div.innerHTML=student.fullinfo();
}
