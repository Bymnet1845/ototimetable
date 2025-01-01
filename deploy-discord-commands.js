import * as dotenv from "dotenv";
import { format } from "date-fns";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { SettingsCommand } from "./discord-commands/settings.js";

dotenv.config();
const DISCORD_APPLICATION_ID = process.env.DISCORD_APPLICATION_ID;
const DISCORD_GUIDE_ID = process.env.DISCORD_GUIDE_ID;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const COMMANDS = [SettingsCommand.data.toJSON()];
const DISCORD_REST = new REST({ version: "10" }).setToken(DISCORD_TOKEN);

(async function () {
    try {
        await DISCORD_REST.put(Routes.applicationGuildCommands(DISCORD_APPLICATION_ID, DISCORD_GUIDE_ID), { body: COMMANDS });
		console.log(format(Date.now(), "[yyyy-MM-dd HH:mm:ss]"));
        console.log("Discordのコマンドが登録されました。");
    } catch (error) {
		console.log(format(Date.now(), "[yyyy-MM-dd HH:mm:ss]"));
		console.error(error);
    }
})();