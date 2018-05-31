const TelegramBot = require('node-telegram-bot-api');

const token = '610212491:AAE6kwzslkbXPtzwzaFkFEoeek4yoiWD8u4';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });


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

/**
 * APARTADO DE FOTOS DE PERROS
 */
bot.onText(/bulldog/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = 'https://www.europuppy.com/wp-content/uploads/534-1024x640.jpg';
    bot.sendPhoto(chatId, url);
});

bot.onText(/labrador/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = 'https://soyunperro.com/wp-content/uploads/2019/01/labrador-adulto-1.jpg';
    bot.sendPhoto(chatId, url);
});

bot.onText(/caniche/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = 'data:image/jpeg;base64,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';
    bot.sendPhoto(chatId, url);
});

bot.onText(/salchicha/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = 'http://www.mascotadomestica.com/wp-content/uploads/2010/08/dachshund-salchicha.jpg';
    bot.sendPhoto(chatId, url);
});

bot.onText(/chow chow/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = 'https://milrazasdeperros.net/wp-content/uploads/2014/04/perros-chow-chow-cachorro.jpg';
    bot.sendPhoto(chatId, url);
});

bot.onText(/quiero una foto/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = 'https://cdn.pixabay.com/photo/2018/05/26/15/49/alpine-cornflower-3431590_960_720.jpg';
    bot.sendPhoto(chatId, url);
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
  bot.
  bot.sendMessage(chatId, response);
});
