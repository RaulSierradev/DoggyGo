const { Contact } = require("../db");

const createContact = async ({ name, email, category, title, message }) => {
  const newContact = await Contact.create({
    name,
    email,
    category,
    title,
    message,
  });
  return newContact;
};

const getAllContacts = async () => {
  const contacts = await Contact.findAll();
  return contacts;
};

const getContactById = async (id) => {
  const contactById = await Contact.findByPk(id);
  return contactById;
};

const editContact = async ({ id, name, email, category, title, message }) => {
  const contactFound = await Contact.findByPk(id);
  if (!contactFound) throw new Error("Contact not created");
  const updatedContact = await Contact.update(
    {
      name,
      email,
      category,
      title,
      message,
    },
    {
      where: { id },
      returning: true,
    }
  );
  return updatedContact;
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  editContact,
};
