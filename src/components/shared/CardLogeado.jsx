import './styles/CardLogeado.css'

const CardLogeado = () => {

  const handleOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    setTimeout(()=>{
      window.location.reload(true);
  },2000 )
  }

  return (
    <div className='logeado-container'>
      <header className='logeado__header'> <i className='bx bx-user' ></i> </header>
      <h3 className='logeado__name'>{localStorage.getItem("name")}</h3>
      <button onClick={handleOut} className='logeado__btn'>Log out</button>
    </div>
  )
}

export default CardLogeado