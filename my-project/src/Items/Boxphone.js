
import image9 from '../image/call-center.jpg';
import '../App.css';



function Boxphone(){
    return(
        <>
        
<section class="contact">
<div class="contact__info">
  <div class="contact__blob">
  <img src={image9}   className="image9"/>

  </div>
  <p class="contact__title">
    اعزام كارشناس به تمامی نقاط تهران زیر یک ساعت
  </p>
  <ul class="contact__container">
    <li class="contact__item">
      <p>شمال تهران</p>
      <p class="contact__number">
        <span> 02122669196 </span>
        <i class="bx bxs-phone-call"></i>
      </p>
    </li>

    <li class="contact__item">
      <p>مركز تهران</p>
      <p class="contact__number">
        <span> 02166203123 </span>
        <i class="bx bxs-phone-call"></i>
      </p>
    </li>

    <li class="contact__item">
      <p>غرب تهران</p>
      <p class="contact__number">
        <span> 02144284743 </span>
        <i class="bx bxs-phone-call"></i>
      </p>
    </li>

    <li class="contact__item">
      <p>شرق تهران</p>
      <p class="contact__number">
        <span> 02177241505 </span>
        <i class="bx bxs-phone-call"></i>
      </p>
    </li>

    <li class="contact__item">
      <p>جنوب تهران</p>
      <p class="contact__number">
        <span> 02155795334 </span>
        <i class="bx bxs-phone-call"></i>
      </p>
    </li>
  </ul>
</div>


</section>
        
        </>
    )
}
 export default Boxphone;