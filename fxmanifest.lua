fx_version 'cerulean'
game 'gta5'

author 'GTA5S.NET'
description 'GTA5S Loading Screen'
version '1.0.0'

lua54 'yes'

loadscreen 'web/index.html'

shared_script 'config.lua'
server_script 'server.lua'
client_script 'client.lua'

files {
    'web/index.html',
    'web/style.css',
    'web/script.js',
    'web/config.js',
    'web/assets/avatars/*.png',
    'web/assets/logo.png',
    'web/assets/background.mp4',
    'web/assets/music/*.mp3',
    'web/assets/music/*.png',
}

loadscreen_manual_shutdown 'yes'

loadscreen_cursor 'yes'

escrow_ignore {
    'web/*',
    'client.lua',
    'config.lua',
}


dependency '/assetpacks'