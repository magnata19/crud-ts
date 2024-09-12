import knex, { Knex } from 'knex';
import { Customer } from '../model/Customer';
import {CustomerRepository} from '../repository/CustomerRepository'
import { development } from './KnexConfig';

export class CustomerDataBase implements CustomerRepository {

    private connection: Knex;

    constructor() {
        this.connection = knex(development);
    }

    //metodo que faz inserção no banco de dados
    async save(customer: Customer): Promise<void> {
        await this.connection('customer').insert({
            'id': customer.getId().getValue(),
            'name': customer.getName(),
            'document': customer.getDocument().getValue()
        })
    }


    async getAll(): Promise<Array<Customer>> {
        const customerCollection: Array<Customer> = [];

        const customers = await this.connection('customer').select("*");

        for(let i = 0; i < customers.length; i++) {
            const customer = customers[i]
            const id = customer['id'];
            const name = customer['name']
            const document = customer['document']
            customerCollection.push(Customer.create(name,document,id));
        }
        return customerCollection;
    }

}