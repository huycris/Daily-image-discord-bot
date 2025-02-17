/**
 * Function that checks if the user that sent the message(command) is admin,
 * if not, it will return false and reply with further instructions.
 *
 * @param message the message with the command
 * @return boolean true|false True if the user is admin, otherwise false.
 */
import {Message} from "discord.js";
import permissionErrorHandler from "../errors/permission-error-handler";

export default function checkIfUserIsAdmin(message: Message): boolean {
    if (message.member.hasPermission("SEND_MESSAGES")) {
        return true;
    } else {
        const msgToBeSend = ':interrobang:This command can only be executed by an **administrator**!';
        message.reply(msgToBeSend).catch((e: any) => permissionErrorHandler(msgToBeSend, e));
        return false;
    }
}
