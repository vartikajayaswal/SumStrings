function sumStrings() {
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    var res = '', x = 0;
    n1 = n1.toString().split('');
    n2 = n2.toString().split('');
    while (n1.length || n2.length || x) {
        x += ~~n1.pop() + ~~n2.pop();
        res = x % 10 + res;
        x = x > 9;
    }
    document.getElementById("result").innerHTML = res.replace(/^0+/, '');
}