describe('The Songs List With No Data From the Api', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:1337/songs', {
      data: [],
    });
    cy.visit('/playlists/songs');
  });

  it('should not display song list', () => {
    cy.get('[data-test-id="playlist-list"]')
      .get('[data-test-id="song-list"]')
      .should('not.exist');
  });

  it('should display the "you have no songs" warning', () => {
    cy.get('[data-test-id="no-songs-warning"]').should('exist');
  });
});
