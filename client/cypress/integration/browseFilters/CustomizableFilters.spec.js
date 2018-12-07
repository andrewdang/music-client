describe("Customizable Filters", () => {
  beforeEach(() => {
    cy.visit("/browse")
    cy.get("[data-cy=customizable-filter-type]")
      .click()
      .should(filterTypeBtn =>
        expect(filterTypeBtn)
          .attr('class')
          .to.contain('FilterTypeButton_active')
      )
  })

  it("can only apply yes or no, not both", () => {
    cy.get("[data-cy=Yes-filter]")
      .click()
      .should(yesFilterTile =>
        expect(yesFilterTile)
          .attr("class")
          .to.contain("filter_applied")
      )

    cy.get("[data-cy=No-filter]")
      .click()
      .should(noFilterTile => {
        expect(noFilterTile)
          .attr("class")
          .to.contain("filter_applied")
      })

    cy.get("[data-cy=Yes-filter]").should(yesFilterTile =>
      expect(yesFilterTile)
        .attr("class")
        .to.not.contain("filter_applied")
    )

    cy.get("[data-cy=Yes-filter]").click()
    cy.get("[data-cy=No-filter]").should(noFilterTile =>
      expect(noFilterTile)
        .attr("class")
        .to.not.contain("filter_applied")
    )
  })
})
