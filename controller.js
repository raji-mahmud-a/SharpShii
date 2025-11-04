import sharp from "sharp"

const controller = (req, res)=>{
  if(req.url === "/api"){
   req.pipe(sharp()
      .resize(300, 200) // The Sharp transform stream
      .toFormat('webp')
    )
    .pipe(res);
  }else{
    res.writeHead(404, { "content-type": "application/json" })
    res.end(JSON.stringify({
      success: false,
      message: 'Not Found',
      details: "The resource you're looking for cannot be found: check the URL very well"
    }, null, 2))
  }
}


export default controller
