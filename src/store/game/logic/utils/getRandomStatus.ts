import { Status } from "types/game";

const getRandomStatus = (statuses: Status[]) => {
  return statuses[Math.floor(Math.random() * statuses.length)] as Status;
};

export default getRandomStatus;
