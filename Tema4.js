var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//part 1 - https://www.typescriptlang.org/play/ - tested here
var entrySet = [1, 7, 8, 23, 4, 2, 3, 10];
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.getAllDivisorsAndFindOutIfItsPrime = function (num) {
        var divisors = [];
        var mod = num;
        while (mod > 0) {
            if (num % mod === 0) {
                divisors.push(mod);
            }
            mod--;
        }
        if (divisors.length <= 2)
            console.log(num + " is Prime");
        return divisors;
    };
    return Main;
}());
var main = new Main();
entrySet.forEach(function (num) {
    console.log("The divisors of " + num + " are:");
    main.getAllDivisorsAndFindOutIfItsPrime(num).forEach(function (num) { return console.log(num); });
});
//part 2 - https://www.typescriptlang.org/play/ - tested here
var Persoana = /** @class */ (function () {
    function Persoana(nume, varsta) {
        this.nume = nume;
        this.varsta = varsta;
    }
    Persoana.prototype.setNume = function (nume) { this.nume = nume; };
    Persoana.prototype.setVarsta = function (varsta) { this.varsta = varsta; };
    Persoana.prototype.getNume = function () { return this.nume; };
    Persoana.prototype.getVarsta = function () { return this.varsta; };
    Persoana.prototype.toString = function () {
        console.log("Persoana cu numele " + this.nume + " si varsta " + this.varsta);
    };
    return Persoana;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(nume, varsta, medie, an) {
        var _this = _super.call(this, nume, varsta) || this;
        _this.medie = medie;
        _this.an = an;
        return _this;
    }
    Student.prototype.setMedie = function (medie) { this.medie = medie; };
    Student.prototype.setAn = function (an) { this.an = an; };
    Student.prototype.getMedie = function () { return this.medie; };
    Student.prototype.getAn = function () { return this.an; };
    Student.prototype.toString = function () {
        console.log("Persoana cu numele " + _super.prototype.getNume.call(this) + " si varsta " + _super.prototype.getVarsta.call(this) + " este in anul " + this.an + " si media " + this.medie);
    };
    return Student;
}(Persoana));
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(nume, varsta, materie, titlu) {
        var _this = _super.call(this, nume, varsta) || this;
        _this.materie = materie;
        _this.titlu = titlu;
        return _this;
    }
    Profesor.prototype.setMaterie = function (materie) { this.materie = materie; };
    Profesor.prototype.setTitlu = function (titlu) { this.titlu = titlu; };
    Profesor.prototype.getMaterie = function () { return this.materie; };
    Profesor.prototype.getTitlu = function () { return this.titlu; };
    Profesor.prototype.toString = function () {
        console.log("Persoana cu numele " + this.getNume() + " si varsta " + this.getVarsta() + " este in titlul " + this.titlu + " preda materia  " + this.materie);
    };
    return Profesor;
}(Persoana));
