const TelegramBot = require('node-telegram-bot-api');

const token = '610212491:AAE6kwzslkbXPtzwzaFkFEoeek4yoiWD8u4';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.chat

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
console.log(msg);
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    const resp = ` 
    Ayudas
        1. /help - Muestra las ayudas disponibles
        2. /echo mensaje - Envia un mensaje nuevo
        3. /getQuestion - Te muestra una pregunta
    `;
    bot.sendMessage(chatId, resp);
});

bot.onText(/\/getQuestion/, (msg, match) => {
    const chatId = msg.chat.id;
    const questions = [
        '¿Cúal es el lenguaje de programación más utilizado actualmente?',
        '¿Cúal es la última versión de Angular vigente?',
        '¿Ionic sirve para crear aplicaciones nativas?'
    ];
    const index = parseInt(Math.random(3));
    console.log(index);
    bot.sendMessage(chatId, questions[index]);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', msg => {
    console.log(msg);
  const chatId = msg.chat.id,
    text = msg.text.toLowerCase();
  let response = '';

  switch (text) {
    case 'hola':
    case 'hi':
    case 'buenas':
    case 'buenos dias':
    case 'buenos días':
      response = 'hi';
      break;
    case 'que tal?':
    case 'como te va?':
        response = 'bien, acabo de salir a pasear con mi dueño';
        break;
    case 'quieres ir a pasear?':
        response = 'ianda, que pereza';
        break;
    case 'estas pesadico hoy eh':
        response = 'pero que dices, si no hice nada malo, solo rompí tres cojínes :/';
        break;
    case 'vamos a jugar?':
        response = 'guau guau';
        break;
    case 'te quiero':
      response = 'yo más tontito';
      break;
    case 'esto es una prueba':
      response = '¿te crees que soy un bot? A mí que me cuentas...';
      break;
    default:
      response = text;
      break;
  }
  console.log(response);
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, response);
});
