

const asyncHandler = (requestHandler) => {
    
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
    }
}








/*
// Method 01 : Using try-catch block inside the asyncHandler function
const asyncHandler = (fn) => async (req, res, next) => {
    try {

        await fn(req, res, next);


    } catch(error) {
        res.status(error.code || 500).json({ message: ` Error ---> ${error.message}` });
    }
}



*/
export { asyncHandler }; 