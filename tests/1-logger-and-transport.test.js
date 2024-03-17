import winston from 'winston'

it('create new logger', () => {
  // Create a logger object to be used to do logging
  // We can create a new logger by calling createLogger function from winston
  const logger = winston.createLogger({
    // To defined this log will be shown on which destination, it can be console or maybe file or others destination
    // transports is required, if we don't set any transports, winston will be error
    // it's an array so we can add multi destination
    transports: [
      // to set transport to be console, so any logger that we create, it will be shown on terminal console
      new winston.transports.Console({})
    ]
  })

  logger.log({
    level: 'info',
    message: 'Hello Logging'
  })
})
