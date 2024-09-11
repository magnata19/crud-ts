import { Request, Response, Router } from "express";
import { CustomerService } from "./service/CustomerService";
import { CustomerCreate } from "./controller/CustomerController";

const router = Router();

const repository = new CustomerService();
const controller = new CustomerCreate(repository);

router.post("/customer", (request: Request, response: Response) => {
    controller.save(request, response);
})

export {router};