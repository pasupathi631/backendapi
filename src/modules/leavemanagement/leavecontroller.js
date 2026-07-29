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