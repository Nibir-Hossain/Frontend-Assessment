var value = 1;
var n = window.prompt("Enter the size ");
var ara = new Array(n);
for (var i = 0; i < n; i++) ara[i] = new Array(n);

for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) ara[i][j] = value++;
}
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) document.write(ara[i][j] + '    ');
    document.write('<br>')
}