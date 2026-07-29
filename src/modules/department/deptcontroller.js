
import {  getview, postdept, postsearch, putdept } from "./deptmodel.js"


// insert table 
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

// update table

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

// view table

export const list = async (req, res) => {

    try {

        const limit = req.params.limit
        const offset = req.params.offset

       const viewdept = await getview(limit, offset)

        res.json({
            success: true,
            message: "view successfully",
            data: viewdept
            
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "error view"
        })
        
    }

}

// search in table

export const search = async (req, res) => {

    try {

        const body = req.body
        console.log("body", body)

         const [result] = await  postsearch(body)
         return res.json({
        success: true,
        result
    })
        
    } catch (error) {
        console.log(error)
         return res.json({
            success: false
        })
        
    }
}

