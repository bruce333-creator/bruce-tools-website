# Deployment Instructions

This project is fully configured for deployment on Vercel.

## 1. Push to GitHub
1. Initialize a git repository in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on GitHub.
3. Link the remote and push:
   ```bash
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git branch -M main
   git push -u origin main
   ```

## 2. Deploy on Vercel
1. Go to [Vercel](https://vercel.com/) and log in with your GitHub account.
2. Click **Add New...** -> **Project**.
3. Import the GitHub repository you just created.
4. Leave all default settings (Framework Preset: Next.js).
5. Click **Deploy**.

## Local Development
To run the project locally (requires Node.js):
1. Run `npm install` to install dependencies.
2. Run `npm run dev` to start the development server.
3. Open `http://localhost:3000` in your browser.
