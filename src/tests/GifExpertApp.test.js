import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Pruebas de la funcionalidad de GifExpertApp', () => {
    
    
    test('Debe mostrar la aplicación', () => {
    
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar las categorias', () => {
        const categorias = ['Samurai Jack', 'Gargoyles'];
        const wrapper = shallow(<GifExpertApp defaultCategories = { categorias }/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);

    });
    
    
})
