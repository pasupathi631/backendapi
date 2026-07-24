import { editempid, getempid, getreport, postemployee } from "./model.js"


// insert data like create data
export const insert = async (req, res) => {
    try {

        const store = req.body
        console.log(store)

        const create = await postemployee(store)
        console.log(create)
        res.json({
            success: true,
            message: "passed"
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

        const store1_1 = req.body
        console.log(store1_1)

        const view = await getreport(store1_1)
        console.log(view)

        res.json({
            success: true,
            message: "passed"
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
            message:"passed"
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "failed"
        })
        
    }
}

export const update = async (req, res) => {
    try {

        // const store_3 = b44
        // console.log(store_3)

        // const body = req.body
        // console.log(body)

        const update = await editempid()
        console.log(update)
        editempid(5)
        res.json({
            success: true,
            message: "passed"
        })
        
    } catch ({error}) {
        console.log(error)
        res.json({
            success: false,
            message: "failed"
        })
        
    }
}