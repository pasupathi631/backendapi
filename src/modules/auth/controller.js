
import { postsignup } from "./model.js"

export const signup = async (req, res) => {

    try {
        const store = req.body
        console.log(store)

        const mode = await postsignup(store)
        res.json({
            success: true
            
        })

        
    } catch (error) {
        console.log(error)
        
    }
}