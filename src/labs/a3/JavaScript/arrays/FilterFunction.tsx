let numberArray1 = [1, 2, 4, 5, 6];
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

function FilterFunction() {
    return (
        <>
            <h3>FindIndex Function</h3>
            numbersGreaterThan2 = {numbersGreaterThan2}<br />
            evenNumbers = {evenNumbers}<br />
            oddNumbers = {oddNumbers}<br />
        </>
    )
}

export default FilterFunction;