const {
  createContact,
  getAllContacts,
  getContactById,
  editContact,
} = require("../controllers/contactController");

const createContactHandler = async (req, res) => {
  const { name, email, category, title, message } = req.body;
  try {
     if (!name || !email || !category || !title || !message) {
      throw new Error("All fields are required");
    }
    const newContact = await createContact({ name, email, category, title, message });
    res.status(200).json(newContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllContactsHandler = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    if (contacts.length) {
      res.status(200).json(contacts);
    } else {
      throw Error("There are no contacts");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getContactByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const contactById = await getContactById(id);
    res.status(200).json(contactById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editContactHandler = async (req, res) => {
  const { id } = req.params;
  const { name, email, category, title, message } = req.body;
  try {
    const contactEdited = await editContact({ id, name, email, category, title, message });
    res.status(200).json(contactEdited);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createContactHandler,
  getAllContactsHandler,
  getContactByIdHandler,
  editContactHandler,
};
