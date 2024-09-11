import '../App.css';


function Item_1(Item_1) {

    return(
        <>
           <li class="service__item">
            <h2 class="service__item-title"> {Item_1.title}   </h2>
            <div class="service__item-blob">
         <img src={(Item_1.img)}  alt="package"/>
         {/* <img src={Item_1('../image')} /> */}
            </div>
            <div class="service__item-buttons">
              <button>  {Item_1.description}   </button>
              <button>  {Item_1.name}   </button>
              <button>  {Item_1.price}  </button>
            </div>
          </li>
        </>
  
    )
}
export default Item_1;
