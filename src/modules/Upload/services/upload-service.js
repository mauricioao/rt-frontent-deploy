
export const uploadData = async (data) => {
    if(Object.keys(data).length === 0){
        return {
            ok:false,
            message : "No data"
        }
    }

    // console.log(data);

    return {
        ok: true,
        token: "Authenticated user",
        message : "Upload success"
    }
}