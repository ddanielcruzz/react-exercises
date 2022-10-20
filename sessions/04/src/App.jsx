import "./App.css";
import { ProductCard } from "./components/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    stock: 0,
    category: "smartphones",
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    stock: 34,
    category: "smartphones",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    stock: 36,
    category: "smartphones",
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    stock: 123,
    category: "smartphones",
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    stock: 0,
    category: "smartphones",
  },
];

function App() {
  return (
    <main>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            category={product.category}
            title={product.title}
            description={product.description}
            price={product.price}
            stock={product.stock}
          />
        );
      })}
    </main>
  );
}

export default App;
