import { decorate, observable, action, computed } from "mobx"

class DrawerStore {
  drawers = {
    login: false,
    register: false,
    cart: false,
    marmonews: false
  }

  get drawerOpen() {
    const drawers = this.drawers
    return Object.keys(drawers).some(drawerName => {
      return drawers[drawerName]
    })
  }

  get activeDrawer() {
    return Object.keys(this.drawers).find(drawerName => this.drawers[drawerName] === true)
  }

  setActiveDrawer(drawerName) {
    for (const drawer in this.drawers) {
      this.drawers[drawer] = drawer === drawerName
    }
  }

  closeDrawer() {
    this.drawers = {
      login: false,
      register: false,
      cart: false,
      marmonews: false
    }
  }
}

decorate(DrawerStore, {
  drawers: observable,
  drawerOpen: computed,
  activeDrawer: computed,
  closeDrawer: action.bound,
  setActiveDrawer: action.bound
})

const drawerStore = new DrawerStore()
export default drawerStore
