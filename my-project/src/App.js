// iItem_1port logo from './logo.svg';
import './App.css';
import './Items.css';
import Header from './Header';
import Item_1 from '../src/Items/Item_1';
import Boxlogo from './Items/Boxlogo';
import Foter from './Foter';
import Boxphone from '../src/Items/Boxphone';
import Input_type from '../src/Items/input_type';
import Khadamat from '../src/Items/Khadamat';
import Box_1 from '../src/Items/Box_1';
// import  Item_1 from'../src/image';

function App() {
  return (
    <>
      <div class='box__org'>
        <div className='box__child'>
          
          <Item_1
            title='خدمات  پکیج'
            img={require('./image/package.webp')}
            description="تعمیر پکیج در تهران"
            name="  نصب پکیج  "
            price=" سرویس پکیج  "
            
          />

          <Item_1
            title='خدمات کولرگازی'
            img={require('./image/cooler.webp')}
            description="تعمیر کولرگازی"
            name="  نصب کولر گازی"
            price=" سرویس کولرگازی  "
          />

        </div>
      </div>

      <div class='box__org'>
        <div className='box__child'>
          
          <Item_1
            title='خدمات ماشین لباسشوی'
            img={require('./image/clothe.webp')}
            description=" نصب ماشین لباسشوی "
            name="   سرویس لباسشوی "
            price=" تعمیر ماشین لباسشوی "
          />

          <Item_1
            title='خدمات یخچال'
            img={require('./image/fridge.webp')}
            description="نصب یخچال فریزر  "
            name=" سرویس یخچال فریزر  "
            price="  تعمیر یخچال "
          />

        </div>
      </div>

      <div class='box__org'>
        <div className='box__child'>
          <Item_1
            title='خدمات داکت اسپلیت'
            img={require('./image/doct-split.webp')}
            description=" نکات مهم سرویس داکت اسپلیت که باید بدانید "
            name=" نصب داکت اسپلیت "
            price=" تعمیر داکت اسپلیت"
          />
          <Item_1
            title='خدمات چیلر'
            img={require('./image/chiller.webp')}
            description="نصب چیلر "
            name=" سرویس چیلر "
            price="  تعمیر چیلر "
          />
        </div>
      </div>

      <div class='box__org'>
        <div className='box__child'>
          <Item_1
            title='خدمات ماشین ظرفشویی'
            img={require('./image/zarf.png')}
            description="نصب ماشین ظرفشوی"
            name=" سرویس ماشین ظرفشویی "
            price="  تعمیر ماشین ظرفشوی "
          />
        </div>
      </div>


      <div class='box__org'>
        <div className='box__child'>
          <Boxphone />
          <Input_type />
        </div>
      </div>

      <div class='box__org'>
        <div className='box__child'>
          <Khadamat />
        </div>
      </div>
      <Box_1 />

      <Boxlogo />
      <Foter />
      <Header />

    </>
  );
}

export default App;
