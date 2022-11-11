const datos = {
  nombre: "Lenny",
  edad: 13, // Si tengo 13 años y quiero a futuro ser programador y vivir de eso y espero que estos cursos sean de ayuda (PD: Ya tenia fundamentos en html , css y un poco de python)
  desarrollador: false,
  fecha: new Date("22 january 2009"),
  libroFav: {
    title: "El fin del mundo",
    autor: "Fabrice Colin",
    fecha: new Date("4 april 2018"),
    url: "https://www.casadellibro.com.co",
  },
};

if (datos.desarrollador == false) {
  var frase = "no soy desarrollador pero me encantaria serlo";
} else if (datos.desarrollador == true) {
  var frase = "si soy desarrollador";
}

console.log(
  `Mi nombre es: ${datos["nombre"]} , Tengo ${datos["edad"]} años , ${frase} , naci el ${datos.fecha} y mi libro favorito es el ${datos.libroFav["title"]} escrito por ${datos.libroFav["autor"]} publicado el ${datos.libroFav["fecha"]} y lo puedes comprar/ver en ${datos.libroFav["url"]}`
);

// Tal vez la linea de codigo quedo MUYYYY EXTENSA pero es lo que hasta ahora puedo hacer
