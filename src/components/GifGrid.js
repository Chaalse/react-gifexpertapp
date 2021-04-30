import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    //Código obsoleto. Primera aproximación haciendo el componente
    // const [images, setImages] = useState([]);
    // useEffect(() => {
        
        //     getGifs( categoria )
        //     .then( imgs => setImages( imgs))
        
        // }, [ categoria])
        
        const {data:images, loading} = useFetchGifs( categoria);
    

    return (
        <>
        <h3>{ categoria}</h3>

        {   loading && <p>Loading</p>}

        <div className="card-grid">
                {
                    images.map(img =>(
                        <GifGridItem 
                        key = {img.id}
                        {...img}
                        />
                ))
                }
        </div>
        </>
    )
}
