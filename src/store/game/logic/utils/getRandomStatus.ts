import { Status } from "types/game";

const getRandomStatus = (statuses: Status[]) =>
  statuses[Math.floor(Math.random() * statuses.length)] as Status;

export default getRandomStatus;
