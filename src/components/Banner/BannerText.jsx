const BannerText = ({ title, children }) => {
  return (
    <div className="banner-text">
        <h3>{title}</h3>
        {children}
    </div>
  )
}

export default BannerText