

# 🏏 Online Cricket Management System

An interactive and modern web application designed to manage cricket tournaments, live scores, upcoming matches, and player/team statistics.

## 🚀 Features

* 📅 **Tournament Management** – View and manage upcoming and ongoing tournaments.
* 📊 **Live Score Updates** – Real-time score display and match progression.
* 🧾 **Match Cards** – Detailed display of upcoming and current matches.
* 🔍 **Player & Team Info** – Extendable support for player stats and team data.
* 🌐 **Modern UI** – Built with React, TypeScript, and Vite for fast and responsive experience.
* 📁 **Environment Configuration** – `.env.local` file support for secure API keys.

## 🛠️ Tech Stack

* **Frontend**: React, TypeScript, Tailwind CSS
* **Bundler**: Vite
* **Data Handling**: REST API (via `cricketService.ts`)
* **State Management**: Local state (can be extended with Redux/Context)
* **Deployment Ready**: Optimized for modern builds

## 📂 Project Structure

```
src/
├── components/
│   ├── ErrorDisplay.tsx
│   ├── LiveScoreCard.tsx
│   ├── LoadingSpinner.tsx
│   ├── Navbar.tsx
│   ├── TournamentCard.tsx
│   └── UpcomingMatchCard.tsx
├── services/
│   └── cricketService.ts
├── types/
│   └── types.ts
├── constants.ts
├── App.tsx
├── index.tsx
public/
└── index.html
```

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cricket-management-system.git
cd cricket-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file and add your API key or other secrets:

```env
VITE_CRICKET_API_KEY=your_api_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## 📌 Future Enhancements

* Admin dashboard for team/player registration
* Match highlights and statistics
* User authentication
* Push notifications for live matches

## 📝 License

This project is licensed under the MIT License.

---

