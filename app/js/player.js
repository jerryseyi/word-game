class Player {
    name;
    start = false;

    constructor(name, start = true) {
        this.name = name;
        this.start = start;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }
}

player = new Player('Adedotun');
player.name = 'Lateefat';
console.log(player.name);