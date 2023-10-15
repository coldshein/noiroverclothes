import { useParams } from "react-router-dom";
import styles from "./FullCard.module.scss";
import React from "react";
import axios from "axios";

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
  const [fullCard, setFullCard] = React.useState<IFullCard>();
  const { id } = useParams();
  const fetchOneProduct = async (id: string | undefined) => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/items/${id}`
      );
      setFullCard(data);
    } catch (error) {}
  };
  React.useEffect(() => {
    fetchOneProduct(id);
  }, []);
  if (!fullCard) {
    return <h1>loading...</h1>;
  }
  return (
    <section className={styles.fullCard}>
      <div className={styles.inner}>
        <div
          className={
            fullCard.imageUrl.length === 1 ? styles.photo_block : styles.photo_list
          }
        >
          {fullCard.imageUrl.map((url, index) => (
            <img key={index} src={url} alt={fullCard.title} />
          ))}
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{fullCard.title}</h2>
          <h3 className={styles.designer}>{fullCard.brand}</h3>
          <h3 className={styles.type}>
            type: {`${fullCard.sex}'s ${fullCard.type}`}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FullCard;