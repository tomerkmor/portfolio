import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
const app = express()
import mongoose from 'mongoose'
import cors from 'cors'
import nodeSchedule from "node-schedule"
import nodemailer from 'nodemailer';

// for the ShortenerUrl API
import dns from 'dns'
import urlParser from 'url'

// for uploading files
import path from 'path'
import fs from 'fs';
import multer  from 'multer'
const upload = multer({dest: 'uploads/'})

import User from "./modules/UserSchema.js";
import ShortUrl from "./modules/UrlShortSchema.js";


// Database connection
const CONNECTION_URL="mongodb+srv://tomermor:Te709709@nodeexpressprojects.wxq8pye.mongodb.net/PLANO?retryWrites=true&w=majority"
const PORT = process.env.PORT||4000
console.log("process.env.port =" + process.env.PORT)

mongoose.connect(CONNECTION_URL)
    .then(async()=>{ 
        app.use(express.static('./public'))
        app.use(express.json());
        app.use(cors())

        app.listen(PORT, () => 
            console.log('Connect to DATABASE! on port:'+PORT)
        )

        // Dynamically import routes
        const posts = (await import('./routes/posts.js')).default;
        const tasks = (await import('./routes/tasks.js')).default;
        const dates = (await import('./routes/dates.js')).default;
        const whoami = (await import('./routes/whoami.js')).default;
        const shorturls = (await import('./routes/shorturls.js')).default;
        const exercises = (await import('./routes/exercises.js')).default;

        // Middleware to parse JSON
        app.use(express.json());

        // Middleware to parse URL-encoded data (from forms)
        app.use(express.urlencoded({ extended: true }));

        // Routes
        app.use('/api/exercises', exercises);
        app.use('/api/shorturl', shorturls);
        app.use('/api/date', dates);
        app.use('/api/whoami', whoami);
        app.use('/', posts);
        app.use('/api/tasks', tasks);


        // files upload
        app.post('/api/file', upload.single('upfile'),async (req,res) => {
            console.log(req.file)
            const enteredFile = await req.file
            res.json({
              name: enteredFile.originalname,
              filename: enteredFile.filename,
              type: enteredFile.mimetype,
              size: enteredFile.size
            })
        })

        // Ensure __dirname is correctly resolved
        const __dirname = path.dirname(new URL(import.meta.url).pathname);

        // download file from /uploads folder
        app.get('/api/file/:filename', (req, res) => {
            const filename = req.params.filename;
            const filePath = path.join(process.cwd(), 'uploads', filename);
            console.log('Requesting file:', filename);
            console.log('File path:', filePath);

            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    console.error('File not found:', err);
                    return res.status(404).json({ error: 'File not found' });
                }

                res.download(filePath, (err) => {
                    if (err) {
                        console.error('Download error:', err);
                        res.status(500).json({ error: 'Failed to download file' });
                    }
                });
            });
        });
  

        

        nodeSchedule.scheduleJob('0 0 * * *', async()=>{
            let transporter = nodemailer.createTransport({
                service:"gmail",
                secure: false,
                port: 25,
                auth:{
                    user:'sexylooter@gmail.com',
                    pass:'iafwewpjwdbiyzll'
                },
                tls: {
                    rejectUnauthorized: false
                }
            })

            let mailOption ={
                from:'planocooperation@gmail.com',
                to:'',
                subject:'Expired List',
                text:''
            }

            try{
                let sendMail = false;
                let message = "";
                const users = await User.find();
                console.log(users);
                users.map(item=>{
                    sendMail = false;
                    message = item.username+"\n";
                    let expire = item.expD;
                    item.itemList.map(item1=>{
                        console.log("item: ",item1.name);
                        console.log("space: ",Math.floor((item1.expDate - new Date())/(1000*3600*24)));
                        if(Math.floor((item1.expDate - new Date())/(1000*3600*24)) < expire){
                            message += item1.name+"\n";
                            message += item1.expDate+"\n\n";
                            sendMail = true;
                        }
                    })
                    console.log("-----------------");
                    mailOption.to = item.email;
                    mailOption.text = message;
                    if(sendMail){
                        console.log(message);
                        transporter.sendMail(mailOption,(error,info)=>{
                            if(error){
                                console.log(error.message);
                            }else{
                                console.log("Email sent:\n"+info.response);
                            }
                        })
                    }
                })
            }catch{
                console.log("error in expire date");
            }
    }); 
})
.catch((e)=>{ console.log(e.message) })

