/* eslint-disable prettier/prettier */
// 1. Import Modules
const electronInstaller = require('electron-winstaller')
const path = require('path')

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
// appDirectory: "C:\\Users\sdkca\Desktop\OurCodeWorld-win32-x64",
// const APP_DIR = path.resolve(__dirname, './OurCodeWorld-win32-x64')
const APP_DIR = path.resolve(__dirname, './OurCodeWorld-win32-x64/')
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer",
const OUT_DIR = path.resolve(__dirname, './windows_installer_novo')

const DIST_EXE = path.resolve(__dirname, '.')

console.log(APP_DIR)
console.log(OUT_DIR)

// NB: Use this syntax within an async function, Node does not have support for
//     top-level await as of Node 12.

async function teste() {
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: APP_DIR,
      outputDirectory: OUT_DIR,
      authors: 'My App Inc.',
      exe: 'OurCodeWorld.exe'
    })
    console.log('It worked!')
  } catch (e) {
    console.log(`No dice: ${e.message}`)
  }
}

teste()
