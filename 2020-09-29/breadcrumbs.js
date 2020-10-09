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
                    }
                    else {
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
