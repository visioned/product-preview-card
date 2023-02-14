import mobile from "../assets/image-product-mobile.jpg";
import desktop from "../assets/image-product-desktop.jpg";
import cart from "../assets/icon-cart.svg";

function Card() {
  return (
    <section className="justify-center items-center  min-h-screen lg:flex ">
      <div className="bg-white h-[611px] w-[343px] lg:flex lg:h-[450px] lg:w-[600px] font-mont rounded-[10px] items-center justify-center">
        <picture className="">
          <source media="(min-width: 1024px)" srcSet={desktop} />
          <source media="(max-width: 768px)" srcSet={mobile} />
          <img
            src={mobile}
            alt="perfume"
            className="block lg:h-[450px] lg:w-[1100px] lg:rounded-bl-[10px] lg:rounded-tl-[10px] lg:rounded-tr-none lg:rounded-br-none rounded-tl-[10px] rounded-tr-[10px]"
          />
        </picture>

        <div className="lg:p-8 p-6">
          <p className="uppercase tracking-[4px] pb-[16px] text-[#6C7289] text-xs opacity-85 ">
            perfume
          </p>
          <h1 className="font-fraunces text-[32px] leading-[1em] pb-4 lg:mr-8 lg:pb-[24px]">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-[14px] leading-[22px] pb-4 text-[#6C7289] opacity-75 mr-2 lg:mr-6 lg:pb-[24px]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <p className="font-fraunces text-[32px] text-[#3C8067] pb-[6px] lg:pb-[24px]">
            $149.99
            <span className="font-mont text-[12px] text-[#6C7289] pl-6 align-[7px] opacity-75 line-through">
              $169.99
            </span>
          </p>
          <button className="h-[47px] w-[295px] lg:w-[245px] rounded-[10px] border bg-[#3C8067] text-white flex items-center justify-center hover:bg-[#1A4031]">
            <img src={cart} alt=""/>

            <p className="ml-3">Add to Cart</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Card;
