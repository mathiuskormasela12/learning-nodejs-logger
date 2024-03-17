import winston from 'winston'

describe('File Transport', () => {
  it('file transport', () => {
    const logger = winston.createLogger({
      level: 'info',
      transports: [
        new winston.transports.Console({}),
        // to show log on app.log file or any file
        new winston.transports.File({
          filename: 'app.log'
        }),
        new winston.transports.File({
          level: 'error', // to set the transport file will be shown error level only (it can be used on any transport)
          filename: 'app-error.log'
        })
      ]
    })

    logger.info('Info bre')
    logger.error('Error bre')
  })
})
