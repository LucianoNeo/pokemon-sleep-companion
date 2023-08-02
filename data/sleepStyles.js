import islands from './islands'

const sleepStyles = {
  sunbathing: {
    name: 'Sunbathing Sleep',
    location: islands.greenGrassIsland,
    from: 'Basic 2',
    rewards: {
      xp: 18,
      dreamShards: 39,
      candy: 3,
    },
    img: '/1-1.png',
  },
  sturdy: {
    name: 'Sturdy Sleep',
    location: islands.greenGrassIsland,
    from: 'Great 1',
    rewards: {
      xp: 116,
      dreamShards: 246,
      candy: 5,
    },
    img: '/1-2.png',
  },
  vinesOut: {
    name: 'Vines-Out Sleep',
    location: '',
    from: '',
    rewards: {
      xp: 468,
      dreamShards: 988,
      candy: 7,
    },
    img: '',
  },
  atopBelly: {
    name: 'Atop-Belly Sleep',
    location: islands.greenGrassIsland,
    from: 'Great 2',
    rewards: {
      xp: 705,
      dreamShards: 1491,
      candy: 8,
    },
    img: '',
  },
}

export default sleepStyles
