# Developer Portfolio

A responsive personal portfolio built with React, Vite, Lucide React, Framer Motion, and CSS.

## Run it in Visual Studio Code

1. Install Node.js 22.12 or later. Open the extracted `portfolio` folder in VS Code.
2. Open the integrated terminal and run:

   ```sh
   npm ci
   npm run dev
   ```

3. Open the local URL printed by Vite, usually http://localhost:5173.

Run `npm run build` to create the production site in `dist/`. Run `npm run preview` to check that build locally.

## Personalize the site

| What to update | Where to edit |
| --- | --- |
| Name, introduction, and availability | `src/data/profile.js` |
| Education | `src/data/education.js` |
| Experience | `src/data/experience.js` |
| Skills | `src/data/skills.js` |
| Certificates | `src/data/certificates.js` |
| Featured projects | `src/data/projects.js` |
| Contact details | `src/data/contact.js` |

### Replace the profile picture

Copy your picture to `public/images/profile.jpg` and set `photo: 'images/profile.jpg'` in `src/data/profile.js`. If you use PNG or WebP, match the file extension in the data. The default monogram uses your first two initials until you set a photo.

### Add a project

1. Put the screenshot in `public/images/projects/`.
2. In `src/data/projects.js`, edit a placeholder or copy its object for a new entry.
3. Give the project a unique `id`. Set `placeholder` to `false` and fill in `title`, `description`, `category`, and `technologies`.
4. Set `image` to the path relative to `public/`, such as `images/projects/my-project.webp`, and describe the screenshot in `imageAlt`.
5. Add full URLs to `liveUrl` and `repositoryUrl`. An empty URL hides its link. Delete any unused placeholder entries.

### Update your contact information

In `src/data/contact.js`, set `label` to the public username and `url` to the full profile URL for each social platform. For Email and Phone, enter your email address or international phone number in `label`. The site creates the `mailto:` and `tel:` links. Empty contact cards show a pending message.

### Add experience or certificates

For experience, fill in the title, organization, dates, responsibilities, and skills, then set `placeholder` to `false`. For certificates, add entries with a `title`, `issuer`, and optional `credentialUrl`.
