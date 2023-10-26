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
import { useDispatch } from "react-redux";
import {
  addItem,
  postCartItem,
  setOpenCart,
} from "../../store/cartSlice";
import {motion} from 'framer-motion'
import Loader from "../../components/Burger/Loader/Loader";

export interface IFullCard {
  id: string;
  title: string;
  sex: string;
  price: number;
  brand: string;
  link: string;
  size: string[];
  type: string;
  category: string;
  imageUrl: string[];
}

const FullCard = () => {
  const dispatch = useDispatch();
  const [fullCard, setFullCard] = React.useState<IFullCard | undefined>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [size, setSize] = React.useState("");
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
  const addToCart = () => {
    if (fullCard) {
      if (!size) {
        alert("Please, choose your size");
      } else {
        const addedItem = {
          price: fullCard.price,
          id: fullCard.id,
          title: fullCard.title,
          size: size,
          brand: fullCard.brand,
          imageUrl: fullCard.imageUrl,
        };
        dispatch(addItem(addedItem));
        dispatch(postCartItem(addedItem) as any)
        dispatch(setOpenCart(!true));
      }
    }
  };
  const handleSize = (size: any) => {
    setSize(size);
  };
  if(!fullCard){
    return  <Loader/>
  }

  return (
    <motion.section className={styles.fullCard}
    initial={{opacity: 0}}
    animate={{opacity: 1} }
    exit={{opacity: 0, transition: {duration: 0.4}}}>
      <div className={styles.inner}>
        {isLoading ? (
          <Loader/>
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
                  <SwiperSlide key={item} className={styles.swiperSlide}>
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
                <div className={styles.sizes}>
                  Size:
                  <div className={styles.size}>
                    {fullCard.size.map((item) => (
                      <div
                        key={item}
                        className={` ${styles.size_item} ${
                          size === item ? styles.active : ``
                        }`}
                        onClick={() => handleSize(item)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button className={styles.btn} onClick={addToCart}>add to cart</button>
            </div>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default FullCard;
