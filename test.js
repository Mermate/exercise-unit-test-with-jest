// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test("One Dollar should be 146 Yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 dollar son 146 yenes, entonces 3.5 dollares debe ser (3.5 * 146)
    const expected = 3.5 * 146;

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected); // 1 dollar son 146 yenes, entonces 3.5 dollares deberían ser = (3.5 * 146)
});
test("One Yen should be 0.0073 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5);

    // Si 1 Yen son 0.0073 pounds, entonces 3.5 yenes debe ser (3.5 * 0.0073)
    const expected = 3.5 * 0.0073;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected); // 1 Yen son 0.073 pounds, entonces 3.5 yenes deberían ser = (3.5 * 0.0073)
});
