import { Link } from "react-router-dom";
import { Button } from "antd";

export default function ProductDetail({product}){
    return(
        <div className="product">
            <div className="product-intro text-color-main">
                <img
                className="product-cover"
                src={product.class_cover}
                />
                <div className="product-info-container">
                    <p className="product-name">{product.class_name}</p>
                    <p className="product-price">{product.class_price}</p>
                    <p className="product-bought">{product.class_bought}</p>
                    <p className="product-time">{product.class_time}</p>
                    <Button className="product-addtocart-btn bg-main text-white">加入購物車</Button>
                </div>
            </div>
            <div className="product-phone">
                <div className="product-phone-block">課程介紹</div>
                <div className="product-phone-bar"></div>
            </div>
            
            <div className="product-btns bg-container">
                <Button autoFocus type="text" className="product-btn text-color-main bg-container">課程介紹</Button>
                <Button type="text" className="product-btn text-color-main bg-container">內容試閱</Button>
                <Button type="text" className="product-btn text-color-main bg-container">Q&A</Button>
            </div>
            <div className="product-content">
                {product.class_introduction.map(introdetail => (
                    <div className="product-content-detail">{introdetail}</div>
                ))}
                {product.class_image.map(image => (
                    <img
                    className="product-content-image"
                    src={image}
                    />
                ))}
                
            </div>
            <div className="product-phone">
                <div className="product-phone-block">內容試閱</div>
                <div className="product-phone-bar"></div>
            </div>
            <div className="product-phone">
                <div className="product-phone-block">Q&A</div>
                <div className="product-phone-bar"></div>
            </div>
        </div>
    )
}