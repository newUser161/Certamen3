export interface Personas {
    id: number;
    nombre: string;
    apellido: string;
    genero: string;
    pais: string;
    ciudad: string;
}

export let ListaPersonas:Array<Personas> = [
    {
        id: 0,
        nombre: "Pepita",
        apellido: "Cruz",
        genero: "Mujer",
        pais: "Chile",
        ciudad: "Valparaíso"
    },
    {
        id: 1,
        nombre: "Juan",
        apellido: "Totto",
        genero: "Hombre",
        pais: "Chile",
        ciudad: "Metropolitana"
    },
    {
        id: 2,
        nombre: "Pedro",
        apellido: "Tijuana",
        genero: "Hombre",
        pais: "Chile",
        ciudad: "Metropolitana"
    },
    {
        id: 3,
        nombre: "Juana",
        apellido: "de Arco",
        genero: "Mujer",
        pais: "Chile",
        ciudad: "Valparaíso"
    },
    {
        id: 4,
        nombre: "Pepe",
        apellido: "Grillo",
        genero: "Hombre",
        pais: "Chile",
        ciudad: "Valparaíso"
    },

];
