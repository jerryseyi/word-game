class Randomize {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    results = [];
    consonantsCount = 0;
    vowelsCount = 0;

    consonant() {
        while (this.consonantsCount < 2) {
            this.results.push(this.consonants[Math.floor(Math.random() * this.consonants.length)]);
            this.consonantsCount++;
        }

        return this;
    }

    vowel() {
        while (this.vowelsCount < 3) {
            this.results.push(this.vowels[Math.floor(Math.random() * this.vowels.length)]);
            this.vowelsCount++;
        }

        return this;
    }

    display() {
        return this.results;
    }

    word(items = this.results) {
        let randomIndex;
        let currentIndex = items.length; // 5

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [items[currentIndex], items[randomIndex]] = [items[randomIndex], items[currentIndex]];
        }

        return items;
    }
}

rand = new Randomize();

console.log(rand.consonant().vowel());
console.log(rand.word());
console.log(rand.word());
console.log(rand.word());
console.log(rand.word());
console.log(rand.word());