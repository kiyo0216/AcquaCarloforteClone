import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { CarouselContext } from '../contexts'
import Carousel from "../components/carousel"
import SliderSection from "../components/slider"

function IndexPage() {
  const [carouselIndex, setCarouselIndex] = useState(0)

  const color = ["#517393", "rgb(155,175,110)", "rgb(219,181,77)", "rgb(167,143,170)"]

  return(
    <div>
      <Helmet>
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=600d09fe5f83968daa7da25d" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
        <script src="js/webflow.js" type="text/javascript"></script>
      </Helmet>
      <div className="header" style={{ backgroundColor: `${color[carouselIndex]}`}}>
        <div className="navbar">
          <div className="logo"><img src="images/Logo.png" loading="lazy" alt="" className="image" /></div>
          <div className="links">
            <a href="#" className="link">Concept</a>
            <div data-w-id="TextBlock" className="dropdownlink link">Profumi &nbsp;<span className="fontawesome"><strong></strong></span></div>
            <a href="#" className="link">CHI SIAMO</a>
            <a href="#" className="link">OMAGGIO A&nbsp;CARLOFORTE</a>
          </div>
          <div data-w-id="dcb2cace-4ca8-3c4d-c337-a6f89f6d8ab0" className="menubutton"><img src="images/Menu.svg" loading="lazy" alt="" /></div>
        </div>
        <div className="dropdowndiv">
          <div id="w-node-5031b461bbfd-874b0c63" className="dropdownblur" />
          <div id="w-node-01491f915726-874b0c63" className="dropdownmenu">
            <a href="#" className="dropdownitem">Mò - Mare</a>
            <a href="#" className="dropdownitem">Mò - Mare</a>
            <a href="#" className="dropdownitem">Mò - Mare</a>
            <a href="#" className="dropdownitem">Mò - Mare</a>
          </div>
        </div>
        <CarouselContext.Provider value={{carouselIndex, setCarouselIndex}}>
          <Carousel />
        </CarouselContext.Provider>
      </div>
      <div className="menu">
        <div id="w-node-3bb7d411700d-874b0c63" className="menublur" />
        <div id="w-node-b57302a37a35-874b0c63" data-w-id="04f971bd-60fc-7113-d45a-b57302a37a35" className="menuexit fontawesome"><strong className="bold-text"></strong></div>
        <div id="w-node-ff4f09723013-874b0c63" className="menuinner">
          <div className="menuleft">
            <div className="menulist">
              <h3 className="menulistheading">Fragranze</h3>
              <ul role="list" className="w-list-unstyled">
                <li className="menulistitem">Sò - Sale</li>
                <li className="menulistitem">Mò- Mare</li>
                <li className="menulistitem">Sù - Sole</li>
                <li className="menulistitem">Sé - Cielo</li>
              </ul>
            </div>
            <div className="menulist right">
              <h3 className="menulistheading">Piramide olfattiva</h3>
              <ul role="list" className="w-list-unstyled">
                <li className="menulistitem">Sò - Sale</li>
                <li className="menulistitem">Mò- Mare</li>
                <li className="menulistitem">Sù - Sole</li>
                <li className="menulistitem">Sé - Cielo</li>
              </ul>
            </div>
          </div>
          <div className="menuright">
            <ul role="list" className="menulist w-list-unstyled">
              <li className="menulistitem">Concept</li>
              <li className="menulistitem">Omaggio a Carloforte</li>
              <li className="menulistitem">Chi siamo</li>
              <li className="menulistitem">Contatti</li>
              <li className="menulistitem">Dove comprare</li>
              <li className="menulistitem">Faq</li>
              <li className="menulistitem" />
              <li className="menulistitem">Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="una">
        <div className="unaimages"><img src="images/Ocean.jpg" loading="lazy" style={{opacity: 0}} data-w-id="cf1cf96e-8761-b9a0-039b-4ed4b7d14b29" srcSet="images/Ocean-p-500.jpeg 500w, images/Ocean.jpg 800w" sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, 47vw" alt="" className="image-3" /><img src="images/Su.png" loading="lazy" style={{opacity: 0}} data-w-id="f54996c3-b641-0361-738a-0e15b49fd03d" alt="" className="image-2" /></div>
        <div className="unatexts">
          <h2 data-w-id="Heading" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="heading">Una dichiarazione d’amore all’Isola</h2>
          <div data-w-id="TextBlock 2" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="text-block">Un punto di verde sull’azzurro acceso del Mar Mediterraneo, così si presenta l’isola di San Pietro, un’isola accarezzata dal maestrale e colorata da fiori selvatici.</div>
          <a data-w-id="Button" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} href="#" className="button w-button">UN’ISOLA TUTTA DA SCOPRIRE<span className="fontawesome rightarrow"><strong className="fontawesome rightarrow"></strong></span></a>
        </div>
      </div>
      <div className="parallax">
        <div id="w-node-87f3b53e4923-874b0c63" className="parallaxinner">
          <div data-w-id="3256ce86-9fac-d66d-f46f-4b579a0a3225" style={{opacity: 0}} className="parallaxtexts">
            <h2 data-w-id="Heading 2" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="heading">Una ricerca durata anni per arrivare all'essenza</h2>
            <div data-w-id="TextBlock 3" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="text-block">Un’esperienza olfattiva immersiva nata per far rivivere la meraviglia dell’Isola a chi l’ha già incontrata e per restituirla, attraverso suggestioni uniche, all'immaginario di ancora non la conosce.</div>
            <a data-w-id="Button 2" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} href="#" className="button w-button">SCOPRI il concept<span className="fontawesome rightarrow"><strong className="fontawesome rightarrow"></strong></span></a>
          </div>
          <div className="parallaximages"><img src="images/Mo.png" loading="lazy" style={{opacity: 0}} data-w-id="30b529b8-fe1c-6e64-7665-36073c116c91" alt="" className="image-4" /></div>
        </div>
      </div>
      <div className="scopri">
        <div className="scopritexts">
          <h2 data-w-id="Heading 3" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="heading">Scopri le fragranze per la casa</h2>
          <div data-w-id="TextBlock 4" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="text-block">Vivi le emozioni di un panorama sensoriale unico con i profumi d’ambiente Acqua Carloforte.<br />Crea l’atmosfera perfetta arricchendo ogni angolo di casa di suggestioni e ricordi.</div>
          <a data-w-id="Button 3" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} href="#" className="button w-button">Come stare sempre in veranda davanti al mare<span className="fontawesome rightarrow"><strong className="fontawesome rightarrow"></strong></span></a>
        </div>
        <div className="scopriimages"><img src="images/Veranda.jpg" loading="lazy" style={{opacity: 0}} data-w-id="79933865-3890-607e-10e3-488903fc859b" alt="" /></div>
      </div>
      <SliderSection />
      <div className="acquista">
        <div className="acquistaimages"><img src="images/Campioncini.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, 43vw" srcSet="images/Campioncini-p-500.png 500w, images/Campioncini.png 905w" alt="" className="image-7" /><img src="images/Rotate.svg" loading="lazy" alt="" className="rotate" /></div>
        <div className="acquistatexts">
          <h1 data-w-id="Heading 5" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="heading">Acquista la Testing Box di Acqua Carloforte</h1>
          <div data-w-id="TextBlock 6" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="text-block">Prova le quattro fragranze di Acqua Carloforte e riceverai un buono per l’acquisto di un profumo da 100ml</div>
          <a data-w-id="Button 4" style={{WebkitTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} href="#" className="button w-button">Acquista </a>
        </div>
      </div>
      <div className="section">
        <a data-w-id="Link Block" href="#" className="link-block w-inline-block">
          <div style={{opacity: 0}} className="text-block-2">Follow</div><img src="images/LogoBlack.svg" loading="lazy" style={{opacity: 0}} alt="" className="image-9" />
          <div style={{opacity: 0}} className="text-block-3">On Instagram</div>
        </a>
      </div>
      <div className="footer">
        <div className="footertop">
          <div className="footerleft">
            <div className="list"><img src="images/LogoTextBlack.svg" loading="lazy" alt="" className="image-10" />
              <ul role="list" className="w-list-unstyled">
                <li className="listitem">Chi siamo</li>
                <li className="listitem">Dove siamo</li>
                <li className="listitem">Faq</li>
                <li className="listitem">Contatti</li>
              </ul>
            </div>
            <div className="list">
              <h3 className="heading-2">Products</h3>
              <ul role="list" className="w-list-unstyled">
                <li className="listitem">Dove comprare</li>
                <li className="listitem">Piramide olfattiva Mò</li>
                <li className="listitem">Piramide olfattiva Sò</li>
                <li className="listitem">Piramide olfattiva Sù</li>
                <li className="listitem">Piramide olfattiva Sè</li>
              </ul>
            </div>
            <div className="list">
              <h3 className="heading-2">Connect</h3>
              <ul role="list" className="w-list-unstyled">
                <li className="listitem">Instagram</li>
                <li className="listitem">info@acquacarloforte.com</li>
              </ul>
            </div>
          </div>
          <div className="footerright">
            <h1 className="heading-3">Iscriviti alla<br />mailing list</h1>
            <div className="text-block-4">Isciriviti ora per sapere in anteprima le esclusive offerte, le novità sui prodotti e tutte le news su Acqua Carloforte</div>
            <div className="w-form">
              <form id="email-form" name="email-form" data-name="Email Form" className="form"><input type="email" className="text-field w-input" maxLength={256} name="email" data-name="Email" placeholder="Inerisci la tua mail" id="email" required /><label className="w-checkbox checkbox-field"><input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" className="w-checkbox-input checkbox" /><span className="checkbox-label w-form-label">Ho preso visione dell'informativa sulla privacy</span></label><input type="submit" defaultValue="ISCRIVITI" data-wait="Please wait..." className="button w-button" /></form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerbottom">
          <div className="text-block-5">Copyright © 2020 Acqua Carloforte. All rights reserved. Informativa Privacy Condizioni di Vendita Informativa Cookies ODR</div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
