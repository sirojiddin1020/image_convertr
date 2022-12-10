const fs = require('fs');
const ytdl = require('ytdl-core');

const { Telegraf } = require('telegraf');
const bot = new Telegraf('5883963443:AAHh0iARC0PMrnJtI99JlCm7NY4y-TCzwlo');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above


bot.start(async (ctx) => {
    ctx.reply('Қидириш учун калит сўзларни киритинг...')
});


// bot.on('photo', async (ctx) => {
//     try {
//         let user_text = ctx.update.message.text;
//         let fileid = ctx.message.photo.length - 1;
//         console.log(fileid);
//         bot.telegram.sendPhoto(ctx.chat.id, ctx.message.photo[0].file_id).then((m) => {
//             console.log("bu", m);
//         })

//     } catch (error) {
//         ctx.reply("Ушбу сўз бўйича маълумот топилмади!");
//         // bot.telegram.deleteMessage(ctx.chat.id, anime_id)
//     }
// });

bot.use((ctx, next) => {
    console.log(ctx.message);
    bot.telegram.sendVideo(ctx.chat.id, "BAACAgIAAxkBAAMaY5M9qPXBDJey7nLirYf_vsrfQy4AAtciAAJrGXlKLYeTw2YdQ-orBA")
    return next()
})


function start_bot() {
    try { bot.launch(); console.log("working") }
    catch (error) { console.log(error.message) }
}
start_bot();

// ytdl('https://www.youtube.com/watch?v=zBjJUV-lzHo')
//     .pipe(fs.createWriteStream('video2.mp4'));

// console.log('heekoewp');



// console.log('path/file.txt was deleted', __filename);//or else the file will be deleted
// fs.unlink(__dirname+"/video.mp4", (err) => {
//     if (err) throw err //handle your error the way you want to;
//     console.log('path/file.txt was deleted', __filename);//or else the file will be deleted
// });
// fs.appendFile(__dirname+"/video.mp4",)

