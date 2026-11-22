import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: 'akses ditolak!, tidak terdapat token yang valid'
            })
        }

        const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader

        if (!token) {
            return res.status(401).json({
                success: false,
                message: `format token salah! Gunakanlah format: "Bearer <token>"`
            })
        }

        const secret = process.env.JWT_SECRET
        const decoded = jwt.verify(token, secret)


        req.user = decoded

        next()
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: 'Akses ditolak, token anda telah kadaluarsa'
        })
    }
}

export const authorizeRoles = (...allowRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Akses dilarang! role '${req.user ? req.user.role : 'Guest'}' tidak memiliki izin untuk fitur ini`
            })
        }
        next()
    }
}

