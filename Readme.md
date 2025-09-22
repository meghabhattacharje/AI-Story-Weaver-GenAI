# 📝 AI Story Weaver

An interactive story-building web app powered by **Google Gemini AI**.  

It's a collaborative storytelling experience where you and a creative AI (powered by Google's Gemini model) write a story together.The application starts with an introductory sentence from the AI to set the scene.Then the user types the next paragraph and sends it, and then the AI continues the narrative.

## 🚀 Features
- ✨ AI-assisted story generation using Gemini API  
- ⚡ Built with **React + Vite + TypeScript**  
- 🎨 Clean and minimal UI with TailwindCSS  
- 🔑 Secure API key handling via `.env` file  
- 🔄 Real-time story continuation 


### Where is the Project Running?
-  This is a frontend-only application. This means it runs entirely in your web browser. There is no custom backend server.
-  When you open index.html, your browser loads the HTML structure and the necessary JavaScript code.
-  The React library then takes control of the page, rendering the user interface you see.
-  When you submit your part of the story, your browser makes a direct, secure call to the Google GenAI API servers, sending the story context and your API key.
-  The GenAI servers process the request and send the response back directly to your browser, which then displays it on the screen.


## 🛠️ Setup & Installation

1. **Clone the repo**
2. **Install dependencies** 
  - npm install
3. **Add your API key** 
  - replace "YOUR_GEMINI_API_KEY" from .env file with your Gemini API key
4. **Start development server**
  - npm run dev
  - Open http://localhost:5173 in your browser.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.