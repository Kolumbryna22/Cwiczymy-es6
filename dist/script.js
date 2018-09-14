{
    const words = ['Hello', 'world'];
    const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
    const strangeTable = [1, 4, 'Iwona', false, 'Nowak'];

    console.log(`Zadanie 1: ${words[0]} ${words[1]}`);
    console.log(`Zadanie 2 (mnożenie 5*6): ${multiply(5, 6)}`);
    console.log(`Zadanie 2 (mnożenie 5 nie podana druga liczba): ${multiply(5)}`);
    console.log(`Zadanie 3 (średnia z 1,3,6,6): ${average(1, 3, 6, 6)}`);
    console.log(`Zadanie 4: ${average(...grades)}`);
    console.log(`Zadanie 5: ${strangeTable.filter(isString)}`);

    function multiply(x, y = 2) {
        return x * y;
    };

    function average(...args) {
        let result = 0;
        args.forEach(arg => result += arg);
        result /= args.length;

        return result;
    };

    function isString(arg) {
        return typeof arg === 'string' ? 'true' : '';
    }
}
