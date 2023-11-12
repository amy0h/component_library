const BannerIcon = ({ type, children }) => {

    return (
      <span className={`banner-icon icon-${type}`}>{children}</span>
    );
  }
  
  export default BannerIcon;