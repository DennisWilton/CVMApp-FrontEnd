export default function delay(ms = 1000, cb){
    return new Promise(res => {
        setTimeout(() => {
            if(typeof cb == 'function') cb();
            res();
        }, ms)
    })
}