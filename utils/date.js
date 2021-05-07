/**
 * 自动更新日期
 */
export const updateTime = () => {
    const date = new Date();
    const months = [
        {
            short: 'Jan',
            long: 'January'
        },
        {
            short: 'Feb',
            long: 'February'
        },
        {
            short: 'Mar',
            long: 'March'
        },
        {
            short: 'Apr',
            long: 'April'
        },
        {
            short: 'May',
            long: 'May'
        },
        {
            short: 'Jun',
            long: 'June'
        },
        {
            short: 'Jul',
            long: 'July'
        },
        {
            short: 'Aug',
            long: 'August'
        },
        {
            short: 'Sept',
            long: 'September'
        },
        {
            short: 'Oct',
            long: 'October'
        },
        {
            short: 'Nov',
            long: 'November'
        },
        {
            short: 'Dec',
            long: 'December'
        }
    ];
    let index = date.getMonth();
    let month = months[index];
    let year = date.getFullYear();
    return {
        year: year,
        month: month
    }
}