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
        test('Comparamos números con .toBeGreaterThan() y toBeGreaterThanOrEqual()', () =>{
            const number = 100;
            expect(number).toBeGreaterThan(90);
            expect(number).toBeGreaterThanOrEqual(100);
        })
    })

    
})