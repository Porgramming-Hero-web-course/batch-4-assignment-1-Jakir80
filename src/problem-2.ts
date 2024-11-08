{//
    function removeDuplicates(mixednumber: number[]): number[] {
        return mixednumber.filter((value, index) =>

            mixednumber.indexOf(value) === index);
    }


    const uniqueNumber = (removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

    // console.log(uniqueNumber)
    //
}