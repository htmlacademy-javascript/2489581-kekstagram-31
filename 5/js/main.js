const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  let previousResult = -1;
  return () => {
    const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
    if (previousResult !== result) {
      previousResult = result;
      return result;
    } else {
      return result === upper ? lower : result + 1;
    }
  };
};

let id = 1;
const arrayLength = 25;

const createComment = () => {
  const comment = {};
  comment.id = id;
  comment.avatar = `img/avatar-${getRandomInteger(1, 6)()}.svg`;
  comment.message = MESSAGES[getRandomInteger(0, MESSAGES.length - 1)()];
  comment.name = NAMES[getRandomInteger(0, NAMES.length - 1)()];
  id++;
  return comment;
};

const createPhoto = () => {
  let id = 1;
  return () => {
    const numberOfComments = getRandomInteger(0, 30)();
    const photo = {};
    photo.id = id;
    photo.url = `photos/${id}.jpg`;
    photo.description = 'Да что тут думать';
    photo.likes = getRandomInteger(15, 200)();
    photo.comments = Array.from({ length: numberOfComments }, createComment);
    id++;
    return photo;
  };
};

const photos = Array.from({ length: arrayLength }, createPhoto());
console.log(photos);
