const amqplib = require('amqplib')

class RabbitMQ {
  constructor(amqpUrl, exchangeName, exchangeType = fanout) {
    this.amqpUrl = amqpUrl
    this.exchangeName = exchangeName
    this.exchangeType = exchangeType
  }

  async publish(message) {
    try {
      const connection = await amqplib.connect(this.amqpUrl)
      const channel = await connection.createChannel()

      await channel.assertExchange(this.exchangeName, this.exchangeType, {
        durable: false,
        autoDelete: true
      })

      await channel.publish(this.exchangeName, '', Buffer.from(JSON.stringify(message)),{
        expiration: '10000' // TTL 10s
      })
      // console.log(`Sent message => ${message}`)
      await channel.close()
      await connection.close()
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = RabbitMQ