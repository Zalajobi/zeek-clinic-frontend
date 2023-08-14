// import ampq from 'amqplib';
import { USER_SERVICE_EXCHANGE } from './constants/constants';

export const customPromiseRequest = async (requests: any[]) => {
  return await Promise.allSettled(requests);
};

// export const getRabbitMQExchangeFanOutConnection = async (exchangeName:string) => {
//   const connection = await ampq.connect(process.env.RABBITMQURL_DEV as string)
//   const channel = await connection.createChannel()
//
//   await channel.assertExchange(exchangeName, 'fanout', {durable: false})
//
//   const assertQueue = await channel.assertQueue('', {durable: false})
//   const queueName = assertQueue.queue;
//
//   channel.bindQueue(queueName, exchangeName, '')
//
//   return [connection, channel];
//
//   // USER_SERVICE_EXCHANGE
// }
