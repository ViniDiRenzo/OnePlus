

function Banner({pageName, imageUrl}) {
  return (
    <div className="banner">
      <img src={imageUrl} alt="image of construction site" />
      <h2 className="banner__header">{pageName}</h2>
    </div>
  )
}

export default Banner