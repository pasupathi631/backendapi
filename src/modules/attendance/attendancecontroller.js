
import { attendanceCheck, insertAttendance, updateAttendance,} from "./attendancemodel.js";


// use if condition

export const createAttendance = async (req, res) => {

    try {

        const body = req.body

        const checkrow = await attendanceCheck(body.emp_id)

        if(checkrow.length == 0) {
            await insertAttendance(body.emp_id)
        }

        else{
            await updateAttendance(body.emp_id)
        }

        res.json({
            success: true
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success: false
        })
    }

}