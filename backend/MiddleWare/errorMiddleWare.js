const ErrorHandler = async (err,req,res,next) =>{
    const errStatus = err.statusCode || 500
    const errMessage = err.message || "Something Went Wrong"
    res.json({
        success: false,
        status:errStatus,
        message:errMessage,
        stack:process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

export {
    ErrorHandler
}