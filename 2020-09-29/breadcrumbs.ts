const generateBC = (url, separator) => {
    const ignore = ['THE', 'OF', 'IN', 'FROM', 'BY', 'WITH', 'AND', 'OR', 'FOR', 'TO', 'AT', 'A'];
    let slug = '/';
    const parts = [{ slug: slug, title: 'HOME' }];
    const initial = url
        .replace(/https?:\/\//g, '')
        .split('/')
        .slice(1);

    if (initial.length === 1 && !initial[0]) {
        return `<span class="active">HOME</span>`;
    }

    initial.forEach((part) => {
        if (!/index/g.test(part)) {
            let word = part
                .replace(/(\.|\?|\#).*/g, '')
                .replace(/-/g, ' ')
                .toUpperCase();
            if (word.length > 30) {
                word = word.split(' ').reduce((short, word) => {
                    if (!ignore.includes(word)) {
                        return short + word[0];
                    } else {
                        return short;
                    }
                }, '');
            }
            slug += `${part}/`.toLowerCase();
            parts.push({ slug: slug, title: word.toUpperCase() });
        }
    });

    return parts
        .map(({ slug, title }, index, array) => {
            return index !== array.length - 1
                ? `<a href="${slug}">${title}</a>`
                : `<span class="active">${title}</span>`;
        })
        .join(separator);
};

// console.log(
//     generateBC('mysite.com/pictures/holidays.html', ' : ') ===
//         '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>',
// );
//
// console.log(
//     generateBC('www.microsoft.com/docs/index.htm', ' * ') === '<a href="/">HOME</a> * <span class="active">DOCS</span>',
// );
// console.log(
//     generateBC('www.codewars.com/users/GiacomoSorbi', ' / ') ===
//         '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>',
// );
// console.log(
//     generateBC('www.microsoft.com/important/confidential/docs/index.htm#top', ' * ') ===
//         '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>',
// );
// console.log(
//     generateBC('mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp', ' > ') ===
//         '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>',
// );
// console.log(
//     generateBC('www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi', ' + ') ===
//         '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>',
// );
