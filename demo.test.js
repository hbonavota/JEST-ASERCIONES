describe('Basic examples Aserciones', ()=>{
    
    describe('Examples expect().toBe()', ()=>{
        /*.toBe() Compara un dato primario con otro dato primario,
        como son los tipos Boolean, Number o String
        */
        test('Comprueba si son iguales', () => {
            expect(10).toBe(10);
            expect(typeof 10).toBe('number');
            expect(true).toBe(true);
        })
        
        test('Comprueba que 10 no es 11', () => {
        /* con el .not tenemos la posibilidad de negar */    
            expect(10).not.toBe(11);
        })
    })

    describe('Examples .toEqual()', ()=>{
        /*.toEqual() para comparar un array u objetos dado que la simple comparación da falso, los espacios de memoria en js son distintos
        */
        test('Comparando Objetos', () => {
            expect({name:"juan"}).toEqual({name:"juan"});
        })
        /*con toBe falla:
        test('Si los comparamos de esta manera falla', () => {  
            expect({name: "juan"}).toBe({name: "juan"});
        })
        */
    })

    describe('Examples .toBeTruthy, .toBeFalsy', ()=>{
        /* Para comparar si existen o no independientemente de su valor.
        */
        test('.toBeTruthy, comparando si exite', () =>{
            expect(true).toBeTruthy();
            //ejemplo con .not
            expect({name:'Juan'}).not.toBeFalsy();
        })
        test('comparando si NO existe', () => {  
            expect(null).toBeFalsy();
            expect(0).not.toBeTruthy();
        })
        
    })

    describe('Examples .toHaveLength', ()=>{
        /*Sirve para comparar la cantidad de elementos contenidos por un array */
        test('con el .toHaveLength comparamos el Length', () =>{
            let arr= [10];
            expect(arr).toHaveLength(1);
            expect(arr).not.toHaveLength(2);
        })
    })

    describe('Examples with numerical quantities', ()=>{
        /*Para comprar cantidades numéricas tenemos las funciones:
        .toBeGreaterThan() toBeGreaterThanOrEqual()
        .toBeLessThan() toBeLessThanOrEqual() */
        test('Comparamos números con .toBeGreaterThan() toBeGreaterThanOrEqual()', () =>{
            const number = 100;
            expect(number).toBeGreaterThan(90);
            expect(number).toBeGreaterThanOrEqual(100);
        })

        test('.toBeLessThan() toBeLessThanOrEqual()', ()=>{
            const number = 1000;
            expect(number).toBeLessThan(1001);
            expect(number).toBeLessThanOrEqual(1000);
        })
    })

    describe('Examples with .toBeClose()', ()=>{
        /*En javascript el resultado de un decimal no es totalmente exacto, por eso usamos .toBeClose(), dado que (0.1 +0.2) ---> 0.30000000000000004
        expect(0.2+0.1).toBe(0.3) --> falla 
        .toBeClose(num, numeroDecimalesPrecision) resulve problema para comparar decimales inexactos
        */
        test('.toBeClose()',()=>{
            const number = 0.30004;
            expect(number).not.toBeCloseTo(0.3,5);
            expect(number).toBeCloseTo(0.3,4)
        })
    })

    describe('Examples .toBeDefined(), .toBeUndefined', ()=>{
        test('Verificamos si la variable ya ha sido definida ',()=>{
            let variable;
            expect(variable).toBeUndefined();
            expect(variable).not.toBeDefined();

            variable= true;
            expect(variable).toBeDefined();
            expect(variable).not.toBeUndefined();
        })
    })

    describe('Examples .toMatch(RegExp)',()=>{
        test('con .toMarch comparamos string con RegExp',()=>{
            let string = "Cadena a evaluar n12";
            expect(string).toMatch(/^Cadena( a )?[a-z,A-Z,0-9, ]+/)

        })      
    })
    
})