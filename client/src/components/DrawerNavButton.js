import React, { PureComponent, Fragment } from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import styles from "../styles/DrawerNavButton.module.scss"

class DrawerNavButton extends PureComponent {
  static defaultProps = {
    active: false,
    activeDrawer: ""
  }

  state = { showTooltip: false }

  toggleTooltip = () => {
    this.setState({ showTooltip: !this.state.showTooltip })
  }

  handleOnClick = () => {
    const { drawerName, activeDrawer, setActiveDrawer, closeDrawer } = this.props
    activeDrawer === drawerName ? closeDrawer() : setActiveDrawer(drawerName)
  }

  render() {
    const { drawerName } = this.props
    const classNames = cx(styles.navBtn, {
      [styles.active]: this.props.active
    })

    return (
      <div
        className={classNames}
        onClick={this.handleOnClick}
        onMouseOver={this.toggleTooltip}
        onMouseOut={this.toggleTooltip}
      >
        {this.state.showTooltip && (
          <Fragment>
            <div className={styles.toolTip}>{drawerName}</div>
            <div className={styles.toolTipArrow} />
          </Fragment>
        )}
        <span className={`${styles.icon} icon-${drawerName}`}>
          {/* {drawerName === "cart" && <span className={styles.indicator}>5</span>} */}
        </span>
      </div>
    )
  }
}

DrawerNavButton.propTypes = {
  active: PropTypes.bool.isRequired,
  activeDrawer: PropTypes.string,
  drawerName: PropTypes.string.isRequired,
  setActiveDrawer: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired
}

export default DrawerNavButton
