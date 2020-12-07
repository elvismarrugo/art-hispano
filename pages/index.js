import { useState,  useMemo, useRef } from "react";
// import { db } from "../firebase/firebase.config";
import styles from "../styles/pages/Index.module.scss";
import ProductCard from "../components/ProductCard";
import LineTitle from "@components/LineTitle";
import Search from "../components/Search";

export default function Home() {
  // const router = useRouter();
  // const { id } = router.query;

  const [products] = useState([]);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  // const [ setError] = useState(null);

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  const filteredProducts = useMemo(
    () =>
      products.filter((item) => {
        return products.name.toLowerCase().includes(search.toLowerCase());
      }),
    [products, search]
  );

  // {filteredProducts.map(product => (
  //   <div className="item" key={product.id}>
  //        <ProductCard
  //           id={item.id}
  //           key={item.id}
  //           imgUrl={item.image}
  //           price={item.price}
  //         />
  //   </div>
  // ))
  // }

  // const getProduct = async () => {
  //   try {
  //     const data = await db.collection("products").limit(4).get();
  //     const arrayData = data.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     console.log(arrayData);
  //     setProduct(arrayData);
  //   } catch (error) {
  //     // setError(error);
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className={styles.slider}>
        <div className={styles.carusel}>
          <img src="home.png" alt="" />
        </div>

        <div className={styles.container}>
          <div className={styles.products_container}>
            <div>
              <LineTitle text={"Productos Destacados"} />
              <div className={styles.products_container_info}>
                {filteredProducts.map((item) => (
                  <ProductCard
                    id={item.id}
                    key={item.id}
                    imgUrl={item.image}
                    price={item.price}
                  />
                ))}
              </div>

              <LineTitle text={"Recomendados para ti"} />
              <div className={styles.products_container_info}>
                {filteredProducts.map((item) => (
                  <ProductCard
                    id={item.id}
                    key={item.id}
                    imgUrl={item.image}
                    price={item.price}
                  />
                ))}
              </div>

              <LineTitle text={"Novedades"} />
              <div className={styles.products_container_info}>
                {filteredProducts.map((item) => (
                  <ProductCard
                    id={item.id}
                    key={item.id}
                    imgUrl={item.image}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.products_container_oferta}>
            <div>
              <button>Oferta</button>
              <img
                className={styles.oferta}
                src="ajedrez.png"
                alt="Ajedrez"
                width="80%"
                height="80%"
              />
            </div>

            <div>
              <h2>Instrumentos Musicales</h2>
              <img src="flauta.png" alt="Flauta" width="60%" height="80%" />
            </div>

            <div>
              <h2>Bisuter&iacute;a</h2>
              <img src="bisuteria.png" alt="" width="80%" height="80%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}