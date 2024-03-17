import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import TransportStream from 'winston-transport'

describe('Transport Deeper', () => {
  test('winston rotate file', () => {
    const logger = winston.createLogger({
      transports: [
        new winston.transports.Console({}),
        new DailyRotateFile({
          filename: 'rotate-%DATE%.log',
          zippedArchive: true, // when log file has been reach the one day (based on maxFiles setting), it will be archived
          maxSize: '1m', // to set if the log file already 1mb, winston will create a new log file
          maxFiles: '1d' // to remove if the log file, if the log ile already reach one day (based on maxFiles setting)
        })
      ]
    })

    logger.info('Hello Rotate')
  })

  test('winston create transport', () => {
    /*
      sometimes we will send our log to different destination. maybe slack, whatapp, telegram or database.
      in this case we should create a new transport
    */

    // Create a new Trasnport called MyTransport
    class MyTransport extends TransportStream {
      // eslint-disable-next-line no-useless-constructor
      constructor (options) {
        super(options)
      }

      log (info, next) {
        // we can do all things on this line. we can send log to database and so on.
        console.log(`My New Transport: ${info.level} ${info.message} ${new Date()}`)
        next()
      }
    }

    const logger = winston.createLogger({
      transports: [
        new MyTransport({
          level: 'info'
        })
      ]
    })

    logger.info('test new transport')
  })
})
