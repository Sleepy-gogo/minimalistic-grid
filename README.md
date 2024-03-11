<h1 align="center">Minimalistic Grid <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f327_fe0f/512.webp" width="32"/> <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f343/512.webp" width="32"/> </h1>

<p align="center">This project is inspired by <a href="https://github.com/migueravila/Bento">Migueravilla's Bento</a> new page. It has been built with astro for easy customization with TailwindCSS and Astro.<br/>Feel free to <b>fork</b> or <b>contribute</b>!</p>

## Requirements

- Node.js 18+.
- Vercel account for hosting.

<p align="center">If you just wanna change the name, and bookmarks, you don't need anything. <a href="#customizing">Check here</a> for instructions.</p>

## Installation and use

1. Fork the repository to customize it to your liking

If you wanna change the the layout, or add more features like weather, or anything of your liking, you'll need to clone it, and install the dependencies.

```bash
git clone <your-repo-url>
cd <the-repo-name>
npm install
```

Then you can start the development server and start adding features. Refer to the [Astro Docs](https://docs.astro.build/en/getting-started/) if you're not familiar with it.

```bash
npm run dev
```

This will let you preview your changes in the browser as you do them.

2. Start customizing your page!

<p id="customizing"></p>

When you're doing adding or editing features, you can start modifying the `src/data/page.js` file, where you'll find all the parameters that allow you to customize the content of the page.

### Customizing the user

Under the `user` attribute in the file, you'll be able to set the name that shows up in bold, and the username that shows right below it.

To set the image, I've chosen to use the Gravatar API. So if you already have a Gravatar account setted up, you can just change the `email` property and it'll show your image. If you do not have an account, you can create one by going to [Gravatar](https://gravatar.com/).

If it's the first time you're using Gravatar, the image may not show up immediately and it could even take a couple of days.

If you do not want to create an account, you can also go to `src/components/User.astro` and set the url of your image directly in the `src` attribute of the `img` tag.

### Customizing the links

Under the `bookmarks` attribute in the file, you'll find an array of objects that contain a `name`, `icon` and `url` attributes. You can modify the array to add as many bookmarks as you want.

For choosing an icon name, please refer to [Lucide Icons](https://lucide.dev/icons).

## Customizing the background

You can change the background of the page by simply swaping the `public/background.svg` by another file by the same name. I've used [Haikei](https://haikei.app/) to generate mine.

If your background isn't an svg, you can also go to the `src/layouts/Layout.astro` file and change the `background` so it picks up your image name. By the same method, and putting the url of a gif, you can also add animated backgrounds! Further customizations may be needed to make it look right.

## Customizing the colors

For now, if you wish to change the text color, you'll need to go individually to each component and change the classes there.

# Contributing

Your contributions will be well received! Please feel free to fork and start making contributions.
