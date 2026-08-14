# Personal Portfolio Website

## What it is
A clean, lightweight personal portfolio website built using React, Vite, and Lucide React.

## What it does
* **Showcase Sections**: Highlights professional profiles, skills, project galleries, and experience lists.
* **Interactive Contact Form**: Integrates directly with the **Formspree** service to send contact form submissions directly to your email inbox without requiring a backend server.

## How to execute it
### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended).
* npm package manager.

### Steps
1. **Configure Environment Variables**:
   Create a `.env` file in the root directory and define your Formspree hash token:
   ```env
   VITE_FORMSPREE_TOKEN=your_formspree_form_id
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the printed URL (usually `http://localhost:5173`).

4. **Production Build**:
   ```bash
   npm run build
   npm run preview
   ```
