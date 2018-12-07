describe("Vocal Filters", () => {
  beforeEach(() => {
    cy.visit("/browse")
  })

  it("can only apply instrumental or vocals, not both", () => {
    cy
      .get("[data-cy=Instrumental-filter]")
      .click()
      .should(instrumentalFilterTile =>
        expect(instrumentalFilterTile)
          .attr("class")
          .to.contain("filter_applied")
      )
    cy
      .get("[data-cy=Vocals-filter]")
      .click()
      .should(vocalFilterTile =>
        expect(vocalFilterTile)
          .attr("class")
          .to.contain("filter_applied")
      )
    cy.get("[data-cy=Instrumental-filter]").should(instrumentalFilterTile =>
      expect(instrumentalFilterTile)
        .attr("class")
        .to.not.contain("filter_applied")
    )
  })

  it("can apply positive or negative male/female filtering", () => {
    cy
      .get("[data-cy=Female-filter]")
      .click()
      .should(femaleFilterTile =>
        expect(femaleFilterTile)
          .attr("class")
          .to.contain("filter_applied")
      )
    cy
      .get("[data-cy=Male-filter]")
      .click()
      .click()
      .should(maleFilterTile =>
        expect(maleFilterTile)
          .attr("class")
          .to.contain("filter_negativeApplied")
      )
  })
})
