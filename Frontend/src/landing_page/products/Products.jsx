import Hero from "./Hero";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import RigthSection from "./RightSection";

export default function Products() {
  return (
    <>
      <Hero />
      <LeftSection
        prductImage="/media/images/kite.png"
        productName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learn=""
        playStore="/media/images/googlePlayBadge.svg"
        appStore="/media/images/appstoreBadge.svg"
      />
      <RigthSection
        prductImage="/media/images/console.png"
        productName="Console"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        learn=""
        playStore="/media/images/googlePlayBadge.svg"
        appStore="/media/images/appstoreBadge.svg"
      />
      <LeftSection
        prductImage="/media/images/coin.png"
        productName="Coin"
        productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learn=""
        playStore="/media/images/googlePlayBadge.svg"
        appStore="/media/images/appstoreBadge.svg"
      />
      <RigthSection
        prductImage="/media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
        learn=""
        playStore="/media/images/googlePlayBadge.svg"
        appStore="/media/images/appstoreBadge.svg"
      />
      <LeftSection
        prductImage="/media/images/varsity.png"
        productName="Varsity mobile"
        productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learn=""
        playStore="/media/images/googlePlayBadge.svg"
        appStore="/media/images/appstoreBadge.svg"
      />
      <Universe />
    </>
  );
}
