import Layout from "@/components/Layout";
import ProductForm from "@/components/productForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage() {
  const router = useRouter();
  // const id = router.query.id[0];
  const { id } = router.query;
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) return;

    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data[0]);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Product Form</h1>
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
}