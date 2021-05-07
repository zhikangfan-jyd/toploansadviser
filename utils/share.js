
/**
 * 简单分享到Facebook
 * @param {*} url 
 * @param {*} title 
 */
export const shareToFB = (url,title) => {
    let u = url;
    let t = title;
    window.open("http://www.facebook.com/sharer.php?u="+ encodeURIComponent(u) + "&t="+ encodeURIComponent(t), "sharer","toolbar=0,status=0,width=626,height=436");
}

/**
 * 简单分享到Twitter
 * @param {*} url 
 * @param {*} title 
 */
export const shareToTwitter = (url,title) => {
    let twTitle = title,
        twUrl = url;
    window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(twTitle)).concat(' ').concat(encodeURIComponent(twUrl)))
}

