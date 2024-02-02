function Frame(){
 return(
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{width:'1125px',height:'613px', display:"flex",marginTop:'40px',marginLeft:'157px',alignItems:'center',justifyContent:'center'}}>
        <div>

            <div>
               <h1 style={{fontWeight: '800px',lineHeight:'102px',fontSize: '108px'}}>YOUR FEET DESERVE THE BEST</h1>
               <p>
               YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
               SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
               SHOES.
              </p>
            </div>

            <div style={{display:'flex'}}>
                <div><button style={{backgroundColor:"red",color:'white'}}>SHOP NOW</button></div>
                <div style={{marginLeft:'20px'}}><button>Category</button></div>

            </div>

            <div style={{marginTop:'10px',marginBottom:'10px'}}>
                <p style={{color:'grey'}}>Also Available On</p>
            </div>

            <div style={{display:'flex'}}>
                <div style={{}}> <img src="/images/flipkart.png" alt="flipkart" /> </div>
                <div style={{marginLeft:'10px',marginTop:'2px'}}> <img src="/images/amazon.png" alt="amazon" /> </div>
            </div>


        </div>

        <div>
            <img src="/images/hero-image.png" alt="" />
        </div>

    </div>
    </div>

       
)
}
export default Frame;
