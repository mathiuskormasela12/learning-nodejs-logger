import winston from 'winston'

const logger = winston.createLogger({
  handleExceptions: true, // it can be put on transports also, // will create log if there is a exception is not handled.
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      filename: 'exceptions.log',
      handleExceptions: true
    })
  ]
})
coba()
