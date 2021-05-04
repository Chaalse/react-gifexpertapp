import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = ['Penguin']}) => {

    // const categorias =['Star Wars', 'Samurai Jack', 'Vengadores'];
    const [categorias, setCategorias] = useState(defaultCategories );

    // const handleAdd = () => {
    //     setCategorias( categorias => [...categorias, 'LOTR']);
    // }
    return (
        <>
        <h2>GifExpertApp</h2>
        <h3 >Pucherín and friends</h3>
        <AddCategory setCategorias = { setCategorias}/>
        <hr/>
        <ol>
            {
                categorias.map(categoria => (
                    <GifGrid 
                    key = {categoria}
                    categoria = { categoria}
                    />
                ))
            };
        </ol>

        </>

    )
}


export default GifExpertApp;