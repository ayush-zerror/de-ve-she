import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ProductDetail = () => {
  const images = [
    "/product/Emerald Kaftan top (2).jpeg",
    "/about/about-banner.webp",
    "/shop/shop-banner1.webp",
  ]
  const ShopCardDetails = [
    {
      id: 1,
      image1: "/product/Ombré crochet patch dress- Brown (1).JPG",
      BrandName: "BrandName",
      ProductName: "ProductName",
      price: "1200",
    },
    {
      id: 2,
      image1: "/product/Emerald Kaftan top (2).jpeg",
      BrandName: "BrandName",
      ProductName: "ProductName",
      price: "1200",
    },
    {
      id: 3,
      image1: "/product/Ombré pink slit top (1).JPG",
      BrandName: "BrandName",
      ProductName: "ProductName",
      price: "1200",
    },
    {
      id: 4,
      image1: "/product/Ombré yellow wrap shirt.jpeg",
      BrandName: "BrandName",
      ProductName: "ProductName",
      price: "1200",
    },
  ]

  // useEffect(() => {
  //   console.log("Initializing GSAP timeline");
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".Similar_prd_wrap",
  //       start: "top 100%",
  //       end: "bottom 0",
  //       scrub: true,
  //       markers: false,
  //       onUpdate: (self) => {
  //         console.log("Scroll progress:", self.progress.toFixed(2));
  //       },
  //     },
  //   });

  //   tl.to(".ProductDets_grid", {
  //     filter: "blur(10px)",
  //     transform: "translateZ(0)",
  //   });

  //   console.log("GSAP timeline created");
  // }, []);
  // State to manage modal visibility and the selected image
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 0) {
        const ReactModalPortalImageCntr = document.querySelector(
          ".ReactModalPortal_img_cntr"
        );
        const cursor = document.querySelector(
          ".ReactModalPortal_img_cntr_cursor"
        );
        const allBigImgCntr = document.querySelectorAll(
          ".ProductDets_Big_card_img-main_cntr img"
        );

        allBigImgCntr.forEach((img) => {
          img.addEventListener("click", () => {
            setSelectedImage(img.src); // Set the selected image URL
            setModalVisible(true); // Show the modal
            console.log("clicked img");
          });
        });

        if (cursor) {
          cursor.addEventListener("click", () => {
            setModalVisible(false); // Hide the modal
          });
        }

        // Cleanup event listeners on component unmount
        return () => {
          allBigImgCntr.forEach((img) => {
            img.removeEventListener("click", () => {
              setSelectedImage(img.src);
              setModalVisible(true);
            });
          });

          if (cursor) {
            cursor.removeEventListener("click", () => {
              setModalVisible(false);
            });
          }
        };
      }
    };

    handleResize(); // Initial call to handle any pre-existing elements
    window.addEventListener("resize", handleResize); // Add resize event listener

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(()=>{
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger: "ProductDetails_wrapper",
        start: "top 8%",
        end: "top 0%",
        scrub: true,
      }
    })
    tl
    .to("header",{
      top: "0%",
      delay: 0.3,
      duration:.6
    },"a")
    .to(".home-slider",{
      top: "-100%",
      delay: 0.3,
      duration:.6
    },"a")
  },[])
 
  
  return (
    <>
      {isModalVisible && (
        <div className="ReactModalPortal_img_cntr">
          <div className="ReactModalPortal_img_cntr_overlay">
            <div className="ReactModalPortal_img_cntr_cursor">
              <div className="ReactModalPortal_img_cross">
                x
              </div>
              <div className="ReactModalPortal_img_cntr_grid">
                <div className="ReactModalPortal_img_cntr_grid_cover">
                  <img
                    src={selectedImage}
                    alt="Model is wearing Nour Hammour's Henri Double Breasted Leather Trench Coat in beige - Front  "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="ProductDetails_wrapper">

        <div className="ProductDetails_cntr">
          <div className="ProductDets_main"></div>
          <div className="ProductDets_grid">
            <div className="ProductDets_img_wrapper">
              <div className="ProductDets_img_slider_wrap">
                <div className="ProductDets_img_slider_cntr">
                  <div className="ProductDets_img_slider_cntr_sticky">
                    {images &&
                      images.map((items, i) => {
                        return (
                          <button
                            key={i}
                            className="ProductDets_img_btn ProductDets_img_align"
                          >
                            <div className="ProductDets_imgs_grid_cntr">
                              <div className="ProductDets_img_single_cntr">
                                <img src={`${items}`} alt={images} />
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    <div className="ProductDets_img_slider_bar_cntr">
                      <div className="ProductDets_img_slider_bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ProductDets_Big_img_wrap">
                {images &&
                  images.map((items) => {
                    return (
                      <button
                        key={items.id}
                        className="ProductDets_Big_img_cntr"
                      >
                        <div className="shop_card_img_bgcover">
                          <div className="ProductDets_Big_card_img-main_cntr">
                            <img src={`${items}`} alt={images} />
                          </div>
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>
            <div className="ProductDets_text_wrapper">
              <div className="ProductDets_blank-div">
                <div className="ProductDets_text-container">
                  <div className="ProductDets_text_container_resp">
                    <div>
                      <span className="ProductDets_text_container_resp_productName ProductDets_common_style">
                        Belted Leather Jacket
                      </span>
                    </div>
                    <div className="ProductDets_text_container_price_resp ProductDets_common_style">
                      <div className="ProductDets_text_container_price_resp_flex">
                        <span>1200</span>
                        <span>&nbsp;INR</span>
                      </div>
                    </div>
                  </div>
                  <div className="ProductDets_title_wrap">
                    <h2 className="ProductDets_text_container_productName ProductDets_common_style">
                      Belted Leather Jacket
                    </h2>
                  </div>
                  <div className="ProductDets_reverse_content_wrapper">
                    <div className="ProductDets_description_wrap">
                      <div className="ProductDets_text-container_prdt_Desc">
                        <div>
                          <p>
                            <meta charSet="utf-8" />
                            <span>Elevate your style with the Olan pants. Crafted from buttery-soft leather, these wide-leg pants offer a sleek and sophisticated look. The elastic waistband ensures comfort, while the luxurious finish makes them perfect for both casual outings and upscale events.</span>
                          </p>
                        </div>
                        <div>
                          Fits large to size, we suggest taking one size
                          smaller than usual.
                        </div>
                      </div>
                    </div>
                    {/* <div className="ProductDets_Variants">
                    <div className="ProductDets_collection-wrap">
                      <fieldset className="ProfuctDets_fieldset">
                        {product &&
                          product.colorVar &&
                          product.colorVar.options.map((el, i) => (
                            <div
                              aria-label="Beige"
                              onClick={() => {
                                setColorSelect(i);
                                handleVariants(
                                  "Color",
                                  product.colorVar.options[i]
                                );
                              }}
                              className={
                                colorSelect == i
                                  ? "shop-card_grid collection_grid Product_active_color"
                                  : "shop-card_grid collection_grid"
                              }
                              key={i}
                            >
                              <div className="ProductDets_collection_imgs_grid_cntr">
                                <div className="ProductDets_imgs_grid_cntr ProductDets_imgs_grid_cntr2">
                                  <div className="ProductDets_collection_img_cntr">
                                    <div
                                      className="Product_color"
                                      style={{ backgroundColor: el }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </fieldset>
                    </div>
                    <div className="ProductDets-size_assist_cntr">
                      <div
                        id="easysize_button"
                        className="easysize_button"
                      >
                        {product.colorVar.options[colorSelect]}
                      </div>
                    </div>
                  </div>
                  <div className="ProductDets_size_Mainwrap">
                    {product &&
                      product.variants &&
                      product.variants.map((variant, i) => (
                        <div
                          className="ProductDets_size_wrap"
                          key={`varient - ${i}`}
                      >
                    <div className="ProductDets-size_numbers_cntr">
                      <div
                        className="ProductDets-size_numbers_inner"
                        id="easysize-size-selector"
                      >
                        {variant.options &&
                          variant.options.map((option, j) => (
                            <div
                              key={`varientOptions-${j}`}
                              onClick={() => {
                                handleVariants(
                                  variant.title,
                                  option
                                );
                                handleVariantSelection(
                                  variant.title,
                                  option,
                                  j
                                );
                              }}
                              aria-current="page"
                              className={`
                                    variantSelect[variant.title] ==
                                    ${variant.title}-${j}
                                      ? "ProductDets-size_numbers acitve"
                                      : "ProductDets-size_numbers"` }
                            >
                              {option}
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="ProductDets-size_assist_cntr">
                    
                      <div
                        id="easysize_button"
                        className="easysize_button"
                      >
                        {variant?.title ?? ""} Assistance
                      </div>
                    </div>
                  </div>
                    ))}
                </div> */}
                  </div>
                  <div className="ProductDets_bottom_links_wrap">
                    <div className="ProductDets_info_links">
                      <button className="ProductDets_info-btn">
                        Details
                      </button>
                      <button className="ProductDets_info-btn">Care</button>
                      <button className="ProductDets_info-btn">
                        Shipping
                      </button>
                      <button className="ProductDets_info-btn">Help</button>
                    </div>
                    <div className="ProductDets_info_help">
                      <p className="ProductDets_info_text sql38zc _1l9nr81o">
                        Complimentary shipping on orders above 500 EUR.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ProductDets_text_btn_resp_cntr ProductDets_common_style">
              <div className="ProductDets_text_btn_resp_wrap">
                <button className="ProductDets_text_btn_resp_w-full">
                  <div className="ProductDets_text_btn_resp_flex">
                    <span>Select a Size</span>
                    <div>
                      <span>1200</span>
                      <span>&nbsp;INR</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="Similar_prd_wrap">
            <h2 className="Similar_prd_head">
              <span className="Similar_prd_pieces">Pieces</span>
              <span className="Similar_prd_like-this">
                You may also like
              </span>
            </h2>
            <div className='Similar_prd_cntr'>
              {ShopCardDetails.map((items) => {
                return (
                  <div key={items.id} className="Similar_prd_card_cntr">
                    <Link
                      href={`/product/${items.id}`}
                      className="shop-card_grid shop-card-w-full"
                    >
                      <div className="similar-prd shop_card_img_bgcover">
                        <div className="shop_card_img-main_cntr">
                          <img
                            src={`${items.image1}`}
                            alt={`${items.BrandName}`}
                          />
                        </div>
                      </div>
                      <div className="similar-prd-text">
                        <h4 className="similar-prd-dets _ProductName">
                          {" "}
                          {`${items.ProductName}`}
                        </h4>
                        <div className="shop_card_price_wrap">
                          <div className="shop_card_price_cntr">
                            <span>{`${items.price}`}</span>
                            <span>&nbsp;INR</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer />
        </div>

      </div>
    </>
  )
}

export default ProductDetail