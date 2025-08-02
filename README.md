# 🤖 CrissBot - Twitch Task Management System

A powerful TypeScript Twitch bot with Next.js overlay for real-time task management during streams.

## ✨ Features

- **Real-time Task Management**: Add, edit, complete, and delete tasks via Twitch chat
- **Interactive Overlay**: Beautiful centered overlay for OBS/streaming software
- **User-specific Tasks**: Each viewer manages their own task list
- **Live Updates**: Real-time synchronization between bot and overlay
- **Statistics Tracking**: Command usage and bot uptime statistics
- **OAuth Integration**: Secure Twitch authentication

## 🎮 Twitch Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `!add` | Add a new task | `!add Fix the navbar bug` |
| `!done` | Mark task as completed | `!done 1` |
| `!edit` | Edit existing task | `!edit 1 Update navbar styling` |
| `!mytasks` | Show your tasks | `!mytasks` |
| `!cleardone` | Clear completed tasks | `!cleardone` |
| `!taskhelp` | Show task commands | `!taskhelp` |
| `!commands` | List all commands | `!commands` |
| `!ping` | Test bot response | `!ping` |
| `!stats` | Show bot statistics | `!stats` |

## 🛠️ Tech Stack

### **Bot (TypeScript)**
- **TMI.js** - Twitch chat integration
- **Axios** - HTTP client for API calls
- **Node.js** - Runtime environment

### **Frontend/API (Next.js 14)**
- **React** - UI components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Socket.io** - Real-time updates
- **Next.js API Routes** - Backend endpoints

## 📁 Project Structure

```
twitch-task-bot-next/
├── bot/                          # TypeScript Twitch Bot
│   ├── src/
│   │   ├── commands/            # TaskCommands, UtilityCommands
│   │   ├── services/            # ApiService
│   │   ├── utils/               # CommandRegistry, StatsManager
│   │   └── CrissBot.ts          # Main bot class
│   ├── scripts/                 # OAuth token generation
│   └── .env                     # Bot credentials
├── criss_bot/                   # Next.js Frontend + API
│   ├── src/app/api/
│   │   └── tasks/               # Task management API
│   ├── src/components/
│   │   └── TaskDisplay.tsx      # Main overlay component
│   └── data/                    # JSON file storage
└── README.md
```

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Twitch Developer Account

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/crissbot-twitch-task-manager.git
   cd crissbot-twitch-task-manager
   ```

2. **Install bot dependencies**
   ```bash
   cd bot
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../criss_bot
   npm install
   ```

4. **Set up Twitch OAuth**
   ```bash
   cd ../bot
   npm run generate-token
   ```
   Follow the prompts to authenticate with Twitch.

5. **Configure environment**
   Create `bot/.env`:
   ```env
   TWITCH_BOT_USERNAME=your_bot_username
   TWITCH_CHANNEL=your_channel_name
   TWITCH_OAUTH_TOKEN=oauth:your_token_here
   API_BASE_URL=http://localhost:3000/api
   ```

### **Running the Application**

1. **Start the Next.js server**
   ```bash
   cd criss_bot
   npm run dev
   ```

2. **Start the bot** (in a new terminal)
   ```bash
   cd bot
   npm run dev
   ```

3. **Add overlay to OBS**
   - Add Browser Source
   - URL: `http://localhost:3000`
   - Width: 1920, Height: 1080

## 🎯 Usage

1. **In Twitch Chat**: Use commands like `!add Fix navbar bug`
2. **Overlay**: Tasks appear in real-time on your stream
3. **Management**: Complete with `!done 1`, edit with `!edit 1 New text`

## 🔧 Configuration

### **Bot Settings**
Edit `bot/src/CrissBot.ts` to customize:
- Command prefixes
- Rate limiting
- Response messages

### **Overlay Styling**
Modify `criss_bot/src/components/TaskDisplay.tsx` for:
- Visual appearance
- Positioning
- Animations

## 🔒 Sensitive Files

The following files contain sensitive data and are **NOT** pushed to GitHub:

- `bot/tokens.json` - OAuth tokens for Twitch authentication
- `criss_bot/data/tasks.json` - User task data
- `criss_bot/data/criss_bot_data.json` - Application data

### **If you have these files tracked in git:**
Run the provided script to remove them from tracking:
```bash
./remove-sensitive-files.ps1
```

### **Creating these files locally:**
- `tokens.json` is generated when you run `npm run generate-token` in the bot directory
- `tasks.json` and `criss_bot_data.json` are created automatically when the application runs

## 📡 API Endpoints

- `GET /api/tasks` - Fetch all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/[id]` - Edit task
- `PUT /api/tasks/[id]/done` - Mark task complete
- `DELETE /api/tasks` - Clear tasks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TMI.js** community for Twitch integration
- **Next.js** team for the amazing framework
- **Twitch** for the platform and API

## 📞 Support

If you encounter any issues or have questions:
- Open an [Issue](https://github.com/YOUR_USERNAME/crissbot-twitch-task-manager/issues)
- Check existing issues for solutions
- Join the discussion in Issues

---

**Happy Streaming! 🎮✨**