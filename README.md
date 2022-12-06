# NextJS Blog with Markdown Support 🧙🏻

### Main features of this repository:

- URL localization 📖
- Content localization 🧾
- Markdown support for blog posts 📝

### How to use

- Clone this repository
- Run `yarn install` to install dependencies
- Run `yarn dev` to start the development server
- Run `yarn build` to build the project
- Run `yarn start` to start the production server

### How to add a new blog post

- Create a new markdown file in the `assets\posts{lang}` folder
- Add the following frontmatter to the top of the file:

```markdown
---
title: "My personal website"
shortContent: "This is my personal website :p"
date: "7 December, 2022"
readTime: "2"
slug: "my-personal-website"
tag: "MyPersonalWebsite"
keywords: "my, personal, website"
metaDescription: "This is my personal website, for you to know"
---
```

- This blog post is automatically added to the blog page

### You can edit your personal information and use the project on the relevant pages.

