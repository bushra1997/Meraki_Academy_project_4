

//login backend -Asma
app.post("/login",async (req,res)=>{
const {email,password}=req.body
await users.findOne({email,password})
.then(async(result)=>{
    if(!result){
    return res.send({massage:" Email Not Found , Password not matches",status:404})
} else {
res.send({massage:"login successfully user,login successfully employee ",status:200})
}
})
const payload={
    userId: result._id,
}
const options = {
    expiresIn: "60m",
  };
const token= await jwt.sine(payload,secret,options)
await bcrypt.compare(password, result.password, (err, result) => {
  if (result) {
    res.json(token);
  } else {
    return res.send({
      massage: "The password you've entered is incorrect",
      status: 403,
    });
  }
});
})
.catch((err) => {
res.send(err);
});


