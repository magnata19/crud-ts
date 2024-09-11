import { Customer } from "../model/Customer";
import { CustomerRepository } from "../repository/CustomerRepository";

export class CustomerService implements CustomerRepository{

    private customerCollection: Array<Customer> = []

    async save(customer: Customer): Promise<void> {
        this.customerCollection.push(customer);
    }


}