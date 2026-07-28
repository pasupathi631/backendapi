
import {  postdept, putdept } from "./deptmodel.js"



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
        console.log("hello", body)
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

