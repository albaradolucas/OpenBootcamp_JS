const datos = {
    nombre: "Lucas",
    apellido: "González",
    edad: "21",
    altura: "172",
    eresDesarrollado: true,
}

const edad = datos.edad;

const newDatos = [
    {
        ...datos,
    },
    {
        nombre: "Martin",
        apellido: "Perez",
        edad: "25",
        altura: "164",
        eresDesarrollado: false,
    },
    {
        nombre: "Gonzalo",
        apellido: "Rojas",
        edad: "35",
        altura: "184",
        eresDesarrollado: true,
    }
]

const newLista = newDatos.sort((a,b) => b.edad - a.edad)