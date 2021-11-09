export interface Personas {
    id: number;
    nombre: string;
    genero: string;
    pais: string;
    ciudad: string;
}

export let ListaPersonas:Array<Personas> = [
    {
        id: 0,
        nombre: "Pepita Cruz",
        genero: "Mujer",
        pais: "Chile",
        ciudad: "Valparaíso"
    },
    {
        id: 1,
        nombre: "Juan Totto",
        genero: "Hombre",
        pais: "Chile",
        ciudad: "Metropolitana"
    },
    {
        id: 2,
        nombre: "Pedro Tijuana",
        genero: "Hombre",
        pais: "Chile",
        ciudad: "Metropolitana"
    },
    {
        id: 3,
        nombre: "Juana de Arco",
        genero: "Mujer",
        pais: "Chile",
        ciudad: "Valparaíso"
    },
    {
        id: 4,
        nombre: "Pepe Grillo",
        genero: "Hombre",
        pais: "Chile",
        ciudad: "Valparaíso"
    },

];
