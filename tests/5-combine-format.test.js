import winston from 'winston'

describe('Learning Combine Format', () => {
  it('Logger Combine Format', () => {
    const logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(), // to add timestiamp (we use combine format, bcz timestamp format can't be shown directly, it should be shown with combine format)
        winston.format.ms(), // to add distance between loggers in ms (we use combine format, bcz ms format can't be shown directly, it should be shown with combine format)
        winston.format.json() // to set the logger will be shown as which format? json or simple or logstash? (required)
      ),
      transports: [
        new winston.transports.Console({})
      ]
    })

    logger.error('Hello Combined Format')
    logger.warn('Hello Combined Format')
  })
})
