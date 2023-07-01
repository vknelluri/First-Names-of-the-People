const peopleNames = require("../country/state/city/index");
const firstNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return firstNames(peopleNames);
};

module.exports = getPeopleInCity;
