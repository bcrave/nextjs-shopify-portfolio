import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";

import { LayoutContext } from "../contexts/LayoutContext";

import styles from "../styles/Home.module.css";
import ServiceGrid from "../components/ServiceGrid";
import ServiceGridItem from "../components/ServiceGridItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDraftingCompass,
  faPeopleCarry,
  faStore,
  faSun,
  faTachometerAlt,
  faPlug,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { isFixed } = useContext(LayoutContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Brendon Crave Dev | Shopify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${isFixed && styles.main__fixedHeader}`}>
        <h1 className={styles.h1}>
          Shopify +
          <br />
          Web
          <br />
          Developer
        </h1>
        <div className={styles.hero}>
          <p className={styles.p}>
            Photo by{" "}
            <a href="https://unsplash.com/@georgecoletrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              George Coletrain
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/commerce?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
        <div className={styles.callToAction}>
          <h2 className={styles.h2}>Shopify Expert</h2>
          <p>Looking to improve your Shopify site or build your first?</p>
          <Link href="/contact">
            <a>
              <button className={styles.button}>Get in Touch!</button>
            </a>
          </Link>
        </div>
        <h2 className={styles.h2}>Services Include</h2>
        <ServiceGrid>
          <ServiceGridItem
            itemNumber="1"
            faIcon={<FontAwesomeIcon className={styles.icon} icon={faStore} />}
            serviceTitle="Store Setup"
            serviceDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
          <ServiceGridItem
            itemNumber="2"
            faIcon={
              <FontAwesomeIcon className={styles.icon} icon={faPeopleCarry} />
            }
            serviceTitle="Migration to Shopify"
            serviceDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
          <ServiceGridItem
            itemNumber="3"
            faIcon={
              <FontAwesomeIcon
                className={styles.icon}
                icon={faDraftingCompass}
              />
            }
            serviceTitle="Theme Customization"
            serviceDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
          <ServiceGridItem
            itemNumber="4"
            faIcon={
              <FontAwesomeIcon className={styles.icon} icon={faTachometerAlt} />
            }
            serviceTitle="Optimization"
            serviceDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
          <ServiceGridItem
            itemNumber="5"
            faIcon={<FontAwesomeIcon className={styles.icon} icon={faPlug} />}
            serviceTitle="App Integration"
            serviceDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
          <ServiceGridItem
            itemNumber="6"
            faIcon={
              <FontAwesomeIcon className={styles.icon} icon={faUniversity} />
            }
            serviceTitle="Education"
            serviceDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
        </ServiceGrid>
      </main>
    </div>
  );
}
