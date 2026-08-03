import db from "../../config/db.js"
import {  getLeaveListModel, postleave, updateLeaveStatusModel } from "./leavemodel.js"

// FOR POST LEAVE
export const leaveinsert = async (req, res) => {

    try {

        const body = req.body

        await postleave(body)

        res.json({
            success:true
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success: false
        })
        
    }
}

// FOR GET LEAVE
export const getLeaveList = async (req, res) => {
try{
    const leavelist =await getLeaveListModel()

    res.json({leavelist})
} catch(error){
    res.json({error:error})
}
}






// const fun= async () => {
//    const b = await db.query(`select * from employees`)
    
//    return b[0];
// }


// export const getLeaveList = async (req, res) => {
//    const list = await fun()
  
//     res.json({ data: list})
// }

// FOR UPDATE LEAVE STATUS
export const leaveStatusUpdate = async (req, res) => {
    try {
        const { id, status } = req.body
        await updateLeaveStatusModel(id, status)
        res.json({
            success: true
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            error: error.message
        })
    }
}
