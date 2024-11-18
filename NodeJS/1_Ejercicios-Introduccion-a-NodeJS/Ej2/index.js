const Logger = require('logplease');

const options = {
    useColors: true, 
    color: Logger.Colors.Yellow, 
    showTimestamp: true, 
    useLocalTime: false, 
    showLevel: true,     
    filename: null,      
    appendFile: true,    
  };

const logger = Logger.create('My log', options);

logger.debug(`Hola Mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);
