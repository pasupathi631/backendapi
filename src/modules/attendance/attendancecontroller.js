
import { getAttendanceStatisticsModel } from "./attendancemodel.js";


// attencen statistics

export const AttendanceStatistics = async (req, res) => {

    try {

        const result = await getAttendanceStatisticsModel();

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};