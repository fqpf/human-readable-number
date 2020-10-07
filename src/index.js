// module.exports = function toReadable (number) {
//     const units = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
//     const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
//
//     if (number === 0) return 'zero';
//     if (number < 20) return units[number];
//
//     const nums = number.toString().split('').map(el => Number(el));
//
//     if (nums.length < 3) {
//         return `${tens[nums[0]]} ${units[nums[1]]}`.trim();
//     }
//
//     const first = units[nums[0]];
//     const second = tens[nums[1]];
//     const third = units[nums[2]];
//
//     const last2Nums = number % 100;
//     if (last2Nums < 20) {
//         return `${first.length > 0 ? `${first} hundred ` : ''}${units[last2Nums]}`.trim();
//     }
//
//     return `${first.length > 0 ? `${first} hundred ` : ''}${second.length ? `${second} ` : ''}${third}`.trim();
// };

module.exports = function toReadable (number) {
    const units = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if (number === 0) return 'zero';

    const nums = number.toString().split('').map(el => Number(el)).reverse();

    const res = [];
    for (let i = 0; i < nums.length; i++) {
        switch (i) {
            case 0:
                res.push(units[nums[i]]);
                break;
            case 1:
                const last2Nums = number % 100;
                if (last2Nums < 20) {
                    res.shift();
                    res.push(units[last2Nums])
                } else {
                    res.push(tens[nums[i]]);
                }
                break;
            case 2:
                res.push(`${units[nums[i]]} hundred`)
        }

    }

    return res.reverse().join(' ').trim();
};
