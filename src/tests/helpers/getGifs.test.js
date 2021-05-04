import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con fetch de getGifs', () => {
    test('Debe recuperar 10 elementos', async() => {
        
        const gifs = await getGifs('Avengers');
        expect(gifs.length).toBe(10);

    })
    
    test('Debe ', async() => {
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })
    
})
