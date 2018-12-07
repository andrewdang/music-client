describe("Vocal Filters", () => {
  beforeEach(() => {
    cy.visit("/browse")
    cy.get("[data-cy=energy-filter-type]")
      .click()
      .should(filterTypeBtn =>
        expect(filterTypeBtn)
          .attr('class')
          .to.contain('FilterTypeButton_active')
      )
  })

  it("can apply/unapply energy filters", () => {
    applyAndExpectFilterApplied('Medium-High')
    applyAndExpectFilterApplied('Low')
    applyAndExpectFilterApplied('Medium')
    applyAndExpectFilterApplied('High')
    applyAndExpectFilterApplied('Low-Medium')

    unapplyAndExpectUnapplied('Medium')
    unapplyAndExpectUnapplied('High')
    unapplyAndExpectUnapplied('Low')
    unapplyAndExpectUnapplied('Medium-High')
    unapplyAndExpectUnapplied('Low-Medium')
  })

  const applyAndExpectFilterApplied = (filterName) => {
    cy.get(`[data-cy=${filterName}-filter]`)
      .click()
      .should(energyFilterTile =>
        expect(energyFilterTile)
          .attr("class")
          .to.contain("filter_applied")
      )
  }

  const unapplyAndExpectUnapplied = filterName => {
    cy.get(`[data-cy=${filterName}-filter]`)
    .click()
    .should(energyFilterTile =>
      expect(energyFilterTile)
        .attr("class")
        .to.not.contain("filter_applied")
    )
  }
})
