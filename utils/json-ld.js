export const jsonLd = (options) => {
    let scriptDom = document.createElement('script');
    scriptDom.setAttribute('type', 'application/ld+json');
    let json = {
        "@context": "http://schema.org",
        "@type": options.type,
        "name": options.title,
        "author": {
            "@type": "Person",
            "name": options.author.name
        },
        "datePublished": options.date,
        "image": options.image,
        "url": options.url,
        "articleBody": options.body,
        "publisher": {
            "@type": "Organization",
            "name": "Toploansadviser.com"
        }
    }
    scriptDom.innerText = JSON.stringify(json);
    document.getElementsByTagName('head')[0].appendChild(scriptDom)
}
