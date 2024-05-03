import { formatPrice } from "@/utils/function";
import "./productStyle.css";

function Product() {
  return (
    <>
      <div className="product-card">
        <div className="more-option-box">
          <div className="more-option">
            <img src="/images/home/product/more-option.svg" alt="more-option" />
          </div>
          <div className="more-option">
            <img src="/images/home/product/more-option.svg" alt="more-option" />
          </div>
          <div className="more-option">
            <img src="/images/home/product/more-option.svg" alt="more-option" />
          </div>
        </div>
        <div className="product-img">
          <img src="/images/home/product/placeholder.svg" alt="placeholder" />
        </div>
        <div className="product-info-box">
          <h3 className="product-name truncate">
            عنوان محصول عنوان محصول عنوان محصول عنوان محصول
          </h3>
          <div className="product-info">
            <div className="rate">
              <span>4.6</span>
              <img src="/images/home/product/rate.svg" alt="placeholder" />
            </div>
            <div className="shop">
              <img src="/images/home/product/shop.svg" alt="مهراشاپ" />
              <span>مهراشاپ</span>
            </div>
          </div>
          <div className="product-purchase-info">
            <div className="addToCart">
              <img src="/images/home/product/addToCart.svg" alt="addToCart" />
            </div>
            <div className="product-price">
              <span className="price">{formatPrice(460000)}</span>
              <div className="last-price">
                {formatPrice(460000)}
                <span className="currency">تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
