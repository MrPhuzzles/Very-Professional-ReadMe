
function renderLicenseBadge(license) {
  licenseBadge = ''
  switch (license) {
    case 'MIT License':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU GPLv3':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  return licenseBadge;
}

function renderLicenseLink(license) {
  licenseLink = ''
  switch (license) {
    case 'MIT License':
      licenseLink = '[MIT License](https://choosealicense.com/licenses/mit/)';
      break;
    case 'GNU GPLv3':
      licenseLink = '[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)';
      break;
    case 'Apache License 2.0':
      licenseLink = '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License:
  Please click the link to see details about your license
  ${renderLicenseLink(license)}
`
  } else {
    return ''
  }
}

function renderLicenseInTableContents(license) {
  if (license) {
    return `* [License](#license)
    `
  } else {
    return ''
  }
}

function generateMarkdown(data) {
  const projectInfo = data
  return `
  # ${projectInfo.title}
  ${renderLicenseBadge(projectInfo.license)}
  ## Description
    ${projectInfo.description}
  ## Table of Contents
  * [Project Title](#${projectInfo.title})
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#tests)
  * [Contributions](#contributions)
  * [Questions](#questions)
  ${renderLicenseInTableContents(projectInfo.license)}
  ## Installation
    Please follow these installation instructions:
    ${projectInfo.installation}
  ## Usage
    Please follow these usage guidelines:
    ${projectInfo.usage}
  ## Tests
    Please feel free to run these explained tests!
    ${projectInfo.testInstructions}
  ## Contributions
    Thank you to ${projectInfo.contributions} for all of your help along the way!
  ## Questions
    If you have any questions please feel free to reach out to me via email or check out my GitHub page!
    * [My GitHub](https://github.com/${projectInfo.github}/)
    * [e-mail me at ${projectInfo.email}](mailto:${projectInfo.email})
  ${renderLicenseSection(projectInfo.license)}
`;
}

module.exports = generateMarkdown;
