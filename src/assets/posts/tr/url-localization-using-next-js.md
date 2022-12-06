---
title: "NextJS ile Dile Bağlı URL Değiştirme"
shortContent: "Dile göre site içeriğini değiştirmek artık bir standart haline geldi. Fakat dile göre URL'i nasıl
değiştirebileceğimiz ile ilgili çok fazla bilgi yok. Bu sebepten dolayı bu yazımda NextJS kullanarak dile bağlı olarak
URL'i nasıl çevirebileceğimizi anlatacağım."
date: "28 Temmuz, 2021"
readTime: "6"
tag: "Next.js"
slug: "url-localization-using-next-js"
keywords: "nextjs, url çevirisi, url çevirme, nextjs dile bağlı url çevirisi, nextjs ile dile bağlı nasıl url
değiştirilir"
metaDescription: "Dile bağlı URL'i nasıl değiştirebiliriz? NextJS kullanarak URL çevirisi yapma yöntemi"
---

**Yerelleştirme (Localization)** denildiğinde genellikle akla ilk site içerisinde yer alan içeriğin çevrilmesi
gelmektedir. Bu sebepten ötürü çoğu paket yalnızca içerik localizationu yapmaktadır. Fakat bazı durumlarda **URL**'i de
kullanıcının diline göre localize etmek isteyebiliriz. Bu durumda NextJS'in bize sunduğu **rewrites** configinden
yararlanabiliriz.
(NextJS 9.5.0 >).

## İlk adım: next-i18next kurulumu

İlerleyen kısımlarda URL'in dile bağlı çevirisi için NextJS'in bize sağladığı default configi kullanacağız fakat ilk
adım olarak sitenin içeriğinin çevrilebilir olması için [next-i18next](https://github.com/isaachinman/next-i18next)
paketine ihtiyacımız var.

```shell
yarn add next-i18next
```

ile paketin kurulumunu gerçekleştiriyoruz. Daha sonra proje dizinimizde **next-i18next.config.js** isminde paketimizin
ihtiyacı olan config dosyasını oluşturuyoruz. Ve en basit haliyle içini aşağıdaki gibi dolduruyoruz

```js
module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["en", "tr"],
    },
};
```

Yukarıdaki configde site içerisinde kullanacağımız dilleri _(locales)_ ve varsayılan olarak kullanmak istediğimiz dili
_(defaultLocale)_ tanımlamalarıyla belirtiyoruz.

> **locales** içerisinde vermiş olduğumuz diller, ileride URL prefixi olarak kullanılacaktır. Örn: `/en/home`

> **defaultLocale** olarak belirlediğimiz dil, ileride URL'e varsayılan dil prefixi ile gelindiğinde o prefixin otomatik
> silinebilmesi gibi işlere yarayacaktır. Örn: `/en/home` -> `/home`

Daha sonra NextJS'in kendi config dosyası olan **next.config.js** içerisinde bu **i18n** değişkenini import edip
kullanıyoruz.

```js
const {i18n} = require("./next-i18next.config");

module.exports = {
    i18n,
};
```

**next.config.js** içerisine **i18n** configini ekledikten sonra sıra; **locales** içerisinde tanımladığımız dillere ait
çevirileri tutacağımız dosyaları oluşturmaya geldi. **next-i18next** varsayılan olarak *
*public/locales/[locale]/[fileName].json** dizini içerisinde çeviri dosyalarımızı arayacağı için bu dizinleri
oluşturuyoruz.

> Eğer farklı bir dizinde çeviri dosyalarınızı tutmak
> istiyorsanız [dökümantasyon](https://github.com/isaachinman/next-i18next#5-advanced-configuration) üzerinden kolaylıkla
> yapabilirsiniz.

Çeviri dosyalarını oluşturduktan sonra yapılması gerekilen son bir adım kaldı. **\_app.js** dosyamızı *
*appWithTranslation** componenti ile sarıyoruz. (daha önceden custom **\_app.js**
oluşturmadıysanız [buradan](https://nextjs.org/docs/advanced-features/custom-app) nasıl oluşturabileceğinize
bakabilirsiniz.)

```js
import {appWithTranslation} from "next-i18next";

const MyApp = ({Component, pageProps}) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
```

Bu adım ile birlikte artık çeviri kullanmak istediğimiz sayfaların **getStaticProps** ya da **getServerSideProps**'
metodu içerisinde **serverSideTranslations** import edip, çevirileri kullanabiliyoruz. Örneğin:

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

> Çeviri kullanmak istediğimiz bütün sayfalarda yukarıdaki props tanımlamasını yapmak zorunlu. Aksi halde çeviri
> jsonlarına ve dil configlerine ulaşılamayacağı için sayfa hata verecektir.

İçerik çevirisi için gerekli olan bütün ayarlamaları yapmış bulunuyoruz. Artık kullanmak istediğimiz yerde *
*useTranslation** hookunu import edip kullanabiliriz.

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

## İkinci adım: Dile bağlı URL değişimi

Yazının başındada belirttiğim gibi dile bağlı olarak URL'i çevirme işlemini NextJS'in sağlamış olduğu **rewrites**
configi ile birlikte yapacağız. Bunun için başlangıçta oluşturmuş olduğumuz **next.config.js** içerisinde **rewrites**
fonksiyonu oluşturuyoruz.

```js
const {i18n} = require("./next-i18next.config");

module.exports = {
    i18n,
    rewrites: async () => [
        {
            source: "/en/home",
            destination: "/en",
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

En ilkel hali ile yukarıdaki gibi bir config oluşturuyoruz. **rewrites** objelerden oluşan bir array alıyor ve her obje:

- **source**: kullanıcının girmiş olduğu URL pathini
- **destination**: kullanıcıya hangi sayfayı render edeceğimizi _('/' yazdığımızda 'pages/index' render edilecek)_
- **locale**: source içerisinde yazılan URL'e locale kısmının dahil edilip edilmeyeceğini belirtiyoruz. _(false veya
  undefined alabiliyor)_
- daha fazla config ayarları için
  lütfen [official dökümantasyonu](https://nextjs.org/docs/api-reference/next.config.js/rewrites) inceleyin.

Yukarıda yazmış olduğumuz config ile birlikte kullanıcı **/home** veya **/tr/anasayfa** URL'ine geldiği zaman NextJS
otomatik olarak **/** _(pages/index)_ sayfasını render edecek. Ya da **/about** veya **/tr/hakkimizda** URL'ine
gelindiği zaman _/about_ _(pages/about)_ sayfasını render edilecek. Ve ilk adımda yaptığımız içerik localizationu
sayesinde, URL prefixinde varolan dile göre sitemizin içeriklerini sunmuş olacağız.

Yukarıda gösterdiğim iki adım ile birlikte sitemiz hem içerik hem de URL tarafında çeviri desteğine sahip olacaktır.
