const electron = require('electron');
const [app, BrowserWindow] = [electron.app, electron.BrowserWindow];
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let page;

function openPage() {
  page = new BrowserWindow({width: 900, height: 680});
  page.loadURL(isDev ? 'http://localhost:3000' :
    `file://${path.join(__dirname, '../build/index.html')}`);
  page.webContents.openDevTools();
  page.on('closed', () => { page = null; });
}

app.on('ready', openPage);
app.on('window-all-closed',
  () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (page === null) openPage(); });
