
import { socialImgs } from '../../constants'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a className='icon' target='_blank' key={index} href={socialImg.Url}>
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
            
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Mohamed Elmorsy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer