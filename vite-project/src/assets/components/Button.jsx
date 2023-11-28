import './Button.css'
const Button =(button)=>{
    return(
        <button className='buttonstyle'>
            {button.name}
        </button>
    )
}
export default Button