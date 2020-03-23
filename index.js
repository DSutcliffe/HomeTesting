// let random; // will be removed

class FifaPlayer {
    constructor(name, pace, shooting, passing) {
        this.name = name;
        this.pace = pace;
        this.shooting = shooting;
        this.passing = passing;
    }

    // Increase Functions
    increasePace () {
        this.pace++;
    }
    increaseShooting () {
        this.shooting++;
    }
    increasePassing () {
        this.passing++;
    }

    // Decrease Functions
    decreasePace () {
        this.pace--;
    }
    decreaseShooting () {
        this.shooting--;
    }
    decreasePassing () {
        this.passing--;
    }
}

const abrar = new FifaPlayer('Abrar', 97, 95, 4);

module.exports = {
    FifaPlayer,
    abrar
}