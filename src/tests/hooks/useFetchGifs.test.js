import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hoook useFetchGifs', () => {
    
    test('Debe retornar el estado inicial', async() => {
        
        const {result, waitForNextUpdate }= renderHook( () => useFetchGifs ( 'Samurai Jack' ) );
        const {data, loading} = result.current;

        await waitForNextUpdate(); 

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
    test('Debe retornar un array de imagenes y el loading en false', async() => {
        
        const {result, waitForNextUpdate }= renderHook( () => useFetchGifs ( 'Samurai Jack' ) );
        await waitForNextUpdate(); 
        const {data, loading} = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
});
    
