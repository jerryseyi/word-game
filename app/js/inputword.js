export class InputWord {

    enteredKey = [];
    valid = [];

    isAlphabet(char) {
        return (/[a-zA-Z]/).test(char);
    }

    isFound(char, items) {
        return items.includes(char);
    }

    // a
    noRepetition(val) {
        this.enteredKey.push(val);
    }

}