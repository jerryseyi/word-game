export class InputWord {
    isAlphabet(char) {
        return (/[a-zA-Z]/).test(char);
    }

    isFound(char, items) {
        return items.includes(char);
    }
}