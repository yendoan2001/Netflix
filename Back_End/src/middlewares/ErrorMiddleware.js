export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? err.statusCode : 500;
    res.status(statusCode)
    res.json({
        message: err.message
    })
}