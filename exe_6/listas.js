const lista = [
    "leche",
    "agua",
    "galletas",
    "itemsBaño",
    "itemsCocina",
    "dietetica",
    "carne",
    "salados",
];

lista.push("aceite de girasol");

console.log(lista);

lista.pop();

console.log(lista);

const peliculasfav = [
    {
        titulo: "Sherlock Holmes: Juego de sombras",
        director: "Guy Ritchie",
        fecha: new Date(2012, 0, 9),
    },
    {
        titulo: "Los simpsons",
        director: "David Silverman",
        fecha: new Date(2007, 6, 27),
    },
    {
        titulo: "Pulp Fiction",
        director: "Quentin Tarantino",
        fecha: new Date(1994, 9, 14),
    },
];

const peliculaspost = peliculasfav.filter(
    (obj) => obj.fecha > new Date(2010, 0, 1)
);

const directores = peliculasfav.map((peliculafav) => {
    return peliculafav.director;
});

const titulos = peliculasfav.map((pelicula) => {
    return pelicula.titulo;
});

const directores_titulos = directores.concat(titulos);

const nuevaspelis = [...directores, ...titulos];
