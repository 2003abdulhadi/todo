import { Router } from "express";
import { getItems, addItem, updateItem, deleteItem} from "../controllers/todos";

const router: Router = Router();

router.get("/items", getItems);

router.post("/add-item", addItem);

router.put("/update-item/:id", updateItem);

router.delete("/delete-item':id", deleteItem);

export default router;