const configure = require('@ac-business-media/refresh-theme/config/omeda-identity-x');
const configureOmeda = require('@ac-business-media/refresh-theme/config/omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig: configureOmeda({}),
  idxConfig,
  rapidIdentProductId: 15444,
  websiteBehaviorAttributeId: 451161,
});
