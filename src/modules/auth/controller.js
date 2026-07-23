
import { postsignup, verify } from "./model.js"

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


export const login = async (req, res) => {

    try {
        const load = req.body
        console.log(load)

        const result = await verify(load);
        console.log("result", result)

        if (result.length == 0) {

            res.json({
                success: true,
                message: "testing"
            });

        } else {

            res.json({
                success: false,
                message: "Invalid Email or Password"
            });

        }

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: "Server Error"
        });

    }

}
