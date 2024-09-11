import './App.css';
import Image1 from './image/whatsapp.png'
import Image2 from './image/instagram.png'
import Image3 from './image/enamad-logo.png'


function Foter() {

    return(
<div>


<footer class="footer">
      <ul class="footer__container">
        <li class="footer__item">
          <span class="footer__title">شبكه های اجتماعی</span>
          <div class="footer__mdias">
            <div class="footer__medias-blob">
            <img src={Image1} alt="chiller service"  className="image1"/>

            </div>
            <div class="footer__medias-blob">
            <img src={Image2} alt="chiller service"  className="image2"/>

            </div>
          </div>
        </li>

        <li class="footer__item">
          <span class="footer__title">دانلود اپلیکیشن</span>
          <div class="footer__apps">
            <button>Android(به زودی)</button>
            <button>ios(به زودی)</button>
          </div>
        </li>

        <li class="footer__item">
          <span class="footer__title">مجوز‌ها و نماد‌ها</span>
          <div class="footer__justification">
            <div class="footer__justification-blob">
            <img src={Image3} alt="chiller service"  className="image12"/>

            </div>
            <span class="footer__justification-text">نماد اعتماد و كيفيت</span>
          </div>
        </li>
      </ul>

      <div class="copy-right">
        <p>
          کلیه حقوق مادی و معنوی این سایت برای تهران سرویس محفوظ است. استفاده از
          محتوای سایت تنها در صورت پذیرش شرایط و ضوابط امکان پذیر است.
        </p>
        <p>© ۱۴۰۳ - تهران سرویس آنلاین</p>
      </div>
    </footer> */

</div>
        
  )
}

export default Foter;