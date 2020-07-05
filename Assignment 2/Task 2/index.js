var ara = [24, 17, 24, 19, 24, 19, 11, 27, 11, 11];
var elements = [];
var countAra = new Array(50);
countAra.fill(0);

for (var i = 0; i < ara.length; i++) {
    if (countAra[ara[i]] == 0) elements.push(ara[i]);
    countAra[ara[i]]++;
}
for (var i = 0; i < elements.length; i++) {
    if (countAra[elements[i]] > 1) console.log(elements[i] + '-' + countAra[elements[i]] + ' times');
    else console.log(elements[i] + '-' + countAra[elements[i]] + ' time');
}