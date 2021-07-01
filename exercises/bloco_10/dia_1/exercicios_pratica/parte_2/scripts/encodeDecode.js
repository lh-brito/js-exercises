const map = {
  encode: { 
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  },
  decode: {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  },
};

const mapString = (objMap, str) =>
  str.split('').map((char) => objMap[char] ? objMap[char] : char).join('');

const encode = (string) => mapString(map.encode, string);

const decode = (string) => mapString(map.decode, string);

const functions = { encode, decode };
module.exports = functions;
