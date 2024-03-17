import winston from 'winston'

describe('Learning Logging Level', () => {
  it('logger with level', () => {
    const logger = winston.createLogger({
      // by default winston will be shown logger from level 3 to level 1
      // if we set level to 'debug', it means the logger that will be shown is logger from level debug (grade 6) to level error (grade 1)
      // but if we set level to 'silly', it means the logger that will be shown is logger from level silly (grade 7) to level error (grade 1)
      level: 'silly',
      transports: [
        new winston.transports.Console({})
      ]
    })

    // Level is used to define which logger is very important
    logger.log({
      level: 'error',
      message: 'Error Level, Grade 1'
    })
    logger.log({
      level: 'warn',
      message: 'Warning Level, Grade 2'
    })
    logger.log({
      level: 'info',
      message: 'Info Level. it will be used if you want to write an info, Grade 3'
    })
    logger.log({
      level: 'http',
      message: 'Http Level, Grade 4'
    })
    logger.log({
      level: 'verbose',
      message: 'Verbose Level. it will be used if you want to write a detail info, Grade  5'
    })
    logger.log({
      level: 'debug',
      message: 'Debug Level, Grade 6'
    })
    logger.log({
      level: 'silly',
      message: 'Silly Level. it will use if you want write an unnecessary log, Grade 7'
    })
  })
})
