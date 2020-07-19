export const calculatePercentage = (val,total) => {
    const percentage = val / total * 100 ;
    if(percentage <= 0 || percentage > 100 || isNaN(percentage)) {
        return '---';
    }
    else 
        return Math.round(percentage) + '%';
}

export const formattedOutput = (val) => {
    if(typeof val === 'number')
        return val.toFixed(2) + '/-';
    else if(typeof val === 'string')
        return parseFloat(val).toFixed(2) + '/-'
}