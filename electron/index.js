const { app, BrowserWindow } = require('electron')
let win

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    frame: false,
  })
  win.on('ready-to-show', () => {
    win.maximize()
  })
  // win.loadFile('public/index.html')
  win.loadURL('http://localhost:3000/')

  win.setMenu(null)
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('win-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
