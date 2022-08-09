describe('App Store footer button', () => {
  it('Contain app store page link with j&t app', () => {
    cy.visit('https://jobandtalent.com/')
    cy.contains('App store').should('have.attr', 'href').and('include', 'https://jobandtalent.onelink.me/2003021252?pid=web_mobile&c=itunesbutton&af_dp=jobandtalent%3A%2F%2F%2F&af_web_dp=https%3A%2F%2Fitunes.apple.com%2Fgb%2Fapp%2Fjobandtalent-job-search%2Fid665060895%3Fmt%3D8')
  })
})