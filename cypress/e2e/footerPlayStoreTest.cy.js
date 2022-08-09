describe('Play Store footer button', () => {
  it('Contains play store page link with j&t app', () => {
    cy.visit('https://jobandtalent.com/')
    cy.contains('Google play').should('have.attr', 'href').and('include', 'https://jobandtalent.onelink.me/2003021252?pid=web_mobile&c=google_play_Button&af_dp=jobandtalent%3A%2F%2F%2F&af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.jobandtalent.android%26hl%3Den')
  })
})