# Kena-EOS

Kena-EOS is an Enhanced Operational System designed to streamline AI agent creation and deployment. Integrating with Griffain and Arc frameworks, it provides advanced tools for building, customizing, and managing AI solutions.

## Features
- Wallet integration for secure transactions.
- Framework selection: Griffain for personal/specialized agents, Arc for multi-agent orchestration.
- Seamless on-chain and off-chain AI agent deployment.

## Getting Started
1. Clone the repository: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Integrations
All agent creation fees are routed through Griffain or Arc's native platforms, ensuring secure and transparent payments. Developer wallet tokens will remain **100% locked with Streamflow**.

## Project Structure
- `src/components/`: Reusable UI components.
- `src/pages/`: Application routes and API endpoints.
- `src/utils/`: Helper functions and services.
- `src/styles/`: Global styling.
- `src/constants/`: Static data like frameworks.

## License
This project is licensed under the MIT License.

Repository Structure:
kena-eos/
├── src/
│   ├── components/
│   │   ├── WalletConnectButton.js
│   │   ├── FrameworkSelection.js
│   │   └── Header.js
│   ├── pages/
│   │   ├── index.js
│   │   └── api/
│   │       ├── griffain/
│   │       │   └── createAgent.js
│   │       └── arc/
│   │           └── createAgent.js
│   ├── utils/
│   │   └── api.js
│   ├── styles/
│   │   └── globals.css
│   └── constants/
│       └── frameworks.js
├── public/
├── README.md
├── package.json
└── .gitignore
