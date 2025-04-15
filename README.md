# EQBrain

EQBrain is a modern, centralized platform for EverQuest (EQ) game information, specifically focusing on Time-Locked Progression (TLP) servers. Our mission is to aggregate and modernize information that is currently scattered across multiple outdated websites, providing a superior user experience for both new and veteran players.

## 🌟 Vision

We believe that EverQuest's rich history and complex gameplay mechanics deserve a modern, centralized information platform. EQBrain aims to:
- Centralize accurate, up-to-date EQ information
- Provide intuitive navigation and search capabilities
- Support multiple TLP servers with their unique variations
- Create a vibrant community of EQ players and enthusiasts
- Modernize the way players access and share game information

## 🚀 Features

### Current
- **Data Aggregation**: Centralized database of EQ information from multiple sources
- **Modern UI**: Inspired by modern gaming databases like wowhead.com
- **TLP Server Support**: Special focus on Time-Locked Progression servers
- **Community Integration**: Discord OAuth integration and user-generated content

### Coming Soon
- Character tracking
- Item recommendations
- Quest progression tracking
- Trading system
- Mobile application support

## 🛠️ Technology Stack

- **Frontend**: React with TypeScript and Tailwind CSS
- **Backend**: Node.js/Express
- **Database**: Supabase (PostgreSQL) with Row Level Security
- **Authentication**: Discord OAuth
- **Data Collection**: Playwright for web scraping
- **Architecture**: Monorepo structure for efficient development

## 📊 Database Schema

Our database is built on Supabase and currently includes:

### Zones Table
The `zones` table stores comprehensive information about EverQuest zones, including:
- Basic information (name, short_name, level_range, expansion)
- Zone details (type, instance type, key requirements)
- Location data (safe and succor coordinates)
- Gameplay mechanics (xp modifiers, binding rules)
- Connected zones (stored as JSONB)
- Timestamps for creation and updates

The table is secured with Row Level Security (RLS) policies to ensure proper access control.

## 📚 Getting Started

For detailed setup instructions and contribution guidelines, please see our [CONTRIBUTING.md](CONTRIBUTING.md) document.

Quick start:
```bash
# Clone the repository
git clone https://github.com/your-username/eqbrain.git
cd eqbrain

# Install dependencies
npm install

# Start development servers
npm run dev
```

## 🤝 Contributing

We welcome contributions from the EverQuest community! Whether you're a developer, content creator, or passionate player, there's a place for you in our project. Check out our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get involved.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the EverQuest community and its rich history
- Built with the support of TLP server players
- Powered by open-source technologies

## 📞 Contact

Have questions or suggestions? We'd love to hear from you!
- Discord: [Join our community]
- Twitter: [@eqbrain]
- GitHub: [EQBrain]

## 🌱 Project Status

EQBrain is currently in active development. We're working hard to bring you the best possible platform for EverQuest information. Stay tuned for updates and new features!

---

Made with ❤️ by the EQBrain team