
function KgButton(){
  let Name='Sagar Gautam'
  let edu=()=>{
    return(
      "Bhaktapur multiple Campus"
    )
  }
  return(<>
  <button>Like this Video</button>
  <h3>{Name}</h3>
  <h4>{edu()}</h4>
  </>)
}
export default KgButton;