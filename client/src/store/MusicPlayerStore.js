import { decorate, observable, action } from "mobx"

class MusicPlayerStore {
  panels = {
    radioStations: false,
    history: false
  }

  togglePanel(panelName) {
    for (const panel in this.panels) {
      const panelActive = this.panels[panel]
      this.panels[panel] = panel === panelName && !panelActive
    }
  }
}

decorate(MusicPlayerStore, {
  panels: observable,
  filterTypes: observable,
  togglePanel: action.bound
})

const musicPlayerStore = new MusicPlayerStore()
export default musicPlayerStore
