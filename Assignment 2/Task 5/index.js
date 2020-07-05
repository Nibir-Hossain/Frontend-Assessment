var n = window.prompt('Enter a number ');
var m = 1;
var str = "";

for (var i = 0; i < n; i++) {
    str = "";
    for (var j = 0; j < n - i - 1; j++) str += ' ';
    for (var j = 0; j < m; j++) str += '*';
    for (var j = 0; j < n - i - 1; j++) str += ' ';
    console.log(str);
    m += 2;
}
m -= 4;
for (var i = n; i > 1; i--) {
    str = "";
    for (var j = 0; j < n - i + 1; j++) str += ' ';
    for (var j = 0; j < m; j++) str += '*';
    for (var j = 0; j < n - i + 1; j++) str += ' ';
    console.log(str);
    m -= 2;
}