const { error } = require('console');
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf-8'});

// default 64kb
// last buffer - remainder
// highWaterMark - control size

// const stream = createReadStream('./content/big.txt', {hightWaterMark: 90000})
// Bu, faylı 90000 baytlıq hissələrə bölərək oxuyur.
// highWaterMark – daxili buffer-in ölçüsünü təyin edir (neçə baytlıq məlumat hər dəfə oxunsun).
// Varsayılan dəyəri 64 KB (65536 bayt) olur, siz bunu 90 KB-ə (90000 bayt) qaldırmısınız.
// Faylın çox böyük olduğu hallarda daha böyük hissələrlə oxumaq performans üçün faydalı ola bilər.

// const stream = createReadStream('../content/big.txt', {encoding: 'utf-8'})
// Bu, axınla gələn məlumatların utf-8 kimi şərh olunmasını təmin edir.
// Yəni, Buffer deyil, birbaşa string əldə edirsiniz.
// encoding olmadan .on('data') hadisəsində alınan məlumatlar Buffer formatında olur, özünüz .toString() ilə çevirməlisiniz.

stream.on('data', (result) => {
console.log(result);
})

stream.on('error', (err) => console.log(err))