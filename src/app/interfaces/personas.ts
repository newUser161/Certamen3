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
        genero: "M",
        pais: "CL",
        ciudad: "Valparaíso"
    },
    {
        id: 1,
        nombre: "Juan",
        apellido: "Totto",
        genero: "H",
        pais: "CL",
        ciudad: "Metropolitana"
    },
    {
        id: 2,
        nombre: "Pedro",
        apellido: "Tijuana",
        genero: "H",
        pais: "CL",
        ciudad: "Metropolitana"
    },
    {
        id: 3,
        nombre: "Juana",
        apellido: "de Arco",
        genero: "M",
        pais: "CL",
        ciudad: "Valparaíso"
    },
    {
        id: 4,
        nombre: "Pepe",
        apellido: "Grillo",
        genero: "H",
        pais: "CL",
        ciudad: "Valparaíso"
    },

];
