export class Time { // classe <-> substantivo //ABSTRAÇÃO
    constructor(hours = 0, minutes = 0, seconds = 0) {
        const HOUR_PER_DAY = 24;
        const MINUTES_PER_HOUR = 60;
        const SECONDS_PER_MINUTE = 60;
        // _ significa interno;
        // _ promover  ENCAPSULAMENTO
        // ENCAPSULAMENTO: dados internos do objeto
        // deve ser proibido acesso direto
        // não faz parte da API
        this._seconds = seconds % SECONDS_PER_MINUTE;

        minutes += Number.parseInt(seconds / SECONDS_PER_MINUTE);
        // sem o this é o objeto que entrou, é temporario e não fixo
        this._minutes = minutes % MINUTES_PER_HOUR;
        // this. deixa a 'variavel' fixa na classe

        hours += Number.parseInt(minutes / MINUTES_PER_HOUR);
        this._hours = hours % HOUR_PER_DAY;
    }

    get seconds() { // getter > propriedade pública
        return this._seconds;
    }

    get minutes() {
        return this._minutes;
    }

    get hours() {
        return this._hours;
    }

    // para tornar o objeto apresentável
    toString() {
        return `${this.hours < 10 ? '0' : ''}${this.hours}:${this.minutes < 10 ? '0' : ''}${this.minutes}:${this.seconds < 10 ? '0' : ''}${this.seconds}`;
        // (this.hours < 10 ? '0' : '') + this.hours + ':' + (this.minutes < 10 ? '0' : '') + this.minutes + ':' + (this.seconds < 10 ? '0' : '') + this.seconds;
    }
}
