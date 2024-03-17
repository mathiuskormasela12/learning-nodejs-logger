import winston from 'winston'

describe('Logger Shortcut', () => {
  it('logger with shortcut', () => {
    const logger = winston.createLogger({
      transports: [
        new winston.transports.Console({})
      ]
    })

    // these are the loger level shortcuts, so we don't need to use logger.log
    logger.error('Error Logger, grade 1')
    logger.warn('Warn Logger', 'grade 2')
    logger.info('Warn Logger, grade 3')
    logger.http('Http Logger, grade 4')
    logger.verbose('Verbose Logger, grade 5')
    logger.debug('Debug Logger, grade 6')
    logger.silly('Silly Logger', 'grade 7')
  })
})
