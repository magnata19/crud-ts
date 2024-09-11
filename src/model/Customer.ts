import { Document } from "./Document";
import { DocumentFactory } from "./DocumentFactory";
import { Uuid } from "./Uuid";

export class Customer{
    private id: Uuid;
    private name: string;
    private document: Document;

    constructor(name: string, document: Document, id?: string) {
        this.id = id ? new Uuid(id) : Uuid.randomGenerator();
        this.name = name;
        this.document = document;
    }

    static create(name:string, document: string, id?: string): Customer {
        const currentDocument = DocumentFactory.create(document);

        return new Customer(name, currentDocument, id);
    }
}