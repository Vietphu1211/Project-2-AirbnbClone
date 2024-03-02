import Image from "next/image";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Live from "./components/Live";
import GreatestOutdoors from "./components/GreatestOutdoors";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Banner />
      <Explore />
      <Live />
      <GreatestOutdoors 
      img='https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      title='The Greatest Outdoors'
      description='Wishlist curated by Airbnb'
      linkText='Get Inspired'
      />
    </main>
    <Footer />
    </>
  );
}
