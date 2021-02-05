module.exports = function toReadable (number) {
    const oneToNineteen = [
            '', 'one','two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ],
        dozens = ['', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let    numTensAndOnes=0;

    function makeWord([hundr, tens, ones]){
        if (tens<2) {
            numTensAndOnes = tens*10 + (+ones);
            return [
                hundr == 0 ? '' : oneToNineteen[hundr] + ' hundred ' ,
                (ones == 0 && tens == 0 && hundr == 0) ? 'zero' : oneToNineteen[numTensAndOnes]
            ]
        }
        return [
            hundr == 0 ? '' : oneToNineteen[hundr] + ' hundred ',
            tens == 0 ? '' : ones>0? dozens[tens] + ' ' : dozens[tens],
            ones == 0 ? '' : oneToNineteen[ones]
        ];
    }    
    let arr = (number < 100 && number > 9) ? ('0'+number).split('') : (number < 10) ? ('00'+number).split('') :(''+number).split('');
    return makeWord(arr).join('').trim();
}