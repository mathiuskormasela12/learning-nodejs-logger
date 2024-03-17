import winston from 'winston'

const callAsync = () => {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject('failed')
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      handleRejections: true, // will create log if there is a promise rejection is not handled.
      filename: 'rejection.log'
    })
  ]
})

callAsync()
