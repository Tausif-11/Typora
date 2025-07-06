# Typora - Real-time Collaborative Code Editor

A production-ready, real-time collaborative code editor built with Next.js 14, TypeScript, and Monaco Editor. Inspired by Devin's UI design with a minimal, dark-mode-first approach.

![Typora Screenshot](https://via.placeholder.com/1200x630/1e1e1e/ffffff?text=Typora+Collaborative+Code+Editor)

## 🚀 Features

### Core Features

- **Real-time Collaboration**: See your teammates' cursors, edits, and presence in real-time
- **Monaco Editor Integration**: Full VS Code experience with syntax highlighting and IntelliSense
- **Session-based Sharing**: Each editor has a unique shareable link
- **Multi-language Support**: Support for 50+ programming languages
- **Dark Mode First**: Beautiful dark theme optimized for developers

### Authentication & Security

- **NextAuth.js Integration**: GitHub OAuth and email authentication
- **Role-based Access Control**: Owner, Editor, and Viewer roles
- **Secure Sessions**: JWT-based authentication with secure session management

### Collaboration Features

- **Live Cursor Tracking**: See where your teammates are typing
- **Presence Indicators**: Know who's online and active
- **Real-time Sync**: Instant synchronization of code changes
- **Conflict Resolution**: Smart merging of concurrent edits

### Developer Experience

- **GitHub Integration**: Connect repositories and push changes directly
- **File Management**: Multi-file support with file explorer
- **Auto-save**: Automatic saving to PostgreSQL database
- **Export Options**: Download code as files or share via GitHub

### Performance & SEO

- **Next.js 14 App Router**: Latest React features and optimizations
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Complete meta tags, Open Graph, and sitemap
- **Lighthouse Score**: Optimized for 90+ performance score
- **Mobile Responsive**: Works perfectly on all devices

## 🛠 Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN/UI** - Modern component library
- **Monaco Editor** - VS Code's editor component
- **Framer Motion** - Smooth animations

### Backend & Database

- **NextAuth.js** - Authentication solution
- **Prisma ORM** - Type-safe database client
- **PostgreSQL** - Primary database (Supabase)
- **Socket.IO** - Real-time communication

### Real-time Collaboration

- **Yjs** - CRDT for conflict-free collaboration
- **Y-WebSocket** - WebSocket provider for Yjs
- **Y-Monaco** - Monaco Editor integration

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Unit testing
- **Cypress** - E2E testing

## 📦 Installation

### Prerequisites

- Node.js 18+
- PostgreSQL database
- GitHub OAuth app (optional)

### 1. Clone the Repository

```bash
git clone https://github.com/Tausif-11/typora.git
cd typora
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the environment template and configure your variables:

```bash
cp env.example .env.local
```

Fill in your environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/typora"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# GitHub OAuth
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"

# Email (for NextAuth email provider)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@typora.com"
```

### 4. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# (Optional) Open Prisma Studio
npm run db:studio
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**
   - Push your code to GitHub
   - Connect your repository to Vercel

2. **Environment Variables**
   - Add all environment variables in Vercel dashboard
   - Ensure `NEXTAUTH_URL` points to your production domain

3. **Database Setup**
   - Use Supabase or any PostgreSQL provider
   - Update `DATABASE_URL` in Vercel environment variables

4. **Deploy**
   ```bash
   npm run build
   ```

### Manual Deployment

1. **Build the Application**

   ```bash
   npm run build
   npm start
   ```

2. **Environment Configuration**
   - Set production environment variables
   - Configure your database connection
   - Set up SSL certificates

## 🔧 Configuration

### GitHub OAuth Setup

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set Authorization callback URL to: `https://your-domain.com/api/auth/callback/github`
4. Copy Client ID and Client Secret to your environment variables

### Email Provider Setup

1. Configure your SMTP settings in environment variables
2. For Gmail, use App Passwords instead of regular passwords
3. Test email functionality in development

### Database Configuration

1. **Supabase (Recommended)**
   - Create a new Supabase project
   - Copy the connection string to `DATABASE_URL`
   - Run `npm run db:push` to create tables

2. **Local PostgreSQL**
   - Install PostgreSQL locally
   - Create a database named `typora`
   - Update connection string accordingly

## 📁 Project Structure

```
typora/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── editor/            # Main editor page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # ShadCN/UI components
│   ├── editor.tsx        # Monaco editor wrapper
│   ├── sidebar.tsx       # File explorer sidebar
│   └── top-bar.tsx       # Editor top bar
├── lib/                  # Utility functions
│   ├── prisma.ts         # Database client
│   └── utils.ts          # Common utilities
├── hooks/                # Custom React hooks
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
└── public/               # Static assets
```

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### E2E Tests

```bash
npm run test:e2e
```

### Type Checking

```bash
npm run type-check
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Monaco Editor** - For the excellent code editor
- **NextAuth.js** - For seamless authentication
- **ShadCN/UI** - For beautiful components
- **Vercel** - For hosting and deployment
- **Supabase** - For database hosting

## 📞 Support

- **Email**: tausifmohammad54@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/Tausif-11/typora/issues)
- **Documentation**: [Read the docs](https://typora.vercel.app/docs)

## 🚀 Roadmap

- [ ] **Advanced Collaboration Features**
  - [ ] Voice chat integration
  - [ ] Screen sharing
  - [ ] Code review tools

- [ ] **Enhanced Editor Features**
  - [ ] AI code completion
  - [ ] Debugger integration
  - [ ] Terminal integration

- [ ] **Team Management**
  - [ ] Team workspaces
  - [ ] Project templates
  - [ ] Advanced permissions

- [ ] **Performance Improvements**
  - [ ] WebAssembly optimizations
  - [ ] Service worker caching
  - [ ] CDN integration

---

Built with ❤️ by [Tausif Mohammad](https://github.com/Tausif-11)
