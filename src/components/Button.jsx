
const Button = ({text,id,className}) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const traget = document.getElementById('counter');
        if (traget && id) {
          const offset = window.innerHeight * 0.15;

          const top = traget.getBoundingClientRect().top + window.screenY - offset;

          window.scrollTo({ top, behavior: 'smooth'})
        }
      }}
      className={` ${className ?? ''} cta-wrapper`} id={id}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img
            src="/images/arrow-down.svg"
            alt="arrow down icon" />
        </div>
      </div>
    </a>
  )
}

export default Button