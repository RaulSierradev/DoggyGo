const { Router } = require("express");
const {
  createContactHandler,
  getAllContactsHandler,
  getContactByIdHandler,
  editContactHandler,
} = require("../handlers/contactHandler");

const contactRouter = Router();

contactRouter.post("/", createContactHandler);
contactRouter.get("/", getAllContactsHandler);
contactRouter.get("/:id", getContactByIdHandler);
contactRouter.put("/:id", editContactHandler);

module.exports = contactRouter;
