import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

import ProductCard from "../components/ProductCard";
import products from "../data/items";

export default function Home() {
  return (
    // <div className={styles.container}>
      <div className='grid grid-cols-4 gap-4'>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    // </div>
  )
}
