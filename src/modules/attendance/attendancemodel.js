import db from "../../config/db.js"

// attendance statistics model with total employees, total Checked In,Not Checked In, On Leave ,Weekly Off, Holiday 

export const getAttendanceStatisticsModel = async () => {

    const data = await db.query(`select
    (select count(*) from employees) as total_employees,
    (select count(*) from attendance where status = 'Checked In') as total_checked_in,
    (select count(*) from attendance where status = 'Not Checked In') as total_not_checked_in,
    (select count(*) from attendance where status = 'On Leave') as total_on_leave,
    (select count(*) from attendance where status = 'Weekly Off') as total_weekly_off,
    (select count(*) from attendance where status = 'Holiday') as total_holiday
`);
    return data[0];
};