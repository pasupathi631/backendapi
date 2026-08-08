import db from "../../config/db.js"
import {
  getDashboardCardsModel,
  getLeaveAllowanceModel,
  getLeaveListModel,
  postleave,
  updateLeaveStatusModel,
  postPermission,
  getPermissionListModel,
  updatePermissionStatusModel,
  deletePermissionModel
} from "./leavemodel.js"

// FOR POST LEAVE
export const leaveinsert = async (req, res) => {

  try {

    const body = req.body

    await postleave(body)

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

// leave list

export const getLeaveList = async (req, res) => {
  try {
    const body = req.body;
    const leaveList = await getLeaveListModel(body);
    res.json({ success: true, data: leaveList });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};

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


// leave dashboard total submission, approved leaves, pending leaves, rejected leaves


export const getDashboardCards = async (req, res) => {

  try {

    const result = await getDashboardCardsModel();

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

}

// Get leave allowance for an employee
export const getLeaveAllowance = async (req, res) => {
  try {
    const { emp_id } = req.params;
    const allowance = await getLeaveAllowanceModel(emp_id);
    res.status(200).json({
      success: true,
      data: allowance
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Create permission request
export const createPermission = async (req, res) => {
  try {
    const body = req.body;
    await postPermission(body);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.message });
  }
};

// Get permission request list
export const getPermissionList = async (req, res) => {
  try {
    const { emp_id } = req.params;
    const data = await getPermissionListModel(emp_id);
    res.json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.message });
  }
};

// Update permission request status
export const updatePermissionStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    await updatePermissionStatusModel(id, status);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.message });
  }
};

// Delete permission request
export const deletePermission = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePermissionModel(id);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.message });
  }
};