import { createContext } from 'react';

const LibroContext = createContext({
    id: null,
    titulo: 'null',
    autor: null,
    rate: null,
    votos: null,
    url: null,
    descripcion: null,
    cat1: null,
    cat2: null,
    cat3: null
})

export default LibroContext;