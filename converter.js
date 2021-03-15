function convert() {
    const number = document.getElementById('input').value
    const base = Number(document.getElementById('base').value)
    const baseNum = Number(document.getElementById('baseInput').value)
    if(number==''||isNaN(base)||isNaN(baseNum)){
        document.getElementById('result').value='Error!'
        return
    }
    document.getElementById('baseInput').value=''
    document.getElementById('base').value=''
    document.getElementById('input').value=''
    const result = document.getElementById('result')
    function convertBase(value, from_base, to_base) {
        var range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
        var from_range = range.slice(0, from_base);
        var to_range = range.slice(0, to_base);

        var dec_value = value.split('').reverse().reduce(function (carry, digit, index) {
            return carry += from_range.indexOf(digit) * (Math.pow(from_base, index));
        }, 0);

        var new_value = '';
        while (dec_value > 0) {
            new_value = to_range[dec_value % to_base] + new_value;
            dec_value = (dec_value - (dec_value % to_base)) / to_base;
        }
        return new_value || '0';
    }
    result.value = convertBase(number,baseNum,base)
}