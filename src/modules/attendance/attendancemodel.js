import db from "../../config/db.js"

export const getAttendanceStatisticsModel = async () => {

    const [rows] = await db.query(`
        SELECT

            (SELECT COUNT(*) FROM employees) AS total_employees,

            SUM(CASE
                WHEN attendance_status = 'Checked In'
                THEN 1 ELSE 0
            END) AS checked_in,

            SUM(CASE
                WHEN attendance_status = 'Not Checked In'
                THEN 1 ELSE 0
            END) AS not_checked_in,

            SUM(CASE
                WHEN attendance_status = 'On Leave'
                THEN 1 ELSE 0
            END) AS on_leave,

            SUM(CASE
                WHEN attendance_status = 'Weekly Off'
                THEN 1 ELSE 0
            END) AS weekly_off,

            SUM(CASE
                WHEN attendance_status = 'Holiday'
                THEN 1 ELSE 0
            END) AS holiday,

            SUM(CASE
                WHEN attendance_status = 'Checked Out'
                THEN 1 ELSE 0
            END) AS checked_out

        FROM attendance
        WHERE attendance_date = CURDATE();
    `);

    return rows[0];
};