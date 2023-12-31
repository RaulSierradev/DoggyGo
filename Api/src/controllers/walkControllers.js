const { Walk } = require("../db");

const createWalk = async ({
  startDate,
  time,
  state,
  duration,
  cost,
  fee,
  total,
  image,
  comment,
  emergency,
  WalkerId,
  ClientId
}) => {
  const newWalk = await Walk.create({
    startDate,
    time,
    state,
    duration,
    cost,
    fee,
    total,
    image,
    comment,
    emergency,
    WalkerId,
    ClientId
  });
  return newWalk;
};

const getAllWalks = async () => {
  const walks = await Walk.findAll();
  return walks;
};

const getWalkById = async (id) => {
  const walkById = await Walk.findByPk(id);
  return walkById;
};

const editWalk = async ({
  id,
  startDate,
  time,
  state,
  duration,
  cost,
  fee,
  total,
  image,
  comment,
  emergency,
}) => {
  const walkFound = await Walk.findByPk(id);
  if (!walkFound) throw new Error("Paseo no creado");

  const updatedWalk = await Walk.update(
    {
      startDate,
      time,
      state,
      duration,
      cost,
      fee,
      total,
      image,
      comment,
      emergency,
    },
    {
      where: { id },
      returning: true,
    }
  );

  return updatedWalk;
};

module.exports = { createWalk, getAllWalks, getWalkById, editWalk };
