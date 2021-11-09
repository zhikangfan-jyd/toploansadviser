/**
 * 自动更新日期
 */
export const updateTime = (d) => {
    let date = d ? new Date(d) : new Date();
    const months = [
        {
            short: 'Jan',
            long: 'January',
            number: 1
        },
        {
            short: 'Feb',
            long: 'February',
            number: 2
        },
        {
            short: 'Mar',
            long: 'March',
            number: 3
        },
        {
            short: 'Apr',
            long: 'April',
            number: 4
        },
        {
            short: 'May',
            long: 'May',
            number: 5
        },
        {
            short: 'Jun',
            long: 'June',
            number: 6
        },
        {
            short: 'Jul',
            long: 'July',
            number: 7
        },
        {
            short: 'Aug',
            long: 'August',
            number: 8
        },
        {
            short: 'Sept',
            long: 'September',
            number: 9
        },
        {
            short: 'Oct',
            long: 'October',
            number: 10
        },
        {
            short: 'Nov',
            long: 'November',
            number: 11
        },
        {
            short: 'Dec',
            long: 'December',
            number: 12
        }
    ];
    let index = date.getMonth();
    let month = months[index];
    let year = date.getFullYear();
    let day = date.getDate();
    return {
        year: year,
        month: month,
        day: day < 10 ? '0'+ day : day
    }
}