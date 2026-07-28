
import { getDepartments, postdept, putdept, toggleDeptStatus } from "./deptmodel.js"

export const list = async (req, res) => {
    try {
        const departments = await getDepartments();
        res.json({
            success: true,
            list: departments
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "failed"
        });
    }
};

export const insert = async (req, res) => {
    try {
        const body = req.body;
        await postdept(body);

        res.json({
            success: true,
            message: "created"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "failed"
        });
    }
};

export const update = async (req, res) => {
    try {
        const body = req.body;
        await putdept(body);

        res.json({
            success: true,
            message: "updated"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "failed"
        });
    }
};

export const toggleStatus = async (req, res) => {
    try {
        const { deptIdCode } = req.params;
        const { status } = req.body;
        await toggleDeptStatus(deptIdCode, status);

        res.json({
            success: true,
            message: "updated"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "failed"
        });
    }
};