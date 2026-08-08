import express from "express"
import { 
  getDashboardCards, 
  getLeaveList, 
  leaveinsert, 
  leaveStatusUpdate, 
  getLeaveAllowance,
  createPermission,
  getPermissionList,
  updatePermissionStatus,
  deletePermission,
  getViewlist
} from "./leavecontroller.js";

const leaveRouter = express.Router()

leaveRouter.post('/create', leaveinsert)
leaveRouter.get('/get-list', getLeaveList)
leaveRouter.put('/status', leaveStatusUpdate)
leaveRouter.get("/dashboard", getDashboardCards)
leaveRouter.get("/leave-allowance/:emp_id", getLeaveAllowance);

// Permission routes
leaveRouter.post('/permission/create', createPermission);
leaveRouter.get('/permission-viewlist', getViewlist)
leaveRouter.get('/permission/list/:emp_id', getPermissionList);
leaveRouter.put('/permission/status', updatePermissionStatus);
leaveRouter.delete('/permission/:id', deletePermission);

export default leaveRouter;