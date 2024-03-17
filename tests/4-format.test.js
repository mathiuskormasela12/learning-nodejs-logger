import winston from 'winston'

describe('Learning Format', () => {
  it('Logger Format', () => {
    const logger = winston.createLogger({
      level: 'info',
      // To setting the logger will be shown on which format? json or simple or logstash or others?
      // format: winston.format.json(), // it's default format
      // format: winston.format.simple(),
      // format: winston.format.logstash(), // format from a logstash platform (logstash is a platform for doing logging),

      // Custom format, we can write our own format by sing printf format
      format: winston.format.printf(info => {
        return `${new Date()}: ${info.level.toUpperCase()} : ${info.message}`
      }),

      transports: [
        new winston.transports.Console({})
      ]
    })

    logger.error('Hello Format')
    logger.warn('Hello Format')
  })
})
