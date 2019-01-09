// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, shell } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  if (process.platform === 'darwin') {
    const template = [
      {
        label: 'Application',
        submenu: [
          {
            label: '退出',
            accelerator: 'Command+Q',
            click: function() {
              app.quit()
            }
          }
        ]
      },
      {
        label: '编辑',
        submenu: [
          { label: '复制', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
          { label: '粘贴', accelerator: 'CmdOrCtrl+V', selector: 'paste:' }
        ]
      },
      {
        label: '帮助',
        submenu: [
          {
            label: '子弹短信官方',
            click: function() {
              shell.openExternal('https://www.zidanduanxin.com')
            }
          },
          {
            label: '作者主页',
            click: function() {
              shell.openExternal('https://mengqinghe.com')
            }
          },
          {
            label: '项目仓库',
            click: function() {
              shell.openExternal('https://github.com/mqhe2007/bullet-message-desktop-client')
            }
          }
        ]
      }
    ]
    Menu.setApplicationMenu(Menu.buildFromTemplate(template))
  } else {
    Menu.setApplicationMenu(null)
  }
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 768,
    useContentSize: true
  })

  // and load the index.html of the app.
  mainWindow.loadURL('https://im.zidanduanxin.com/')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
