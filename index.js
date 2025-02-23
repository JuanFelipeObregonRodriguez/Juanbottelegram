const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1711711266:AAFwPspZUCeFsO9zCJ9UdPQP12XMnM7Qx9c';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg){
    
  var chatId = msg.chat.id;
  var chatitle = msg.chat.title;
  
  if (msg.new_chat_members != undefined){
  
      var nameNewMember = msg.new_chat_member.first_name;
  
      bot.sendMessage(chatId, "Hola " + nameNewMember + ", bienvenido, que se le ofrece? " + chatitle);
  }
  else if (msg.left_chat_member != undefined){
  
      var nameLeftMember = msg.left_chat_member.first_name;
      
      bot.sendMessage(chatId, nameLeftMember + " abandonó el grupo por pirobo")
  }
});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
bot.onText(/^\hola/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
});
bot.onText(/^\como estas?/, (msg) => {
    bot.sendMessage(msg.chat.id, "muy bien!, gracias por preguntar  " + msg.from.first_name);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, '');

});