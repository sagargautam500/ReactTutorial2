function Random(){
  let Num=Math.floor(Math.random()*100)
    return(<>
       <p style={{backgroundColor:"orange"}}>Random Number:{Num}</p>
    </>)
}

export default Random;