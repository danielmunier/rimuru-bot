"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const discord_js_1 = require("discord.js");
exports.data = new discord_js_1.SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong");
async function execute(interaction) {
    return interaction.reply("pong");
}
