import { Status } from "types/game";

const getRandomStatus = () => {
  const statusValues = Object.keys(Status);
  const randomIndex = Math.floor(Math.random() * statusValues.length);
  return randomIndex as Status;
};

export default getRandomStatus;
