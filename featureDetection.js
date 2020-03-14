// this function is designed to detect if the browser currently being used includes Symbol support
function hasSymbolSupport(){
    if (typeof Symbol == 'function'){
    out = 'Your browser supports Symbols';
    } else {
    out = 'Your browser has no Symbol support. (returned '+typeof Symbol +')';
    }
}

module.exports=hasSymbolSupport;