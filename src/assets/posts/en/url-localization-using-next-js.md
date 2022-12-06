---
title: "URL Localization using NextJS"
shortContent: "Localization of the site content is the standard now. But there is not much how to localize the URL. So
then in this post I am going to tell you how to localize URL using NextJS."
date: "28 July, 2021"
readTime: "6"
slug: "url-localization-using-next-js"
tag: "Next.js"
keywords: "nextjs, url localizations, url translation, how to translate url in nextjs"
metaDescription: "How to localize URL? The method of URL localization using NextJS"
---

When we say **localization**, we think of translations of site content in first. For this reason, lots of the packages
just do content translations. But in some scenarios
we want to localize/translate the URL by the user language. In this situation we can use benefit of **rewrites** config
that NextJS provides us. (NextJS version 9.5.0 >)

## First step: installation next-i18next

In the following sections, we are going to use **rewrites** config that NextJS provides us by default for localizing of
URL. But as a first step we need [next-i18next](https://github.com/isaachinman/next-i18next) package for localizing site
content. To do that:

```shell
yarn add next-i18next
```

After that, we create a config file called **next-i18next.config.js** in our project directory for the requirements of *
*next-i18next**. And basically we fill inside as below

```js
module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["en", "tr"],
    },
};
```

In the config above, we specify the languages that we are going to use in our site _(locales)_ and the language that we
want to use as default language _(defaultLocale_.

> Languages provided in **locales** will use for URL prefix. Ex: `/en/home`.

> Language provided in **defaultLocale** will use to remove language prefix when user comes with the default language.
> Ex: `/en/home` -> `/home`

Then we import and use the **i18n** in the NextJS own config file that called **next.config.js**

```js
const {i18n} = require("./next-i18next.config");

module.exports = {
    i18n,
};
```

After adding **i18n** config to **next.config.js**, it is time to create translations files that we defined in **locales
** array. By default **next-i18next** will looking for the translations file in **public/locales/[locale]/[fileName]
.json** directory, so then we create our files in here.

> If you want to keep your translations files to somewhere else please read
> the [documentation](https://github.com/isaachinman/next-i18next#5-advanced-configuration). It is easy to handle.

After creating translations files, there is only one step to be done. We wrap **\_app.js** file with the *
*appWithTranslation** component. (if you don't have custom **\_app.js**, you can learn more about
it [from here](https://nextjs.org/docs/advanced-features/custom-app))

```js
import {appWithTranslation} from "next-i18next";

const MyApp = ({Component, pageProps}) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
```

With this step, we can use translations by importing **serverSideTranslations** in the **getStaticProps** or *
*getServerSideProps** methods of any pages. Ex:

```js
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["footer"])),
        },
    };
}
```

> Above props defining must be used in every page that we want to translate. Otherwise **next-i18next** will thrown an
> error because of can't access translation json files and language config.

We have done all configurations that needed for content translations. Now we can use translations by importing *
*useTranslations** hook in anywhere that we want to use.

```js
import {useTranslation} from "next-i18next";

export const Footer = () => {
    const {t} = useTranslation("footer");

    return (
        <footer>
            <p>{t("description")}</p>
        </footer>
    );
};
```

## Second step: Localization of URL

As I mentioned in the beginning of the post, we are going to handle localization of URL with **rewrites** config that
NextJS provides us. To do that, we add **rewrites** function into **next.config.js** that we created beginning of the
post.

```js
const {i18n} = require("./next-i18next.config");

module.exports = {
    i18n,
    rewrites: async () => [
        {
            source: "/en/home",
            destination: "/en/",
            locale: false,
        },
        {
            source: "/tr/anasayfa",
            destination: "/tr",
            locale: false,
        },
        {
            source: "/en/about",
            destination: "/en/about",
            locale: false,
        },
        {
            source: "/tr/hakkimizda",
            destination: "/tr/about",
            locale: false,
        },
    ],
};
```

We create a config like above in the simplest form. As we see **rewrites** takes an array that contains objects. An
every object has:

- **source**: the path of URL that user entered
- **destination**: the page that will be rendered _('/' will render -> 'pages/index')_
- **locale**: determining of either including the locale prefix or not to source that we provided _(false or undefined)_
- for more configurations please
  read [official documentation](https://nextjs.org/docs/api-reference/next.config.js/rewrites). There are good options
  like **has**...

With above config, when user land **/home** or **/tr/anasayfa** URL, NextJS automatically render **/** _(pages/index)_.
And when user land **/about** or **/tr/hakkimizda** URL, NextJS automatically render **/about** _(/pages/about)_. Also
we serve the site content localized by using the URL prefix.

Your website will be support both content and URL localization thanks to above steps.
