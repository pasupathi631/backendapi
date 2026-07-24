import { getdbpass, postsignup, } from "./model.js"

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

        const body = req.body
        console.log(body)

        const dbpass = await getdbpass(body.email)
        console.log(dbpass)

        if(dbpass == body.pass){

            res.json({
                success: true,
                
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
            message:  "Invalid Email or Password"
        });

    }
}




  // const load = req.body
        // console.log(load)

        // const result = await verify(load);
        // console.log("result", result)

        // if (result.length == 1) {
