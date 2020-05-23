import { Coords } from '../../typings'

export const generateRooms = ({ depth }: { depth: number }): Coords[] => {
  var roomArray: Coords[] = [];

  for (let yCoord = depth; yCoord >= -depth; yCoord--) {
    for (let xCoord = -depth; xCoord <= depth; xCoord++) {
      if (xCoord == -0) {
        xCoord = 0;
      }
      if (yCoord == -0) {
        yCoord = 0;
      }
      roomArray.push({ x: xCoord, y: yCoord });
    }
  }

  return roomArray;
};
