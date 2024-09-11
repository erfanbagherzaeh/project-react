import '../App.css';
import '../App';

function input_type() {
  return (
    <>

      <form class="contact__form">
        <div class="contact__form-item">
          <label for="form-number">شماره موبایل</label>
          <input
            type="text"
            name=""
            id="form-number"
            placeholder="0912*******"
            dir="ltr"
          />
        </div>

        <div class="contact__form-item">
          <label for="form-name">نام و نام خانوادگی</label>
          <input
            type="text"
            name=""
            id="form-name"
            placeholder="نام و نام خانوادگی"
          />
        </div>

        <div class="contact__form-item">
          <label for="form-description">توضیحات</label>
          <textarea
            name=""
            id="form-description"
            placeholder="مثال: لطفا كارشناسی برای بررسی ایراد پكیج اعزام كنید."
          ></textarea>
        </div>

        <input
          class="contact__form-submit"
          type="submit"
          value="ارسال درخواست"
        />
      </form>

    </>
  )
}
export default input_type;