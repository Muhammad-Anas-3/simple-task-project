import Form from "@/components/Form";
import ProductListing from "@/components/ProductListing";
import Product from "@/models/product_schema";

export default async function Home() {

  const products = await Product.find({});
  const data = JSON.stringify(products)


  return (
    <div className="w-[80vw] mx-auto">
      <Form />
      <div className="mt-4 overflow-auto w-[85%] mx-auto">
        <ProductListing data={data} />
      </div>
    </div>
  );
}
