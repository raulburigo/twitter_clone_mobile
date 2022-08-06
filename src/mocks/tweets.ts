import {userRaul, userAna, userLufa} from './users';

const tweet1 = {
  likedBy: 'Fulano',
  content: 'Bom dia, rapaziada!!',
  date: '2h',
  likes: 20,
  retweets: 0,
  comments: 10,
  likedByYou: false,
  isThread: true,
  image:
    null /* 'https://i.ibb.co/J5BGBkV/Whats-App-Image-2022-08-03-at-20-10-02.jpg' */,
  user: userRaul,
  comment: null,
};

const tweet2 = {
  likedBy: '',
  content: 'Quarteto izi',
  date: '5h',
  likes: 1,
  retweets: 0,
  comments: 10,
  likedByYou: true,
  isThread: false,
  image: 'https://i.ibb.co/nc1kgX0/Whats-App-Image-2022-08-06-at-08-32-44.jpg',
  user: userLufa,
  comment: {
    content: 'Top!!!',
    likes: 0,
    retweets: 0,
    comments: 0,
    likedByYou: false,
    date: '3h',
    user: userRaul,
  },
};

const tweet3 = {
  likedBy: '',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin nec erat sed elementum. Cras sit amet ornare lorem. Mauris porta blandit mattis. Praesent vel augue ut nisl vehicula aliquet ac non est. Nunc sit amet elit velit. Morbi iaculis fringilla est, sed tristique magna ullamcorper a. Aliquam ultrices vehicula tellus at ultricies. Phasellus iaculis tincidunt arcu ac maximus laoreet.',
  date: '1d',
  likes: 1,
  retweets: 0,
  comments: 10,
  likedByYou: true,
  isThread: false,
  image: null,
  user: userAna,
  comment: {
    content: 'Animal',
    likes: 0,
    retweets: 0,
    comments: 0,
    likedByYou: false,
    date: '1h',
    user: userRaul,
  },
};

export {tweet1, tweet2, tweet3};
