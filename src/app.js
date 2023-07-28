import express from "express";

const app = express();

app.get("/api", (req, res)=>{
    res.json({routes:app._router.stack});
});

export {app};