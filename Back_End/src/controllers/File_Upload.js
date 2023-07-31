import express from "express";
import multer from "multer";
import storage from "../configs/firebase_storage.js";
import {v4 as uuidv4} from 'uuid'
import path from 'path'
import {ref} from 'firebase/storage'

const UploadRouter = express.Router()
const upload = multer({
    storage: multer.memoryStorage()
})

UploadRouter.post('/', upload.single("file"), async (req, res) => {
    try {
        const file = req.file
        if (file) {
            const fileName = `${uuidv4()}${path.extname(file.originalname)}`
            const blob = storage.file(fileName)
            const blobStream = blob.createWriteStream({
                resumable: false,
                metadata: {
                    content_type: file.mimeType
                }
            })
            console.log(blobStream)
            blobStream.on('error', err => {
                res.status(400).json({
                    error: err.message
                })
            })
            blobStream.on('finish', () => {
                const publishURL = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`
                res.json({
                    message: 'Created successfully',
                    fileUrl: publishURL
                })
            })
            blobStream.end(file.buffer)
        } else {
            res.json({message: 'Please upload a file'})
        }

    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
})
export default UploadRouter