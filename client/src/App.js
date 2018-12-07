import React from "react"
import "./icons/icomoon.css"
import "./global.css"
import "normalize.css"
import "./styles/ReactResponsiveSelect.scss"
import Main from "./components/Main"
import DrawerNav from "./components/DrawerNav"
import MusicPlayer from "./components/MusicPlayer"
import MusicPlayerPanels from "./components/MusicPlayerPanels"

const App = () => {
  return (
    <div className="App">
      <DrawerNav />
      <Main />
      <MusicPlayerPanels />
      <MusicPlayer />
    </div>
  )
}

export default App
