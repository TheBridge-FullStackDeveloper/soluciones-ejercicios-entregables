const Logger = require('logplease');

const logger = Logger.create('My log');

exports.esPar = (num) => {
    if (num % 2 === 0) {
        logger.info(`El número es par`);
    } else {
        logger.error(`El número no es par`);
    }
  };
