const {app, BrowserWindow, Tray} = require('electron');


let appWin;

createWindow = () => {
    appWin = new BrowserWindow({
        width: 1280,
        height: 720,
        title: 'LOLICONES LR',
        resizable: true,
        webPreferences:{
            preload: `${app.getAppPath()}/preload.js`
        }
    });
    
    
     appWin.loadURL(`file://${__dirname}/dist/browser/index.html`);
    // appWin.loadURL(
    //     url.format({
    //        pathname: path.join(__dirname, "/dist/browser/index.html"),
    //        protocol: "file:",
    //        slashes: true, 
    //     }) 
    // );
    

    // appWin.setMenu(); //PODES ACTIVARLO PARA VER EL MENU DE ELECTRON REY

    appWin.on('closed', () => {
        appWin = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => app.quit());
