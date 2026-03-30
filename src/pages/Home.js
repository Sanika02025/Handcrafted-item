import ProductCard from "../components/ProductCard";
import "./Home.css";
// Handmade Candle Images
import candle1 from "../assets/candle1.jpeg";
import candle2 from "../assets/candle2.jpeg";
import candle3 from "../assets/candle3.jpeg";
import candle4 from "../assets/candle4.jpeg";
import candle5 from "../assets/candle5.jpeg";
import candle6 from "../assets/candle6.jpeg";
import candle7 from "../assets/candle7.jpeg";
import candle8 from "../assets/candle8.jpeg";

// Wall Painting Images
import painting1 from "../assets/painting.jpeg";
import painting2 from "../assets/painting1.jpeg";
import painting3 from "../assets/painting3.jpeg";
import painting4 from "../assets/painting4.jpeg";
import painting5 from "../assets/painting5.jpeg";
import painting6 from "../assets/painting6.jpeg";
import painting7 from "../assets/painting7.jpeg";
import painting8 from "../assets/painting8.jpeg";

// Handmade Jewelry Images
import jewelry1 from "../assets/jewelry.jpeg";
import jewelry2 from "../assets/jewelry1.jpeg";
import jewelry3 from "../assets/jewelry2.jpeg";
import jewelry4 from "../assets/jewelry3.jpeg";
import jewelry5 from "../assets/jewelry4.jpeg";
import jewelry6 from "../assets/jewelry5.jpeg";
import jewelry7 from "../assets/jewelry6.jpeg";
import jewelry8 from "../assets/jewelry7.jpeg";

// Clay Pot Images
import pot1 from "../assets/pot.jpeg";
import pot2 from "../assets/pot1.jpeg";
import pot3 from "../assets/pot2.jpeg";
import pot4 from "../assets/pot3.jpeg";
import pot5 from "../assets/pot4.jpeg";
import pot6 from "../assets/pot5.jpeg";
import pot7 from "../assets/pot6.jpeg";
import pot8 from "../assets/pot7.jpeg";

// Wooden Tray Images
import tray1 from "../assets/tr1.jpeg";
import tray2 from "../assets/tr2.jpeg";
import tray3 from "../assets/tr3.jpeg";
import tray4 from "../assets/tr4.jpeg";
import tray5 from "../assets/tr5.jpeg";
import tray6 from "../assets/tr6.jpeg";
import tray7 from "../assets/tr7.jpeg";
import tray8 from "../assets/tr8.jpeg";

// Handmade Soap Images
import soap1 from "../assets/s1.jpeg";
import soap2 from "../assets/s2.jpeg";
import soap3 from "../assets/s3.jpeg";
import soap4 from "../assets/s4.jpeg";
import soap5 from "../assets/s5.jpeg";
import soap6 from "../assets/s6.jpeg";
import soap7 from "../assets/s7.jpeg";
import soap8 from "../assets/s8.jpeg";

// Decor Lamp Images
import lamp1 from "../assets/l1.jpeg";
import lamp2 from "../assets/l2.jpeg";
import lamp3 from "../assets/l3.jpeg";
import lamp4 from "../assets/l4.jpeg";
import lamp5 from "../assets/l5.jpeg";
import lamp6 from "../assets/l6.jpeg";
import lamp7 from "../assets/l7.jpeg";
import lamp8 from "../assets/l9.jpeg";

// Wall Hanging Images
import wall1 from "../assets/w1.jpeg";
import wall2 from "../assets/w2.jpeg";
import wall3 from "../assets/w3.jpeg";
import wall4 from "../assets/w4.jpeg";
import wall5 from "../assets/w5.jpeg";
import wall6 from "../assets/w6.jpeg";
import wall7 from "../assets/w7.jpeg";
import wall8 from "../assets/w8.jpeg";

// Flower Vase Images
import vase1 from "../assets/v1.jpeg";
import vase2 from "../assets/v2.jpeg";
import vase3 from "../assets/v3.jpeg";
import vase4 from "../assets/v4.jpeg";
import vase5 from "../assets/v5.jpeg";
import vase6 from "../assets/v7.jpeg";
import vase7 from "../assets/v8.jpeg";
import vase8 from "../assets/v9.jpeg";

// Basket Craft Images
import basket1 from "../assets/b1.jpeg";
import basket2 from "../assets/b2.jpeg";
import basket3 from "../assets/b3.jpeg";
import basket4 from "../assets/b4.jpeg";
import basket5 from "../assets/b5.jpeg";
import basket6 from "../assets/b6.jpeg";
import basket7 from "../assets/b7.jpeg";
import basket8 from "../assets/b8.jpeg";

// Handmade Diary Images
import diary1 from "../assets/d1.jpeg";
import diary2 from "../assets/d2.jpeg";
import diary3 from "../assets/d3.jpeg";
import diary4 from "../assets/d4.jpeg";
import diary5 from "../assets/d5.jpeg";
import diary6 from "../assets/d6.jpeg";
import diary7 from "../assets/d7.jpeg";
import diary8 from "../assets/d8.jpeg";

// Mini Sculpture Images
import sculpture1 from "../assets/sc1.jpeg";
import sculpture2 from "../assets/sc2.jpeg";
import sculpture3 from "../assets/sc3.jpeg";
import sculpture4 from "../assets/sc4.jpeg";
import sculpture5 from "../assets/sc5.jpeg";
import sculpture6 from "../assets/sc6.jpeg";
import sculpture7 from "../assets/sc7.jpeg";
import sculpture8 from "../assets/sc8.jpeg";

function Home({ addToCart , removeFromCart, cart}) {
  const products = [
    { name: "Handmade Candle", price: 499, images: [candle1,candle2,candle3,candle4,candle5,candle6,candle7,candle8] },
    { name: "Wall Painting", price: 1299, images: [painting1,painting2,painting3,painting4,painting5,painting6,painting7,painting8] },
    { name: "Clay Pot", price: 299, images: [pot1,pot2,pot3,pot4,pot5,pot6,pot7,pot8] },
    { name: "Handmade Jewelry", price: 799, images: [jewelry1,jewelry2,jewelry3,jewelry4,jewelry5,jewelry6,jewelry7,jewelry8] },
    { name: "Wooden Tray", price: 699, images: [tray1,tray2,tray3,tray4,tray5,tray6,tray7,tray8] },
    { name: "Handmade Soap", price: 199, images: [soap1,soap2,soap3,soap4,soap5,soap6,soap7,soap8] },
    { name: "Decor Lamp", price: 999, images: [lamp1,lamp2,lamp3,lamp4,lamp5,lamp6,lamp7,lamp8] },
    { name: "Wall Hanging", price: 599, images: [wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8] },
    { name: "Flower Vase", price: 450, images: [vase1,vase2,vase3,vase4,vase5,vase6,vase7,vase8] },
    { name: "Basket Craft", price: 350, images: [basket1,basket2,basket3,basket4,basket5,basket6,basket7,basket8] },
    { name: "Handmade Diary", price: 250, images: [diary1,diary2,diary3,diary4,diary5,diary6,diary7,diary8] },
    { name: "Mini Sculpture", price: 850, images: [sculpture1,sculpture2,sculpture3,sculpture4,sculpture5,sculpture6,sculpture7,sculpture8] }
  ];

  return (
    <div className="home">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            product={product} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;