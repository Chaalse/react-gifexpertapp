import {shallow} from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem.js";

describe('Pruebas en <GifGridItem/>', () => {
 
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title= {title} url =  {url}/>)

    
    test('Debe mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe tener un p con el title', () => {
    
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title );
    })
    
    test('Debe tener una imagen igual al url y alt de los props', () => {
    
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe( url );
        expect(img.prop('alt')).toBe( title );
    })
    
    test('Debe tener animación fadeIn', () => {
        
        const animacion = "card animate__animated animate__fadeIn";
        const div = wrapper.find('div');
        expect(div.prop('className').trim()).toBe(animacion);
    })
    
})