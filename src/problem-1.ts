{
    //sumArray

    function sumArray(numbers: number[]): number {
        let Add = 0;
        for (let i = 0; i < numbers.length; i++) {
            Add = numbers[i] + Add
        }
        return Add;
    }


    const result = sumArray([1, 2, 3, 4, 5])
    console.log(result)


    //
}

