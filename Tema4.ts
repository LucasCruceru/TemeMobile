//part 1 - https://www.typescriptlang.org/play/ - tested here
var entrySet: number[] = [1, 7, 8, 23, 4, 2, 3, 10];

class Main {
    getAllDivisorsAndFindOutIfItsPrime(num): number[]{
        var divisors: number[] = [];
        var mod:number = num;
        while (mod > 0){
            if(num % mod === 0){
                divisors.push(mod);
            }
            mod--;
        }
        if (divisors.length <= 2)
            console.log(num + " is Prime");

        return divisors;
    }
}
var main: Main = new Main();
entrySet.forEach(num => {
    console.log("The divisors of "+ num +" are:")
    main.getAllDivisorsAndFindOutIfItsPrime(num).forEach(num => console.log(num))
})

//part 2 - https://www.typescriptlang.org/play/ - tested here
class Persoana {
    private nume: string;
    private varsta: number;

    constructor(nume: string, varsta: number) {
        this.nume = nume;
        this.varsta = varsta;
    }

    setNume(nume: string): void { this.nume = nume; }
    setVarsta(varsta: number) { this.varsta = varsta; }
    getNume(): string { return this.nume; }
    getVarsta(): number { return this.varsta; }

    toString(): void {
        console.log("Persoana cu numele " + this.nume + " si varsta " + this.varsta);
    }
}

class Student extends Persoana {
    private medie: number;
    private an: number;

    constructor(nume: string, varsta: number, medie: number, an: number) {
        super(nume, varsta);
        this.medie = medie;
        this.an = an;
    }

    setMedie(medie: number): void { this.medie = medie; }
    setAn(an: number) { this.an = an; }
    getMedie(): number { return this.medie; }
    getAn(): number { return this.an; }

    toString(): void {
        console.log("Persoana cu numele " + super.getNume()+ " si varsta " + super.getVarsta() + " este in anul " + this.an + " si media " + this.medie);
    }
}

class Profesor extends Persoana {
    private materie: string;
    private titlu: string;

    constructor(nume: string, varsta: number, materie: string, titlu: string) {
        super(nume, varsta);
        this.materie = materie;
        this.titlu = titlu;
    }

    setMaterie(materie: string): void { this.materie = materie; }
    setTitlu(titlu: string) { this.titlu = titlu; }
    getMaterie(): string { return this.materie; }
    getTitlu(): string { return this.titlu; }

    toString(): void {
    console.log("Persoana cu numele " + this.getNume() + " si varsta " + this.getVarsta() + " este in titlul " + this.titlu + " preda materia  " + this.materie);
}
}