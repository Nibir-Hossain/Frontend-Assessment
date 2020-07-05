var ara = [11,2,33,14,9,16,7,18,9,10];

var mx = 0, mx2 = 0, mn = 99999, mn2 = 99999;
for (var i = 0; i < ara.length; i++) {
    if (ara[i] > mx) {
        mx2 = mx;
        mx = ara[i];
    }
    else if (ara[i] < mx && ara[i] > mx2) {
        mx2 = ara[i];
    }
    if (ara[i] < mn) {
        mn2 = mn;
        mn = ara[i];
    }
    else if (ara[i] > mn && ara[i] < mn2) {
        mn2 = ara[i];
    }
}

console.log('Second Largest is: ' + mx2);
console.log('Second Smallest is: ' + mn2);