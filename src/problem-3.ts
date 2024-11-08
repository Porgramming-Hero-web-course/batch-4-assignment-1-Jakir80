{//

    function countWordOccurrences(text: string, searchWord: string): number {
        return text
            .toLowerCase()
            .split(" ")
            .filter(word => word === searchWord.toLowerCase())
            .length;
    }


    // console.log(countWordOccurrences("I love typescript", "typescript"));/
    //
}