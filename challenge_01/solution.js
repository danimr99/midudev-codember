const { data } = require('./data.js');

const separateUsers = (text) => {
  const users = [''];
  const arrayRaw = text.split('\n');

  arrayRaw.forEach((line) => {
    if (line === '') {
      return users.push('');
    }
    users[users.length - 1] += line + ' ';
  });

  return users.map((user) => user.trim());
};

const VALID_PROPS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const checkUser = (user) => {
  const props = user.split(' ');
  if (props.length < VALID_PROPS.length) return null;

  if (!props.some((prop) => prop.match(/usr:.*/))) return null;
  if (!props.some((prop) => prop.match(/eme:.*/))) return null;
  if (!props.some((prop) => prop.match(/psw:.*/))) return null;
  if (!props.some((prop) => prop.match(/age:.*/))) return null;
  if (!props.some((prop) => prop.match(/loc:.*/))) return null;
  if (!props.some((prop) => prop.match(/fll:.*/))) return null;

  return true;
};

const getSolution = () => {
  const users = separateUsers(data);
  const validMap = users.map(checkUser);

  const numberOfValidUsers = validMap.filter((e) => e === true).length;

  const lastValidUserIndex = validMap.lastIndexOf(true);
  const userName = users[lastValidUserIndex]?.match(/usr:([^\s]+)/)?.[1];

  return `${numberOfValidUsers}${userName}`;
};

console.log(getSolution());