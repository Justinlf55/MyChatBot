/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    // controller.hears('sample','message,direct_message', async(bot, message) => {
    //     await bot.reply(message, 'I heard a sample message.');
    // });

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Hello, my name is Justin, I am a Case Manager turned software engineer looking for an entry level position, hoping to get my foot in the door and tp display my technical skills. Please ask me a question to learn more about my resume, such as my skills, education, projects, job history, or even contact information.\n\n Here are a few examples:\n\n \"What are your skills as a software engineer?\"\n\n \"Please, tell me about your projects.\"\n\n \"Could you elaborate on your job history?\" ' );
    });
}
