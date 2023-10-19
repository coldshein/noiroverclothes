import { useParams } from "react-router-dom";
import styles from "./FullCard.module.scss";
import React from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export interface IFullCard {
  id: string;
  title: string;
  sex: string;
  price: string;
  brand: string;
  link: string;
  size: string[];
  type: string;
  category: string;
  imageUrl: string[];
}

const FullCard = () => {
  const [fullCard, setFullCard] = React.useState<IFullCard | undefined>();
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();
  const fetchOneProduct = async (id: string | undefined) => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/items/${id}`
      );
      setFullCard(data);
      setIsLoading(false);
    } catch (error) {}
  };
  React.useEffect(() => {
    fetchOneProduct(id);
  }, []);
  if (!fullCard) {
    return <>Loading...</>;
  }

  return (
    <section className={styles.fullCard}>
      <div className={styles.inner}>
        {isLoading ? (
          <div>Please wait...</div>
        ) : (
          <>
            <div className={styles.photo}>
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                spaceBetween={100}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {fullCard.imageUrl.map((item) => (
                  <SwiperSlide className={styles.swiperSlide}>
                    <img src={item} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.info}>
              <div className={styles.infoInner}>
                <h2 className={styles.title}>{fullCard.title}</h2>
                <h3 className={styles.designer}>{fullCard.brand}</h3>
                <h3 className={styles.type}>
                  type: {`${fullCard.sex}'s ${fullCard.type}`}
                </h3>
              </div>
              <button className={styles.btn}>add to cart</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FullCard;
