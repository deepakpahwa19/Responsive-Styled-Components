
export const randomDate = () => {
    let start = new Date(2012, 0, 1);
    let end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    return formatDate(date);
}

const formatDate = (date) => {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    
    return monthNames[monthIndex] + ' ' + day + ', ' + year;
}