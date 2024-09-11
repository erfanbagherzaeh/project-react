import './App.css';
import image1 from './image/banner.webp';

function Header() {
    return (
 <div>

    <header class="header">
      <div class="numbers">
        <a class="numbers__item">
          <i class="bx bxs-phone-call"></i>
          <p>شمال تهران:</p>
          <p class="numbers__number" dir="ltr">
            <span> <span>021</span> 22669196 </span>
          </p>
        </a>

        <a class="numbers__item">
          <i class="bx bxs-phone-call"></i>
          <p>مركز تهران:</p>
          <p class="numbers__number" dir="ltr">
            <span> <span>021</span> 66203123 </span>
          </p>
        </a>

        <a class="numbers__item">
          <i class="bx bxs-phone-call"></i>
          <p>غرب تهران:</p>
          <p class="numbers__number" dir="ltr">
            <span> <span>021</span> 44284743 </span>
          </p>
        </a>

        <a class="numbers__item">
          <i class="bx bxs-phone-call"></i>
          <p>شرق تهران:</p>
          <p class="numbers__number" dir="ltr">
            <span> <span>021</span> 77241505 </span>
          </p>
        </a>

        <a class="numbers__item">
          <i class="bx bxs-phone-call"></i>
          <p>جنوب تهران:</p>
          <p class="numbers__number" dir="ltr"><span>021</span> 55795334</p>
        </a>
      </div>

      <nav class="nav">
        <button class="nav__btn-menu"><i class="bx bx-menu"></i></button>

        <ul class="nav__list">
          <li class="nav__item nav__home">
            <a href="#"> خانه </a>
          </li>

          <li class="nav__item">
            <a href="#"> خدمات </a>
          </li>

          <li class="nav__item">
            <a href="#"> مطالب آموزشی </a>
            <i class="bx bx-chevron-down"></i>
          </li>

          <li class="nav__item">
            <a href="#"> درباره ما </a>
          </li>
        </ul>

        <div class="nav__banner">
        <img src={image1} alt="package service"  className="image1"/>

          {/* <img src="./images/banner.webp" alt="" /> */}
        </div>
      </nav>
    </header>

 </div>

    );
}

export default Header;