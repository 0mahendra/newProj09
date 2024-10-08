const express = require("express");

const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
// const Patient = require("./Models/userModel");
const patientRotues = require("./Routes/patientRoutes");
const dctrRoutes = require("./Routes/dctrRoutes");
const medRoutes = require("./Routes/medRoutes");
const chatRotues =require("./Routes/chatRoutes");
const messageRoutes = require("./Routes/messageRoutes");
const reportRoutes = require("./Routes/reportRoutes");
const sendMailRoutes = require("./Routes/sendMailRoutes");
dotenv.config();


connectDB();

const app  = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get("/" ,(req,res)=>{
    res.send("api is  running");
})

app.use("/api/patient",patientRotues);
app.use("/api/dctr",dctrRoutes);
app.use("/api/med",medRoutes);
app.use("/api/chats" , chatRotues);
app.use("/api/messages",messageRoutes);
app.use("/api/report",reportRoutes);
app.use("/api/sendMail" , sendMailRoutes);


const server  = app.listen(PORT,console.log(`api is listening at port  = ${PORT}`));


const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
      origin: "https://tiny-arithmetic-06b1f4.netlify.app",  
      // credentials: true,
    },
  });
  
  
  
  
  io.on("connection", (socket) => {
    console.log("Connected to socket.io");
    // socket.on("setup", (userData) => {
         
    //   socket.join(userData._id);
    //   console.log(userData._id);
    //   socket.emit("connected");
    socket.on("send_message",(data)=>{
        //   socket.join(room);
          console.log(data);
          socket.broadcast.emit("receive_msg", data);
        });
    });
  
    
     
    // socket.on("new message",(newMessageReceived)=>{
    //   var chat= newMessageReceived.chat;
  
    //   if(!chat.users)return console.log("chat user is undefined");
  
    //   chat.users.forEach((user)=>{
    //     if(user._id == newMessageReceived.sender._id)return;
  
    //     socket.in(user._id).emit("message recieved",newMessageReceived);
  
    //   });
    // });
      
    // });
