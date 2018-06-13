export class Complex {
    constructor(real = 0, imaginary = 0) {
        this._real = real;
        this._imaginary = imaginary;
    }

    soma(number) {
        this._real += number._real;
        this._imaginary += number._imaginary;
    }

    subtrai(number) {
        this._real -= number._real;
        this._imaginary -= number._imaginary;
    }

    toString() {
        let string = '';
        if (this.real !== 0) string += this._real;
        if (this.real > 0 && this.imaginary > 0) string += '+';
        if (this.imaginary !== 0) string += this._imaginary+'i';
        return string;
    }

    get real() {
        return this._real;
    }

    get imaginary() {
        return this._imaginary;
    }
}
