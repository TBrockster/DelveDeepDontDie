import { generateRooms } from '../utils';

describe('generateRooms', () => {
  it('Generates rooms with depth of 0', () => {
    const dungeon = generateRooms({ depth: 0 });
    expect(dungeon).toEqual([{ x: 0, y: 0 }]);
  });
  it('Generates room with depth of 1', () => {
    const dungeon = generateRooms({ depth: 1 });
    expect(dungeon).toEqual([
      { x: -1, y: 1 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
    ]);
  });
});
