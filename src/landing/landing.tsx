"use client"

import "./landing.css"
import { useCart } from "../cartContext"
import toast from "react-hot-toast"

export function Landing(props: { handleNextPage: any }) {
  const { total, cartItems, addToCart } = useCart() as any

  const handleAddtoCart = (items: any) => {
    addToCart(items)
    toast.success("تم اضافة المنتج")
  }
  return (
    <>
      <div className="__className" style={{ zoom: 0.9 }} dir="rtl">
        <div className="MainContainer_childWrapper">
          <div className="MainContainer_headerContainer5N">
            <header className="Header_header__HSEQ9 Header_show">
              <div className="Header_nav">
                <div className="Header_logoWithCatalog">
                  <a
                    rel="noopener noreferrer"
                    data-analytic-label="logo"
                    data-analytic-element-location="header"
                    data-test-id="snoonulogo"
                    className="Logo_logo__oq6_b"
                    href="#"
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Snoonu"
                        src="/logo.png"
                        decoding="async"
                        data-nimg="fill"
                        className="Logo_fullLogo__l2rPp"
                        style={{
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "180px",
                          height: "auto",
                          minWidth: "99px",
                          objectFit: "contain",
                        }}
                      />
                    </span>
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Snoonu"
                        src="/logo.png"
                        decoding="async"
                        data-nimg="fill"
                        className="Logo_miniLogo__W0OJP"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: '-50%',
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 115,
                          height: "auto",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </span>
                  </a>
                  <div className="CatalogMenu_wrapper">
                    <button
                      className="Button_button Button_secondary Button_small CatalogButton_button__wTnA9"
                      data-analytic-label="catalogMenuButton"
                      data-analytic-element-location="header"
                    >
                      <a href="#cart">
                        <span className="Button_content">
                          <span data-test-id="" className="Icon_icon Button_icon__Shlur">
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                              }}
                            >
                              <img
                                alt="icon"
                                src="/menu.4fcd2317.svg"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  bottom: 0,
                                  right: 0,
                                  boxSizing: "border-box",
                                  padding: 0,
                                  border: "none",
                                  margin: "auto",
                                  display: "block",
                                  width: 0,
                                  height: 0,
                                  minWidth: "100%",
                                  maxWidth: "100%",
                                  minHeight: "100%",
                                  maxHeight: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </span>
                          </span>
                          <span className="CatalogButton_text">القائمة</span>
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
                <div className="Search_wrappe">
                  <div>
                    <span data-test-id="" className="Icon_icon">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <img
                          alt="icon"
                          src="/arrow_left.92b153fa.svg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <form action="#" className="Search_searchWrappe">
                    <div className="SearchSelector_wrapper__P_w2s">
                      <div className="SearchSelector_selector">
                        <p className="Typography_p8 SearchSelector_label">جميع الأقسام</p>
                        <span data-test-id="" className="Icon_icon" style={{ width: 16, height: 16 }}>
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                            }}
                          >
                            <img
                              alt="icon"
                              src="/chevron_down_gray.c120c600.svg"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="Autocomplete_wrapper">
                      <span
                        data-test-id=""
                        className="Icon_icon Autocomplete_searchIcon   Autocomplete_smallIcon   Search_searchIcon__4o9Ok"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="icon"
                            src="/search.8dc73f65.svg"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </span>
                      </span>
                      <div className="Autocomplete_rightSection">
                        <button data-test-id="searchFieldBtn" className="SearchButton_button  ">
                          <span data-test-id="" className="Icon_icon" style={{ width: 20, height: 20 }}>
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                              }}
                            >
                              <img
                                alt="icon"
                                src="/search_white.svg"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  bottom: 0,
                                  right: 0,
                                  boxSizing: "border-box",
                                  padding: 0,
                                  border: "none",
                                  margin: "auto",
                                  display: "block",
                                  width: 0,
                                  height: 0,
                                  minWidth: "100%",
                                  maxWidth: "100%",
                                  minHeight: "100%",
                                  maxHeight: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="Header_sideWrapper">
                  <div className="CartButton_wrapper" style={{ display: "block" }}>
                    <button
                      className="Button_button Button_primary Button_small"
                      data-test-id="cartBtn"
                      data-analytic-label="cartButton"
                      data-analytic-element-location="header"
                    >
                      <span className="Button_content" style={{ background: "#00aa4a" }}>
                        <div
                          className="CartButton_cartButton  "
                          style={{
                            color: "white",
                            padding: "2px 2px ",
                            fontSize: 10,
                            borderRadius: 20,
                          }}
                        >
                          <img alt="icon" decoding="async" data-nimg="fill" src="/cart.svg" className="asyncicon" />
                          <span>{total.toFixed(2) + ""}</span> د.ب
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </header>
          </div>{" "}
          <div className="ContentWrapper_container">
            <h1 className="Typography_h1__cT2UT">لحوم ألمواشي</h1>
            <p className="Typography_p7  Description_text__qN1Uu">
              اكتشف منتجاتنا عالية الجودة من اللحوم الطازجة والمستوردة والدواجن المميزة، اطلب الآن مع أفضل وأسرع خدمة
              توصيل اونلاين.
            </p>
            <div className="Carousel_wrapper">
              <div className="Carousel_navButtonWrapper__gL_66">
                <div
                  data-analytic-label="carouselButtonPrev"
                  data-analytic-event-content="subCategories"
                  className="NavButton_wrapper__iJpe4 NavButton_prev__lHoNZ"
                >
                  <span data-test-id="" className="Icon_icon" style={{ width: 24, height: 24 }}>
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/carousel_arrow_left.9172eaa1.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className="Carousel_carousel__SoVOb SubCategories_row">
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={181}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/1.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "medium",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "70px",
                              objectFit: "contain",
                              borderRadius: "100%",
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">عروض</p>
                  </div>
                </div>
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={3644}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/3.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "medium",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">لحم بقري</p>
                  </div>
                </div>
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={2198}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/2.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "medium",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "90%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">دجاج طازج</p>
                  </div>
                </div>
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={3405}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/4.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "medium",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">لحم غنم</p>
                  </div>
                </div>
              </div>
              <div className="Carousel_navButtonWrapper__gL_66" />
            </div>
            <div className="FilterPresets_wrapper__sSfR_">
              <div className="FilterPresets_filterWrapper">
                <div
                  data-analytic-label="fastFilter"
                  data-analytic-event-content={1}
                  data-analytic-event-action="filter_apply"
                  className="FilterPresets_filter__czMu5 cart FilterPresets_first__ID2kE"
                >
                  <span data-test-id="" className="Icon_icon FilterPresets_icon" style={{ width: 24, height: 24 }}>
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/free_delivery.33e8a802.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                  <p className="Typography_p6__xuxGw">توصيل مجاني</p>
                </div>
              </div>
              <div className="FilterPresets_filterWrapper ">
                <div
                  data-analytic-label="fastFilter"
                  data-analytic-event-content={2}
                  data-analytic-event-action="filter_apply"
                  className="FilterPresets_filter__czMu5 cart"
                >
                  <p className="Typography_p6__xuxGw">خلال 40 دقيقة</p>
                </div>
              </div>
              <div className="FilterPresets_filterWrapper">
                <div
                  data-analytic-label="fastFilter"
                  data-analytic-event-content={4}
                  data-analytic-event-action="filter_apply"
                  className="FilterPresets_filter__czMu5 cart FilterPresets_last__3dQB8"
                >
                  <p className="Typography_p6__xuxGw">نقل مخصص</p>
                </div>
              </div>
            </div>
          </div>
          <div id="productList" className="ContentWrapper_container">
            <div className="MerchantCard_wrapper__ATC0P" style={{ margin: "-11px", borderRadius: "24px 24px 0 0" }}>
              <div className="MerchantCard_imageWrapper">
                <div className="MerchantPromoTag_promotion__vyiug MerchantCard_promotion__ahhw_">
                  <div className="MerchantPromoTag_promoTag__FEfqB MerchantPromoTag_percentageOff__nlGd7">
                    <p className="Typography_p10__GTCdN">خصم %30</p>
                  </div>
                  <div className="MerchantPromoTag_promoTag__FEfqB MerchantPromoTag_supportLocal__q0RXl">
                    <p className="Typography_p10__GTCdN">ادعم المحلي</p>
                  </div>
                </div>
                <span className="minus">
                  <img
                    alt="قائمة لحوم ألمواشي"
                    src="/24.png"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "medium",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <noscript />
                </span>
                <div className="MerchantCard_deliveryTime__hFF6r">
                  <span
                    data-test-id=""
                    className="Icon_icon MerchantCard_driverIcon__VOTuk"
                    style={{ width: 16, height: 16 }}
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/driver-white.39436dda.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                  <p className="Typography_p8">40 دقيقة</p>
                </div>
              </div>
              <div className="MerchantCard_content__aOUZU">
                <div className="MerchantCard_primaryDetails__zEdMX">
                  <p
                    className="Typography_p1__A2FUF MerchantCard_name__e7RSA"
                    style={{ fontSize: 25, height: 35, padding: "5px 0" }}
                  >
                    قائمة لحوم ألمواشي
                  </p>
                </div>
                <div className="MerchantCard_secondaryDetails__c9r_K">
                  <div className="MerchantCard_rating__yd2Tt">
                    <span data-test-id="" className="Icon_icon" style={{ width: 12, height: 12 }}>
                      <span className="minus">
                        <img
                          alt="icon"
                          src="/star_yellow.3109f807.svg"
                          decoding="async"
                          data-nimg="fill"
                          className="asyncicon"
                        />
                        <noscript />
                      </span>
                    </span>
                    <p className="Typography_p8">4.7</p>
                  </div>
                  <p className="Typography_p8 MerchantCard_tags___u15_">اللحوم الطازجة والمستوردة والدواجن المميزة</p>
                </div>
              </div>
            </div>
            <div className="_slug__merchantDetailsWrapper__Ni_d0">
              <div className="MerchantDetails_wrapper__NGWQ1">
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">وقت التوصيل</p>
                  <span>
                    <p className="Typography_p1__A2FUF">
                      40{/* */} {/* */}دقيقة
                    </p>
                  </span>
                </div>
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">التقييم</p>
                  <span>
                    <p className="Typography_p1__A2FUF">4.7</p>
                  </span>
                </div>
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">المسافة</p>
                  <span>
                    <div className="MerchantPriceRange_averagePrice__tgZLX">
                      <p className="Typography_p1__A2FUF MerchantPriceRange_price__XHs4b MerchantPriceRange_priceActive__8rgoP">
                        15 كيلو
                      </p>
                    </div>
                  </span>
                </div>
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">ساعات العمل</p>
                  <span>
                    <p className="Typography_p1__A2FUF">
                      <span className="MerchantDetails_status__UAoUR MerchantDetails_open__C8KJd">مفتوح</span>
                    </p>
                  </span>
                </div>
              </div>
              <div className="SearchInMerchant_wrapper__WNY3F">
                <form action="#" className="SearchInMerchant_searchWrapper__BhKze">
                  <div className="Autocomplete_wrapper">
                    <span data-test-id="" className="Icon_icon Autocomplete_searchIcon   Autocomplete_smallIcon  ">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <img
                          alt="icon"
                          src="/search.8dc73f65.svg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </span>
                    </span>

                    <div className="Autocomplete_rightSection" />
                  </div>
                </form>
              </div>
              <div className="_slug__description___UXGB">
                أطلب الآن عبر موقعنا واحصل على خدمة توصيل سريعة في غضون 28 دقيقة.
              </div>
            </div>
            <div className="BestSelling_wrapper__QVPK0 quantities_1" id="cart">
              <h2 className="Typography_h2__Gzo5Y BestSelling_title__NuZ2_">عروض اليوم</h2>
              <div className="BestSelling_group__aDxsJ" style={{ position: "relative", overflow: "scroll" }}>
              <div className="pro_1">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="beef-premium-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="10 كيلو لحم بقري ممتاز"
                          src="/ais.jpg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "medium",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">45.00 د.ب</h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                      ذبائح العيد -  خاروف نعيمي                       </p>
                    </div>
                    <div className="a_pluss_1">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: "ذبائح العيد -  خاروف نعيمي ",
                            price: "45.00",
                            img: "/placeholder.svg?height=200&width=200",
                          })
                        }}
                        data-product-id="product_1"
                        data-product-image="/placeholder.svg?height=200&width=200"
                        data-product-name="10 كيلو لحم بقري ممتاز طازج"
                        data-price={7.0}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">إضافة</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5 id="qquantity_1" className="Typography_h5__MRrA0 quantity_1">
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_1">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="beef-premium-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="10 كيلو لحم بقري ممتاز"
                          src="/5859495368377616247.jpg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "medium",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">30.00 د.ب</h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                      ذبائح العيد -  خروف صومالي                       </p>
                    </div>
                    <span style={{fontSize:12,textAlign:'center',color:"Highlight"}}>
                    (الوزن من 12 الى 14 كيلو)
                    </span>
                    <div className="a_pluss_1">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: "ذبائح العيد -  خروف صومالي ",
                            price: "30.00",
                            img: "/placeholder.svg?height=200&width=200",
                          })
                        }}
                        data-product-id="product_1"
                        data-product-image="/placeholder.svg?height=200&width=200"
                        data-product-name="10 كيلو لحم بقري ممتاز طازج"
                        data-price={7.0}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">إضافة</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5 id="qquantity_1" className="Typography_h5__MRrA0 quantity_1">
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_1">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="beef-premium-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="10 كيلو لحم بقري ممتاز"
                          src="https://cdn.salla.sa/XYzRj/xiyM7mdnGrPa1OsDrg7qSR1HDxHN3pLBD56YBeJI.png"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "medium",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">7.00 د.ب</h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        10 كيلو لحم بقري ممتاز طازج
                      </p>
                    </div>
                    <div className="a_pluss_1">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: "10 كيلو لحم بقري ممتاز طازج",
                            price: "7.00",
                            img: "/placeholder.svg?height=200&width=200",
                          })
                        }}
                        data-product-id="product_1"
                        data-product-image="/placeholder.svg?height=200&width=200"
                        data-product-name="10 كيلو لحم بقري ممتاز طازج"
                        data-price={7.0}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">إضافة</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5 id="qquantity_1" className="Typography_h5__MRrA0 quantity_1">
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_1">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="chicken-breast-6kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="6 كيلو صدور دجاج"
                          src="https://cdn.salla.sa/XRVjV/7c4401c0-ec89-4dd2-af3c-82f31bac4262-1000x1000-4XAOOzl8EA3wmJi0iNFjClPvor7yQf7WMiDZItAS.png"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "medium",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">1.00 د.ب</h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        6 كيلو صدور دجاج طازجة
                      </p>
                    </div>
                    <div className="a_pluss_1">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: "6 كيلو صدور دجاج طازجة",
                            price: "1.00",
                            img: "/placeholder.svg?height=200&width=200",
                          })
                        }}
                        data-product-id="product_1"
                        data-product-image="/placeholder.svg?height=200&width=200"
                        data-product-name="6 كيلو صدور دجاج طازجة"
                        data-price={1.0}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">إضافة</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5 id="qquantity_1" className="Typography_h5__MRrA0 quantity_1">
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_1">
                  <div className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS" data-id="lamb-meat-1kg">
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="1 كيلو لحم غنم"
                          src="https://cdn.salla.sa/XYzRj/laSFQqoW46mEVlZqYxeSbs7vu2zcDqMTS81DPuRG.jpg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "medium",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">2.50 د.ب</h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        كيلو لحم غنم طازج مع التنظيف
                      </p>
                    </div>
                    <div className="a_pluss_1">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: "كيلو لحم غنم طازج مع التنظيف",
                            price: "2.5",
                            img: "/placeholder.svg?height=200&width=200",
                          })
                        }}
                        data-product-id="product_1"
                        data-product-image="/placeholder.svg?height=200&width=200"
                        data-product-name="كيلو لحم غنم طازج مع التنظيف"
                        data-price={2.5}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">إضافة</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5 id="qquantity_1" className="Typography_h5__MRrA0 quantity_1">
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Products_wrapper__DZlbk quantities_2">
              <h2 className="Typography_h2__Gzo5Y Products_title__qA1wA" style={{ margin: 0 }}>
                &nbsp;
              </h2>
              <div className="Products_group__gsBas">
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={800478}
                  className="ProductCardHorizontal_wrapper__byIUf pro_1"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="عرض كل البحرين"
                        src="https://cdn.salla.sa/XYzRj/xiyM7mdnGrPa1OsDrg7qSR1HDxHN3pLBD56YBeJI.png"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">عرض كل البحرين</h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        10 كيلو لحم بقري بحريني ممتاز طازج.
                      </p>
                    </div>
                    <div className="ProductCardHorizontal_priceWrapper__3OYMk" data-id="bahraini-beef-premium-10kg">
                      <h5 className="Typography_h5__MRrA0">7.000 د.ب</h5>
                      <div className="a_pluss_1">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_1"
                          data-product-image="/placeholder.svg?height=200&width=200"
                          data-product-name="10 كيلو لحم بقري بحريني ممتاز طازج"
                          data-product-price={7.0}
                          data-class-add="btn_add_1"
                          data-class-remove="btn_remove_1"
                          data-class-pluss="btn_pluss_1"
                          data-class-aremove="a_pluss_1"
                          data-quantity-id="quantity_1"
                          data-qquantity-id="qquantity_1"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: "10 كيلو لحم بقري بحريني ممتاز طازج",
                              price: "7.0",
                              img: "/placeholder.svg?height=200&width=200",
                            })
                          }}
                        >
                          <span className="Button_content btn_add_1">إضافة</span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                        </a>
                      </div>
                      <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5 id="quantity_1" className="Typography_h5__MRrA0 quantity_1">
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_1">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={800478}
                  className="ProductCardHorizontal_wrapper__byIUf pro_1"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="عرض المواشي"
                        src="https://cdn.salla.sa/XYzRj/laSFQqoW46mEVlZqYxeSbs7vu2zcDqMTS81DPuRG.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">عرض المواشي</h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        1 كيلو لحم غنم طازج مع التنظيف.
                      </p>
                    </div>
                    <div className="ProductCardHorizontal_priceWrapper__3OYMk" data-id="lamb-meat-1kg">
                      <h5 className="Typography_h5__MRrA0">1.000 د.ب</h5>
                      <div className="a_pluss_1">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_1"
                          data-product-image="/placeholder.svg?height=200&width=200"
                          data-product-name="1 كيلو لحم غنم طازج مع التنظيف"
                          data-product-price={1.0}
                          data-class-add="btn_add_1"
                          data-class-remove="btn_remove_1"
                          data-class-pluss="btn_pluss_1"
                          data-class-aremove="a_pluss_1"
                          data-quantity-id="quantity_1"
                          data-qquantity-id="qquantity_1"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: "1 كيلو لحم غنم طازج مع التنظيف",
                              price: "1.0",
                              img: "/placeholder.svg?height=200&width=200",
                            })
                          }}
                        >
                          <span className="Button_content btn_add_1">إضافة</span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                        </a>
                      </div>
                      <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5 id="quantity_1" className="Typography_h5__MRrA0 quantity_1">
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_1">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={800478}
                  className="ProductCardHorizontal_wrapper__byIUf pro_1"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="عرض اليوم"
                        src="https://cdn.salla.sa/XRVjV/7c4401c0-ec89-4dd2-af3c-82f31bac4262-1000x1000-4XAOOzl8EA3wmJi0iNFjClPvor7yQf7WMiDZItAS.png"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">عرض اليوم</h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        4 كيلو صدور دجاج طازجة مقطعة.
                      </p>
                    </div>
                    <div className="ProductCardHorizontal_priceWrapper__3OYMk" data-id="chicken-breast-4kg">
                      <h5 className="Typography_h5__MRrA0">2.50 د.ب</h5>
                      <div className="a_pluss_1">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_1"
                          data-product-image="/placeholder.svg?height=200&width=200"
                          data-product-name="4 كيلو صدور دجاج طازجة مقطعة"
                          data-product-price={2.5}
                          data-class-add="btn_add_1"
                          data-class-remove="btn_remove_1"
                          data-class-pluss="btn_pluss_1"
                          data-class-aremove="a_pluss_1"
                          data-quantity-id="quantity_1"
                          data-qquantity-id="qquantity_1"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: "4 كيلو صدور دجاج طازجة مقطعة",
                              price: "2.50",
                              img: "/placeholder.svg?height=200&width=200",
                            })
                          }}
                        >
                          <span className="Button_content btn_add_1">إضافة</span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                        </a>
                      </div>
                      <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5 id="quantity_1" className="Typography_h5__MRrA0 quantity_1">
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_1">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={800478}
                  className="ProductCardHorizontal_wrapper__byIUf pro_1"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="عرض اليوم"
                        src="https://ozostore.net/wp-content/uploads/2024/09/1000150127.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">كرتون لحم بقري</h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        كرتون لحم بقري أسترالي ممتاز
                      </p>
                    </div>
                    <div className="ProductCardHorizontal_priceWrapper__3OYMk" data-id="australian-beef-box">
                      <h5 className="Typography_h5__MRrA0">4.50 د.ب</h5>
                      <div className="a_pluss_1">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_1"
                          data-product-image="https://ozostore.net/wp-content/uploads/2024/09/1000150127.jpg"
                          data-product-name="كرتون لحم بقري أسترالي ممتاز"
                          data-product-price={42.5}
                          data-class-add="btn_add_1"
                          data-class-remove="btn_remove_1"
                          data-class-pluss="btn_pluss_1"
                          data-class-aremove="a_pluss_1"
                          data-quantity-id="quantity_1"
                          data-qquantity-id="qquantity_1"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: "كرتون لحم بقري أسترالي ممتاز",
                              price: "4.50",
                              img: "/placeholder.svg?height=200&width=200",
                            })
                          }}
                        >
                          <span className="Button_content btn_add_1">إضافة</span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                        </a>
                      </div>
                      <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5 id="quantity_1" className="Typography_h5__MRrA0 quantity_1">
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_1">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={800478}
                  className="ProductCardHorizontal_wrapper__byIUf pro_1"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="هامور بحريني"
                        src="https://aloolahma.com/2023/02/20/63f365c64eaaf.png"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">لحم غنم بحريني</h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        1 كيلو لحم غنم بحريني طازج.
                      </p>
                    </div>
                    <div className="ProductCardHorizontal_priceWrapper__3OYMk" data-id="bahraini-lamb-1kg">
                      <h5 className="Typography_h5__MRrA0">2.00 د.ب</h5>
                      <div className="a_pluss_1">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_1"
                          data-product-image="/placeholder.svg?height=200&width=200"
                          data-product-name="1 كيلو لحم غنم بحريني طازج"
                          data-product-price={2.0}
                          data-class-add="btn_add_1"
                          data-class-remove="btn_remove_1"
                          data-class-pluss="btn_pluss_1"
                          data-class-aremove="a_pluss_1"
                          data-quantity-id="quantity_1"
                          data-qquantity-id="qquantity_1"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: "1 كيلو لحم غنم بحريني طازج",
                              price: "2.00",
                              img: "/placeholder.svg?height=200&width=200",
                            })
                          }}
                        >
                          <span className="Button_content btn_add_1">إضافة</span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                        </a>
                      </div>
                      <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5 id="quantity_1" className="Typography_h5__MRrA0 quantity_1">
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_1">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={800478}
                  className="ProductCardHorizontal_wrapper__byIUf pro_1"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="دجاج كامل"
                        src="https://cdn.salla.sa/alpwW/p4PWkDMkUUU4bAZLAY04Zr7LJJIu1fg0V14J9TIg.png"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">دجاج كامل طازج</h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        دجاج كامل طازج - 1.5 كيلو.
                      </p>
                    </div>
                    <div className="ProductCardHorizontal_priceWrapper__3OYMk" data-id="whole-chicken-1.5kg">
                      <h5 className="Typography_h5__MRrA0">5.70 د.ب</h5>
                      <div className="a_pluss_1">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_1"
                          data-product-image="/placeholder.svg?height=200&width=200"
                          data-product-name="دجاج كامل طازج - 1.5 كيلو"
                          data-product-price={5.7}
                          data-class-add="btn_add_1"
                          data-class-remove="btn_remove_1"
                          data-class-pluss="btn_pluss_1"
                          data-class-aremove="a_pluss_1"
                          data-quantity-id="quantity_1"
                          data-qquantity-id="qquantity_1"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: "دجاج كامل طازج - 1.5 كيلو",
                              price: "5.70",
                              img: "/placeholder.svg?height=200&width=200",
                            })
                          }}
                        >
                          <span className="Button_content btn_add_1">إضافة</span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                        </a>
                      </div>
                      <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5 id="quantity_1" className="Typography_h5__MRrA0 quantity_1">
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span data-test-id="" className="Icon_icon ProductButton_icon__XyfwX">
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_1">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="MerchantCard_wrapper__ATC0P" style={{ display: "none", marginTop: 35 }}>
          <div className="MerchantCard_imageWrapper" style={{ height: 424 }}>
            <span className="minus">
              <img
                decoding="async"
                data-nimg="fill"
                className="asyncicon"
                src="/placeholder.svg?height=424&width=600"
                alt="تنويه"
              />
            </span>
            <div className="MerchantCard_deliveryTime__hFF6r">
              <span
                data-test-id=""
                className="Icon_icon MerchantCard_driverIcon__VOTuk"
                style={{ width: 16, height: 16 }}
              >
                <span className="minus">
                  <img
                    alt="icon"
                    src="/driver-white.39436dda.svg"
                    decoding="async"
                    data-nimg="fill"
                    className="asyncicon"
                  />
                </span>
              </span>
              <p className="Typography_p8">الموقع الرسمي</p>
            </div>
          </div>
        </div>
        <div className="allcarts" style={{backgroundColor:"#00aa4a" }}>
          <div id="open_cart" className="CartButtonMob_wrapper">
            <div className="CartButtonMob_goToCart__50kKk">
              <div id="total" className="CartButtonMob_sum__7e1nq">
                <span className="CartButtonMob_count__NyKX4" style={{ background: "white" }}>
                  <p className="Typography_p5  ">{cartItems.length === 0 ? 0 : (cartItems.length as number)}</p>
                </span>
                <h5 className="Typography_h5__MRrA0">
                  <span>{total.toFixed(2)} د.ب</span>
                </h5>
              </div>
              <div
                onClick={() => props.handleNextPage()}
                className="CartButtonMob_goToCheckout__WILRU"
                style={{ cursor: "pointer"}}
              >
                <a style={{ display: "flex", gap: 5, zIndex: 9999999999 }}>
                  <h5 className="Typography_h5__MRrA0">اذهب الى السلة</h5>
                  <span data-test-id="" className="Icon_icon CartButtonMob_icon__fwWfH">
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/go_to_checkout.b2db30ab.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="cartWrapper"
          style={{
            background: "#f6f6f6",
            padding: "20px 0",
            marginBottom: 20,
            display: "none",
          }}
        ></div>
        <footer>
          <div
            className="ContentWrapper_container Footer_footer__fG8HL"
            style={{ marginTop: 0, padding: 20, marginBottom: 7 }}
          >
            <div className="Footer_info__7Pspt">
              <div className="Footer_legalLinks__fOusS">
                <a href="#">الشروط والأحكام</a>
                <a href="#">سياسة الخصوصية</a>
              </div>
              <p className="Footer_copyright__zeUcK">© 2024 الشركة ألمواشي للحوم</p>
            </div>
            <div className="Footer_socialLinks__Znatd">
              <div className="Footer_link__J_xuo">
                <span data-test-id="" className="Icon_icon" style={{ width: 18, height: 18 }}>
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  >
                    <img
                      alt="icon"
                      src="/social_instagram.cf3c4b8c.svg"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </footer>
        {/* Shoping Card Model */}
      </div>
    </>
  )
}

