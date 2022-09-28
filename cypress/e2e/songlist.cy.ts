describe('The Songs List With Data From The Api', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:1337/songs', {
      data: [
        { id: '1', title: 'Breaking the Law', artist: 'Judas Priest' },
        {
          id: '2',
          title: 'The Dragonfly',
          artist: 'Clutch',
          album: 'Elephant Riders',
        },
      ],
    });
    cy.visit('/playlists/songs');
  });

  it('should display some songs', () => {
    cy.get('[data-test-id="song-list"]').should('exist');
  });
  it('should not display the "you have no songs" warning', () => {
    cy.get('[data-test-id="playlist-list"]')
      .get('[data-test-id="no-songs-warning"]')
      .should('not.exist');
  });
});
