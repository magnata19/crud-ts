import { Document } from "./Document";

export class Cnpj implements Document{

    private value: string;

    constructor(value: string) {
        this.value = value;
        if(!Cnpj.isValid(value)) {
            throw new Error(`Cnpj ${this.value} is not valid.`)
        }
    }

    static isValid(value: string): boolean {
        return value.length == 14;
    }

    getDocument(): Document {
        return this;
    }

    getValue(): string {
        return this.value;
    }

}