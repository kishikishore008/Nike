function Navigation(){

    return(<>
    <div style={{display:'flex', justifyContent:'space-between',marginRight:'50px',marginLeft:'50px'}}>

       <div style={{ display: 'flex' , gap: '16px'}}> 
         <img src="/images/brand_logo.png" alt="logo" />
       </div>

       <div>
         <ul style={{ display:'flex', gap:'24px',listStyle:'none'}}>
           <li herf="#"><button style={{all:'unset'}}>Menu</button></li>
           <li herf="#"><button style={{all:'unset'}}>Location</button></li>
           <li herf="#"><button style={{all:'unset'}}>Contact</button></li>
           <li herf="#"><button style={{all:'unset'}}>About</button></li>  
         </ul>
      </div>
     
       <div>
         <button style={{backgroundColor:"red",color:'white'}}>Login</button>
       </div>

    </div>
    
    </>
    )
}

export default Navigation;