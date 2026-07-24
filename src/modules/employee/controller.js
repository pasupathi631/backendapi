import { editempid, getempid, getreport, postemployee } from "./model.js"


// insert data like create data
export const insert = async (req, res) => {
    try {

        const store = req.body
        

        const create = await postemployee(store)
        console.log(create)
        res.json({
            success: true,
            message: "created"
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success: false
        })
        
    }
}

// report view like view specific column
export const report = async (req, res) => {
    
    try {

        const view = await getreport()
        console.log(view)

        res.json({
            success: true,
            list: view
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "failed"
            
        })
        
    }
}

// view particular ID in table

export const view = async (req, res) => {
    try {

        const store_2 = req.params.id
        console.log(store_2)

        const viewid = await getempid(store_2)
        console.log(viewid)
        res.json({
            success: true,
            data: viewid
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "failed"
        })
        
    }
}


// update the table in data
export const update = async (req, res) => {
    try {

        const store_3 = req.body
        console.log(store_3)

         await editempid(store_3)
        
        res.json({
            success: true,
            message: "updated"
        })
        
    } catch ({error}) {
        console.log(error)
        res.json({
            success: false,
            message: "failed"
        })
        
    }
}