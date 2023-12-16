import { Client } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { BotEvent } from "../types";

console.log("[Handler] Loading events...");

module.exports = (client: Client) => {
  let eventsDir = join(__dirname, "../events");
  for (const eventFile of readdirSync(eventsDir)) {
    if (!eventFile.endsWith(".ts")) return;
    console.log("[Handler] Event " + eventFile + " loaded");
    let event: BotEvent = require(`${eventsDir}/${eventFile}`).default;
    /* { event => expected object like that:
    default: { name: 'ready', once: true, execute: [Function: execute] }
        }   */
        if(event===undefined) {
          console.log(event)
        }
    event.once
      ? client.once(event.name, (...args) => 
      event.execute(...args))
      : client.on(event.name, (...args) => 
      event.execute(...args));
  }
};
