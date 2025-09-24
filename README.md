# AI Chat Template

A clean, production-ready template for building AI-powered chat applications with Next.js and OpenAI's Responses API.

## 🚀 Quick Start

### 1. Use this template
Click the **"Use this template"** button on GitHub to create a new repository from this template.

### 2. Clone your new repository
```bash
git clone https://github.com/yourusername/your-chat-app.git
cd your-chat-app
```

### 3. Install dependencies
```bash
npm install
```

### 4. Set up environment variables
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add your OpenAI API key
OPENAI_API_KEY=your_openai_api_key_here
```

### 5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your chat app!

## 🎯 Features

- **Clean UI**: Modern, responsive chat interface
- **Streaming Responses**: Real-time AI responses
- **Production Ready**: Optimized for deployment
- **Customizable**: Easy to modify for your specific needs
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling

## 🛠️ Customization

### Change the AI Behavior
Edit `config/constants.ts` to customize the AI's personality and behavior:

```typescript
export const DEVELOPER_PROMPT = `
You are a helpful assistant for [YOUR USE CASE].
Help users with [SPECIFIC TASKS].
`;
```

### Update Branding
Modify `app/layout.tsx` to change:
- App title and description
- Favicon
- Colors and fonts

### Add Custom Functions
Re-enable the functions system in `config/functions.ts`:

```typescript
export const functionsMap = {
  your_function: async (params) => {
    // Your custom logic here
    return result;
  },
};
```

## 🚀 Deployment

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Add your `OPENAI_API_KEY` in Netlify's environment variables
3. Deploy!

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Add your `OPENAI_API_KEY` in Vercel's environment variables
3. Deploy!

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── turn_response/ # Main chat API
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── assistant.tsx     # Main assistant component
│   ├── chat.tsx          # Chat interface
│   └── message.tsx       # Message display
├── config/               # Configuration files
│   ├── constants.ts      # App constants and AI prompt
│   ├── functions.ts      # Custom functions
│   └── tools-list.ts     # Available tools
├── lib/                  # Utility libraries
│   ├── assistant.ts      # Assistant logic
│   └── tools/            # Tool configurations
└── stores/               # State management (Zustand)
    ├── useConversationStore.ts
    └── useToolsStore.ts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

This is a template repository. Feel free to:
- Fork it for your own projects
- Submit issues for improvements
- Create pull requests for bug fixes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)