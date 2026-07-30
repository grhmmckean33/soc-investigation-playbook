# SOC Investigation Playbook

This repository documents a repeatable methodology for investigating phishing emails in a Security Operations Centre (SOC) environment.

The playbook follows the complete investigation lifecycle, from initial triage through to incident reporting, using industry-standard tools and techniques including:

- Microsoft Defender Advanced Hunting (KQL)
- Email header analysis
- IOC extraction and enrichment
- Threat Intelligence (VirusTotal, AbuseIPDB, URLhaus)
- Scope and impact assessment
- User activity investigation
- MITRE ATT&CK mapping
- Evidence-based incident reporting

The repository also includes a complete phishing investigation case study demonstrating the playbook in practice.

## Live site

After enabling GitHub Pages, your site will be available at:

`https://github.com/grhmmckean33/soc-investigation-playbook`

## Project contents

- `index.html` — full investigation playbook
- `case-study.html` — worked phishing-analysis portfolio example
- `styles.css` — responsive visual design
- `script.js` — copy buttons for KQL queries
- `assets/images/` — process infographic and visual concept
- `assets/docs/` — submitted investigation report PDF

## Topics demonstrated

- Initial phishing triage and evidence preservation
- Header, authentication and sender analysis
- Social-engineering and email-content review
- IOC extraction and defanging
- URL reputation and behavioural-analysis principles
- Threat-intelligence enrichment
- Microsoft Defender Advanced Hunting with KQL
- Scope and user-activity investigations
- MITRE ATT&CK mapping
- Evidence-based classification and SOC reporting
- Control-focused security recommendations

## Publish with GitHub Pages

1. Create a new GitHub repository named `soc-investigation-playbook`.
2. Upload all files and folders from this project to the repository root.
3. Replace every instance of `YOUR-USERNAME` in `index.html` and this README.
4. Open **Settings → Pages** in the GitHub repository.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder, then click **Save**.
7. Wait for the deployment workflow to finish and open the published URL.

## Suggested repository description

> Evidence-led SOC investigation playbook and portfolio case study featuring Microsoft Defender KQL hunting, IOC analysis, threat intelligence, scope validation and incident reporting.

## Suggested GitHub topics

`soc` `phishing-analysis` `cybersecurity` `blue-team` `incident-response` `microsoft-defender` `kql` `threat-intelligence` `mitre-attack` `portfolio`

## Safety note

The website uses defanged indicators such as `hxxps://shor[.]by/shure`. Do not convert them into live links during reporting.

## Attribution

Replace this section with your name, LinkedIn URL and preferred contact details before publishing.
