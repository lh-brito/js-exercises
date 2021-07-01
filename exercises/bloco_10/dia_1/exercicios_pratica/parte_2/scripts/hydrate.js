const hydrate = (str) => {
  const result = str.split('').reduce((glassOfWater, char) => {
    let checkChar = isNaN(parseInt(char)) !== true;
    if (checkChar) return glassOfWater + parseInt(char);
    return glassOfWater;
  }, 0);

  const pluralGlass = result === 1 ? 'copo' : 'copos';
  return `${result} ${pluralGlass} de água`;
};

module.exports = hydrate;
