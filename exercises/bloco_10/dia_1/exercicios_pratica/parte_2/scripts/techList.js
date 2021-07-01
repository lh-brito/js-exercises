const techList = (techs, name) =>
  techs.length === 0 ? 'Vazio!' : techs.sort().map((tech) => ({ tech, name, }));

module.exports = techList;
