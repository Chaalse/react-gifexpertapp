import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');
describe('Pruebas de la funcionalidad GifGrid', () => {
    
    const categoria = 'Samurai Jack';
    
    test('Debe mostrar el componente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        
        const wrapper  =shallow(<GifGrid categoria = {categoria} />);
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('Debe mostrar items cuando se cargan imágenes con useFetchGifs', () => {

        const gifs =  [
            {
            id: 'ABC', 
            url: 'https://localhost/cualquier/cosa.jpg', 
            title: 'Cualquier Imagen',
        },
            {
            id: 'DEF', 
            url: 'https://localhost/cualquier/cosa.jpg', 
            title: 'Cualquier Imagen',
        },
        
        ];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper  =shallow(<GifGrid categoria = {categoria} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);       
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length ); 
    });
    
    
});
