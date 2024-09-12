import { Request, Response, Router } from "express";
import { CustomerService } from "./service/CustomerService";
import { CustomerCreate } from "./controller/CustomerController";
import { CustomerDataBase } from "./database/CustomerDataBase";

const router = Router();

const repository = new CustomerDataBase();
const controller = new CustomerCreate(repository);

router.post("/customer", (request: Request, response: Response) => {
    controller.save(request, response);
})

router.get("/customer", (request: Request, response: Response) => {
    controller.getAll(request, response);
})

export {router};