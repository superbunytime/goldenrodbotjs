import { Client, GatewayIntentBits } from "discord.js";
import { createRequire } from "module";
import fs from "fs";
import dotenv from "dotenv";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

dotenv.config();
const token = process.env.TOKEN;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  console.log(`${message.author.tag}: ${message.content}`);
  if (
    message.author.id == 375805687529209857 ||
    message.author.name == "Streamcord" ||
    message.author.tag == "Streamcord#2800"
  ) {
    console.log(
      `We have a winner!! ${message.author.tag}: ${message.content}`
    );
  }
});

client.login(token);

//so we're throwing selenium into this?
//selenium, electron, if we want to use bodymovin we gotta throw react in there too
//because bodymovin is a react library
//also if we want to go ahead with the initiative
//we'll need to hex edit the selenium variable names for good measures.