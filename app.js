const arguments = process.argv.slice(2);

function AlanBulmaca(sayi) {
    const pi =3.14159265359;
    const area = pi * Math.pow(sayi,2);
    console.log(`Yarçapı ${sayi} alanı ${area}`);
}
AlanBulmaca(arguments[0] *1);