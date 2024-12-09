const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V2Y7iShL9l3yFvl4Sb0glTXoDih1DYRiNRomdthO8kU4DplX/PnJRpWrdpbtGaj+l7PSJExHnRHwHeUErMiYN6H8HJaMXzEl75E1JQB+YdRQRBrogxByDPtDtpR/i23amwj1d8H1wH5KxF62EUAhPcZbSzWg/koK5Jy6fwGsXlPUhpcFPAM/TXMpiN6ufa7HCbEKwcZR21PaF/WgdKqzZ8JIlL/7ILZ7Aa4uIKaN57JQJyQjD6Zg0C0zZ1+jHY3lq4cV9txd1yppYt7Fwtzs78RJdE0Wql8Q8n4eF0JHFr9GfIWtvLNZ7Vxt2XHicjtVFE6bFKpFsN9pmt0N+RlUchepp96Bf0Tgn4SgkOae8+XLdt0PNW0tudfJUusyHHRuXZvwyu9zoWjgLtiM4u0GSywPZH32NOCtGKUN4AmerxXJu3iZFvPWPG7GXW2PD2ZqNHV+m3mTCkumPxBfsQyun/6fu4miQvuSCuuZzT9gYyt3axucXX5ITV/S3wUbLVpZxW/meH3+Nfm/rCq5AWVwvD+7YSC2+UPKkWtgmjaLlmRS0mPnX0dXZ6p/0Ma/Zz1gOFBOWsl7Daed0TTt7YniqdO8Zij9Hh7EaIU2Pb5eFI+rp2BnN3QBN2UUupPViPr4JxjBsdmM8nvmwHEDfPGPtKIcofnrL6ESaUQj60msXMBLTijPMaZG/vYNyF+Dw4pGAEf5WXrCKZmfNuDYCSaLqeHYbyBfr4Z7s/OBYuGF0kqmCOvexCeMn0AUlKwJSVSQc0ooXrJmSqsIxqUD/32+dapNmJCs4eaYh6ANJ0/SeCEWjB/9V/XFNMK9wWf6REw66IGJFNiWgz1lNuuDtfk9RbdN1TdXSFUt2JEtBkoEUaPV0Q7Rt1GaYPWKuaUYqjrMS9CUNQg3qUIOv3d9CQ7ZcF2qO2DNFQ4YSQo5p9jQZWYphqVoP/oJG7zfRQIarq7arQsMyoCSaEEJZQrJiay7Ukar/gobym2gohmEgQzUsWdUVpIi6o+uKYluqZbiOBZVf0vhPF+Tkxh+ebpUIpS6IKKv4Jq/LtMDhh+E/PuIgKOqce00eWO2BMND/4TXhnOZx1SZW55gFCb0Qq80D9COcVuS1C0JyoQFp8QCVk8keas6aNtLd5//149pDcavmpMgfVw4GVhQDwm9iTxG/9STt8E0PQu3bQRFV2dADCWoqaMvxGKftP/88QlOG8ks5X3amz51MO286prXSRTusd28OfdiSMBJ+VPmAg1NdrosTyX+Ce9jIR3l1nZ0HQzU3L4lljOrldrXl+fIH3IfdQf/75wqzirDFQ8OJ4g+QBNputXH+LIa+9Fc55Li9C+oKc3LjESNEbmO9N6JFCQnHNK1AH1gTleiXjeksDh2ZFYMBcmJkxQh8Nu5jOD6GTy2NjuLgYN03s6RTjeezaCuXYeZoJboebPN5P5s1FQ+F2Lk+/Q0I6INwMZukz8Zl6uqlLy+V6WlW2vU0tiph7STUM1bhwh++dJQYrZ/3k1NZL693NO8lnkiFXtp00nvSDPYvwV0Z2c+wPNd1ZreT9ENAPwYbXKURq6rh/G4sJ14aHaaHwWCiOufEX1/ynN0EXiHf1LILx/7UHLoofbmmKWFbvvWU4/DgF4tQDZbhDuq9w/15FV2GNnqM7be1kb6va/o+UB9yiyh5237vrfhFwz51L752f0B436b/oC3zwL2RYWbXSrJ3EbOOR1/iZ3+fzNXldHC9etv1OmATP+qZU/DaGrpMMY8KloE+wHnIChqCLkhxxdGndf9uGkhdkDWoLD2O+YfjAWof956C1/8BNE3O7SgKAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "AYYAN XD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " AYYAN XD",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'AYYAN XD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

