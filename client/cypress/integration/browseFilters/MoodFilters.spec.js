describe("Mood Filters", () => {
  beforeEach(() => {
    cy.visit("/browse")
    cy.get("[data-cy=mood-filter-type]")
      .click()
      .should(filterTypeBtn =>
        expect(filterTypeBtn)
          .attr('class')
          .to.contain('FilterTypeButton_active')
      )
  })

  it("removes previous selected value from dropdown", () => {
    applyFirstThreeMoods()

    cy.get("#rrs-isTile-label").should(isTile => {
      expect(isTile).to.contain("A Journey")
    })

    cy.get("#rrs-andOneTile-label").should(andOneTile => {
      expect(andOneTile).to.not.contain("A Journey")
      expect(andOneTile).to.contain("Aggressive")
    })

    cy.get("#rrs-andTwoTile-label").should(andTwoTile => {
      expect(andTwoTile).to.not.contain("Aggressive")
      expect(andTwoTile).to.contain("Angelic")
    })
  })

  it("shifts values to the left", () => {
    applyFirstThreeMoods()

    cy.get("[data-cy=isTile-filter] .icon-circle-x").click({ force: true })
    cy.get("#rrs-isTile-label").should(isTile => {
      expect(isTile).to.not.contain("A Journey")
      expect(isTile).to.contain("Aggressive")
    })
    cy.get("#rrs-andOneTile-label").should(andOneTile => {
      expect(andOneTile).to.not.contain("Aggressive")
      expect(andOneTile).to.contain("Angelic")
    })

    cy.get("[data-cy=isTile-filter] .icon-circle-x").click({ force: true })
    cy.get("#rrs-isTile-label").should(isTile => {
      expect(isTile).to.not.contain("Aggressive")
      expect(isTile).to.contain("Angelic")
    })
    cy.get("#rrs-andOneTile-label").should(andOneTile => {
      expect(andOneTile).to.not.contain("Angelic")
    })
  })

  const applyFirstThreeMoods = () => {
    cy.get("[data-cy=isTile-filter]").click()
    cy.get("#rrs-isTile-menu [data-key=1]").click() // selects A Journey

    cy.get("[data-cy=andOneTile-filter]").click()
    cy.get("#rrs-andOneTile-menu [data-key=1]").click() // selects Aggressive

    cy.get("[data-cy=andTwoTile-filter]").click()
    cy.get("#rrs-andTwoTile-menu [data-key=1]").click() // selects Angelic
  }
})
