//Created a function that returns a license badge based on which license is passed in
//If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
  } else {
    return '';
  }
}
//Created a function that returns the license link
//If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3') {
    return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
}

//Created a function that returns the license section of README
//If there is no license, returns an empty string
function renderLicenseSection(license) {

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (licenseBadge && licenseLink) {
    return `## License
    This project is licensed under the ${license} license.  
    For more information, please refer to the ${licenseLink}.`;
  } else {
    return '';
  }
}

//Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  
  - [Usage](#usage)
  
  - [License](#license)

  - [Contributing](#installation)

  - [Tests](#tests)

  - [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

    ${data.install}

  ## Usage

    ${data.usage}

  Screen-share video of the README Generator Application:

    [![readme-generator]

  ${renderLicenseSection(data.license)}

    ${data.license}

  ## Contributing

    ${data.contribute}

  ## Tests

    To run tests, run the following command:

    ${data.test}

  ## Questions

    If you have any questions about the repository, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).`;
}

module.exports = generateMarkdown;
