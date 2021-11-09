export interface Personas {
    id: number;
    nombre: string;
    genero: number;
    lugar: string;
}

export let ListaPersonas:Array<Personas> = [
    {
        id: 0,
        nombre: "Pepita Cruz",
        genero: 1,
        lugar: "Chile, Valparaiso"
    },
    {
        id: 1,
        nombre: "Juan Totto",
        genero: 0,
        lugar: "Chile, Metropolitana"
    },
    {
        id: 2,
        nombre: "Pedro Tijuana",
        genero: 1,
        lugar: "Chile, Metropolitana"
    },
    {
        id: 3,
        nombre: "Juana de Arco",
        genero: 1,
        lugar: "Chile, Valparaiso"
    },

];
