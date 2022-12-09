const Input = (props) => {
    return(
      <div className="w-full">
        <input  className="w-full h-10 rounded-md"
        value={props.value}
        onChange={props.function}
        />
      </div>
    )
  }

export default Input