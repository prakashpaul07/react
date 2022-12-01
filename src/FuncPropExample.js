function FuncPropExample(props){
  console.log(props)
  return(
    <div>
        <p>{props.framework}</p>
        <p>{props.id}</p>
    </div>

  )

}
export default FuncPropExample