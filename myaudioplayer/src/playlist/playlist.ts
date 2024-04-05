import trackOne from './songs/track1.mp3';
import trackTwo from './songs/track2.mp3';
import trackThree from './songs/track3.mp3';
import trackFour from './songs/track4.mp3';
import coverArtOne from './cover-art/1.jpg';
import coverArtTwo from './cover-art/2.jpg';
import coverArtThree from './cover-art/3.jpg';
import coverArtFour from './cover-art/4.jpg';
import { Playlist } from '../audioplayer/types';

const playlist: Playlist = [
  {
    audioSrc: trackOne,
    metadata: {
      title: 'Guitar I',
      artist: 'John Doe',
      coverArtSrc: coverArtOne,
    },
  },
  {
    audioSrc: trackTwo,
    metadata: {
      title: 'Guitar II',
      artist: 'John Doe',
      coverArtSrc: coverArtTwo,
    },
  },
  {
    audioSrc: trackThree,
    metadata: {
      title: 'Sunflower',
      artist: 'Jane Doe',
      coverArtSrc: coverArtThree,
    },
  },
  {
    audioSrc: trackFour,
    metadata: {
      title: 'Flowers',
      artist: 'Jane Doe',
      coverArtSrc: coverArtFour,
    },
  },
];

export default playlist;
