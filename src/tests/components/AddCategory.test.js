import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en el componente <AddCategory/>', () => {
    const setCategorias = jest.fn();
    let wrapper = shallow(<AddCategory setCategorias = { setCategorias}/>);

    beforeEach(()=> {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorias = { setCategorias}/>);

    });

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    
    test('debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });

        
        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('NO debe postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){} }); //(){} es la forma corta de una función lamda que no definimos
        expect(setCategorias).not.toHaveBeenCalled();
    });

    test('debe llamar el setCategorias y limpiar la caja de texto', () => {

        //1. Simular el inputChange
        //2. Simular el submit
        //3. setCategorias se debe de haber llamado
        //4. inputValue debe permanecer ''        
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', {preventDefault(){} });
        
        expect(setCategorias).toHaveBeenCalled();
        expect( input.prop('value').trim()).toBe('');
    })
    
    
    
});
