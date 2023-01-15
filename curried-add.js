function curriedAdd(total) {
    let sum = 0;

    if(total === undefined) return 0;

    if(total !== undefined){
        return function addVal(num){
            if(num === undefined){
                return total;
            }else{
                total = total + num;
                return addVal;
            }
        }
    }
}

module.exports = { curriedAdd };
