import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import websiteImg1 from "../../src/assests/img/websiteImg1.png";
import websiteImg2 from "../../src/assests/img/websiteImg2.png";
import ClientsSection from "../components/ClientsSection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "swiper/css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Websites = () => {
    const [t, i18n] = useTranslation();
    const [apiData, setApiData] = useState([]);
    const [item, setItem] = useState([]);
    const [video, setVideo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
    const [getProjects, setGetProjects] = useState([]);
    const [swiperRef, setSwiperRef] = useState(null);
    const [preLoader, setPreLoader] = useState(true);
    const [visible, setVisible] = useState(false);



    const menuItems = [...new Set(apiData.map((Val) => Val.category))];
    const filterItem = (curcat) => {
        const newItem = apiData.filter((newVal) => {
            return newVal.category === curcat;
        });

        setItem(newItem);
    };
    useEffect(() => {
        axios
            .get(
                `https://api.udtech-sa.com/api/WebSite/GetProjects?languageId=${lang}`
            )
            .then((res) => {
                setApiData(res.data);
                setItem(res.data);
                if (i18n.language === 'en-US') {
                    setApiData(res.data.filter((newVal) => {
                        return newVal.category === 'Websites';
                    }
                    ));
                }
                else if (i18n.language === 'ar') {
                    setApiData(res.data.filter((newVal) => {
                        return newVal.category === 'مواقع الكترونية';
                    }
                    ));
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [lang]);
    // useEffect(() => {
    //     axios
    //         .get(
    //             `https://api.udtech-sa.com/api/WebSite/GetProjects?languageId=${lang}`
    //         )
    //         .then((res) => {
    //             setApiData(res.data);
    //             setItem(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [lang]);

    // useEffect(() => {
    //     axios
    //       .get(
    //         `https://api.udtech-sa.com/api/WebSite/GetProjects?languageId=${lang}`
    //       )
    //       .then((res) => {
    //         // setGetProjects(res.data);
    //         setItem(res.data);
    //         if(i18n.language === 'en-US')
    //     {setGetProjects( res.data.filter((newVal) => {
    //       return newVal.category === 'Websites';
    //     }
    //     ));}
    //     else if (i18n.language === 'ar')
    //     {setGetProjects( res.data.filter((newVal) => {
    //       return newVal.category === 'مواقع الكترونية';
    //     }
    //     ));}
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   },
    // )

    useEffect(() => {
        new WOW.WOW({
            live: false,

        }).init();
    });

    useEffect(() => {
        setTimeout(function () {
            setPreLoader(false);
        }, 1000);
    }, []);

    return (
        <>
        
            <div>
            <Helmet>
        <title>تصميم أفضل المواقع الإلكترونية بالسعودية | شركة UD-Tech</title>
        <meta name="description" content="تصميم أفضل المواقع الإلكترونية بالسعودية | شركة UD-Tech" />
        <meta name="keywords" content="UD-Tech,تصميم_المواقع ,تصميم المواقع" />

      </Helmet>
                {preLoader && (
                    <div className="preloader">
                        <div className="loader">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                )}
                <main className="creasoft-wrap">
                    <div className="line_wrap">
                        <div className="line_item"></div>
                        <div className="line_item"></div>
                        <div className="line_item"></div>
                        <div className="line_item"></div>
                        <div className="line_item"></div>
                    </div>
                    <section className="breadcrumbs project-header">
                        <div className="container">
                            <div className="row">

                                <div className="col-12 ">

                                    <div className="breadcrumb-wrapper">
                                        <div className="breadcrumb-cnt">
                                            <h1>{t("our_websites")}</h1>
                                            <span>
                                                <a href={`/${i18n.language}`}>{t("home")}</a>
                                                <BsArrowRight className="m-1" />
                                                {t("websites")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="history-area sec-mar">
                        <div className="container">
                            <div className="animWrap2">
                                <div className="title-wrap">
                                    <div className="sec-title">
                                        <h2>

                                            {t("our_websites")}
                                        </h2>
                                        <p>
                                            {t("website_page_case_study")}</p>
                                    </div>

                                    <p className="mt-1 n-p">{t("website_page_paragraph")}</p>
                                </div>
                            </div>



                        </div>
                    </section>
                    <section className="history-area ">
                        <div className="container">
                            <div className="animWrap2">
                                <div className="title-wrap">
                                    <p className="n-p">
                                        <span ></span>
                                        {t("website_title2")}
                                    </p>

                                </div>
                            </div>

                        </div>
                    </section>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Body>
                            <video
                                src={video.video_Projects}
                                controls
                                autoPlay
                                className="bread-video"
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => setVisible(false)}>Close</Button>
                        </Modal.Footer>
                    </Modal>


                    <section className="infoPage project-area sec-mar pb-5">
                        <div className="container-fluid">
                            <div className="row">
                            <div className="col-12">
                                <div className="sec-title">
                                    <h2>{t("website_calInfotitle")}</h2>
                                
                                    </div>
                            </div>
                                <div className="col-12 col-md-12 col-lg-6" >
                                    <div className="borderBox">
                                        <div className="d-flex">
                                            <div className="number">
                                                01
                                            </div>
                                            <div className="content">
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                                                        <g clip-path="url(#clip0_471_5708)">
                                                            <path d="M23.3334 9.0824V15.7491C23.3334 16.1911 23.509 16.615 23.8215 16.9276C24.1341 17.2401 24.558 17.4157 25 17.4157H31.6667M23.3334 9.0824H11.6667C10.7827 9.0824 9.93481 9.43359 9.30968 10.0587C8.68456 10.6838 8.33337 11.5317 8.33337 12.4157V35.7491C8.33337 36.6331 8.68456 37.481 9.30968 38.1061C9.93481 38.7312 10.7827 39.0824 11.6667 39.0824H28.3334C29.2174 39.0824 30.0653 38.7312 30.6904 38.1061C31.3155 37.481 31.6667 36.6331 31.6667 35.7491V17.4157M23.3334 9.0824L31.6667 17.4157M16.6667 34.0824L25 25.7491C25.4421 25.3071 25.6904 24.7076 25.6904 24.0824C25.6904 23.4573 25.4421 22.8578 25 22.4158C24.558 21.9738 23.9585 21.7254 23.3334 21.7254C22.7083 21.7254 22.1087 21.9738 21.6667 22.4158L13.3334 30.7491V34.0824H16.6667Z" stroke="#2C5FA2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M16.6353 34.0825L24.9687 25.7492C25.4107 25.3071 25.659 24.7076 25.659 24.0825C25.659 23.4574 25.4107 22.8578 24.9687 22.4158C24.5266 21.9738 23.9271 21.7255 23.302 21.7255C22.6769 21.7255 22.0774 21.9738 21.6353 22.4158L13.302 30.7492V34.0825H16.6353Z" stroke="#5D9ED5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_471_5708">
                                                                <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <h5 className="n">
                                                        {t("website_calInfo")}
                                                    </h5>
                                                </div>
                                                <p>
                                                    {t("website_calInfodesc")}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    {/* 2 */}
                                    <div className="borderBox">
                                        <div className="d-flex">
                                            <div className="number">
                                                02
                                            </div>
                                            <div className="content">
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                        <path d="M13.3334 9.89486H10.0001C9.11603 9.89486 8.26818 10.246 7.64306 10.8712C7.01794 11.4963 6.66675 12.3441 6.66675 13.2282V33.2282C6.66675 34.1122 7.01794 34.9601 7.64306 35.5852C8.26818 36.2103 9.11603 36.5615 10.0001 36.5615H19.4951M13.3334 9.89486C13.3334 9.0108 13.6846 8.16296 14.3097 7.53783C14.9348 6.91271 15.7827 6.56152 16.6667 6.56152H20.0001C20.8841 6.56152 21.732 6.91271 22.3571 7.53783C22.9822 8.16296 23.3334 9.0108 23.3334 9.89486M13.3334 9.89486C13.3334 10.7789 13.6846 11.6268 14.3097 12.2519C14.9348 12.877 15.7827 13.2282 16.6667 13.2282H20.0001C20.8841 13.2282 21.732 12.877 22.3571 12.2519C22.9822 11.6268 23.3334 10.7789 23.3334 9.89486M30.0001 21.5615V13.2282C30.0001 12.3441 29.6489 11.4963 29.0238 10.8712C28.3986 10.246 27.5508 9.89486 26.6667 9.89486H23.3334M13.3334 19.8949H20.0001M13.3334 26.5615H18.3334" stroke="#2C5FA2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M30.8335 34.0615L35.0002 38.2282M23.3335 30.7282C23.3335 31.8333 23.7725 32.8931 24.5539 33.6745C25.3353 34.4559 26.3951 34.8949 27.5002 34.8949C28.6052 34.8949 29.665 34.4559 30.4464 33.6745C31.2278 32.8931 31.6668 31.8333 31.6668 30.7282C31.6668 29.6231 31.2278 28.5633 30.4464 27.7819C29.665 27.0005 28.6052 26.5615 27.5002 26.5615C26.3951 26.5615 25.3353 27.0005 24.5539 27.7819C23.7725 28.5633 23.3335 29.6231 23.3335 30.7282Z" stroke="#5D9ED5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <h5 className="n">
                                                        {t("website_calInfo2")}
                                                    </h5>
                                                </div>
                                                <p>
                                                    {t("website_calInfodesc2")}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    {/* 3 */}
                                    <div className="borderBox">
                                        <div className="d-flex">
                                            <div className="number">
                                                03

                                            </div>
                                            <div className="content">
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                                                        <g clip-path="url(#clip0_471_5717)">
                                                            <path d="M20 15.7509C18.3518 15.7509 16.7406 16.2396 15.3702 17.1553C13.9998 18.071 12.9317 19.3725 12.301 20.8952C11.6702 22.4179 11.5052 24.0935 11.8268 25.71C12.1483 27.3265 12.942 28.8113 14.1074 29.9768C15.2728 31.1422 16.7577 31.9359 18.3742 32.2574C19.9907 32.579 21.6663 32.414 23.189 31.7832C24.7117 31.1525 26.0132 30.0844 26.9289 28.714C27.8446 27.3436 28.3333 25.7324 28.3333 24.0842M21.6666 9.17593C18.5767 8.82928 15.4555 9.45139 12.7346 10.9562C10.0137 12.461 7.82775 14.7742 6.479 17.5757C5.13026 20.3772 4.68543 23.5286 5.20604 26.594C5.72665 29.6594 7.18697 32.4872 9.385 34.6863C11.583 36.8855 14.4101 38.3472 17.4753 38.8694C20.5404 39.3915 23.692 38.9483 26.4942 37.601C29.2964 36.2536 31.6106 34.0688 33.1168 31.3487C34.623 28.6286 35.2467 25.5077 34.9016 22.4176" stroke="#2C5FA2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M25.0002 19.0842V14.0842L30.0002 9.08423V14.0842H35.0002L30.0002 19.0842H25.0002ZM25.0002 19.0842L20.0002 24.0842M18.3335 24.0842C18.3335 24.5263 18.5091 24.9502 18.8217 25.2627C19.1342 25.5753 19.5581 25.7509 20.0002 25.7509C20.4422 25.7509 20.8661 25.5753 21.1787 25.2627C21.4912 24.9502 21.6668 24.5263 21.6668 24.0842C21.6668 23.6422 21.4912 23.2183 21.1787 22.9057C20.8661 22.5932 20.4422 22.4176 20.0002 22.4176C19.5581 22.4176 19.1342 22.5932 18.8217 22.9057C18.5091 23.2183 18.3335 23.6422 18.3335 24.0842Z" stroke="#5D9ED5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_471_5717">
                                                                <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <h5 className="n">
                                                        {t("website_calInfo3")}
                                                    </h5>
                                                </div>
                                                <p>
                                                    {t("website_calInfodesc3")}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    {/* 4 */}
                                    <div className="borderBox">
                                        <div className="d-flex">
                                            <div className="number">
                                                04

                                            </div>
                                            <div className="content">
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                        <path d="M5 13.5809V22.2009C5.00019 23.0849 5.3515 23.9326 5.97667 24.5576L18.8267 37.4076C19.5799 38.1607 20.6015 38.5838 21.6667 38.5838C22.7318 38.5838 23.7534 38.1607 24.5067 37.4076L33.8267 28.0876C34.5798 27.3343 35.0029 26.3128 35.0029 25.2476C35.0029 24.1824 34.5798 23.1609 33.8267 22.4076L20.9767 9.5576C20.3517 8.93243 19.504 8.58112 18.62 8.58093H10C8.67392 8.58093 7.40215 9.10772 6.46447 10.0454C5.52678 10.9831 5 12.2549 5 13.5809Z" stroke="#2C5FA2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.8333 16.081C10.8333 16.523 11.0088 16.9469 11.3214 17.2595C11.634 17.572 12.0579 17.7476 12.4999 17.7476C12.9419 17.7476 13.3659 17.572 13.6784 17.2595C13.991 16.9469 14.1666 16.523 14.1666 16.081C14.1666 15.6389 13.991 15.215 13.6784 14.9025C13.3659 14.5899 12.9419 14.4143 12.4999 14.4143C12.0579 14.4143 11.634 14.5899 11.3214 14.9025C11.0088 15.215 10.8333 15.6389 10.8333 16.081Z" stroke="#5D9ED5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <h5 className="n">
                                                        {t("website_calInfo4")}
                                                    </h5>
                                                </div>
                                                <p>
                                                    {t("website_calInfodesc4")}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    {/* 5 */}
                                    <div className="borderBox">
                                        <div className="d-flex">
                                            <div className="number">
                                                05

                                            </div>
                                            <div className="content">
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                        <path d="M31.6667 18.0065V14.6731C31.6667 13.7891 31.3155 12.9412 30.6904 12.3161C30.0652 11.691 29.2174 11.3398 28.3333 11.3398H15C14.1159 11.3398 13.2681 11.691 12.643 12.3161C12.0179 12.9412 11.6667 13.7891 11.6667 14.6731V28.0065C11.6667 28.8905 12.0179 29.7384 12.643 30.3635C13.2681 30.9886 14.1159 31.3398 15 31.3398H18.3333M5 4.67313V4.68979M11.6667 4.67313V4.68979M18.3333 4.67313V4.68979M25 4.67313V4.68979M5 11.3398V11.3565M5 18.0065V18.0231M5 24.6731V24.6898" stroke="#2C5FA2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M21.6667 21.3397L36.6667 26.3397L30.0001 29.673L26.6667 36.3397L21.6667 21.3397Z" stroke="#5D9ED5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <h5 className="n">
                                                        {t("website_calInfo5")}
                                                    </h5>
                                                </div>
                                                <p>
                                                    {t("website_calInfodesc5")}
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 col-md-12 col-lg-6">
                                    <img className="img1" src={websiteImg1} alt="" />
                                    <img className="img2" src={websiteImg2} alt="" />

                                </div>

                            </div>

                        </div>
                    </section>

                    {/* video */}
                    <section className="breadcrumbs project-header">
                        <div className="container">
                            <div className="row " >
                                <div className="col-12">
                                    <div className="videoBox">
                                        <div className="videoTitle">
                                            <h1>{t("video_title")}</h1>

                                        </div>



                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="Divdeo">

                                        {
                                            (() => {
                                                if (visible === true) {
                                                    return (
                                                        <iframe className="videoLink" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="UD-Tech Websites design" width="100%" height="100%" src="https://www.youtube.com/embed/c_HZAyzAUPI?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-6="true"></iframe>
                                                        // <ReactPlayer className="videoLink" controls={true} url='https://www.youtube.com/watch?v=c_HZAyzAUPI' />
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <div onClick={() => setVisible(true)} className="videoLink2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="35" viewBox="0 0 31 35" fill="none">
                                                                <path d="M0.916626 1.9449V33.0551C0.916529 33.4011 1.00874 33.7408 1.18375 34.0392C1.35876 34.3376 1.61022 34.584 1.9122 34.7528C2.21418 34.9216 2.55573 35.0068 2.90162 34.9996C3.24751 34.9924 3.58521 34.893 3.87987 34.7117L29.1569 19.1566C29.44 18.9826 29.6738 18.739 29.836 18.449C29.9982 18.159 30.0833 17.8323 30.0833 17.5C30.0833 17.1677 29.9982 16.841 29.836 16.551C29.6738 16.261 29.44 16.0173 29.1569 15.8434L3.87987 0.288287C3.58521 0.107001 3.24751 0.00761894 2.90162 0.000393662C2.55573 -0.00683161 2.21418 0.0783617 1.9122 0.247184C1.61022 0.416006 1.35876 0.662343 1.18375 0.960778C1.00874 1.25921 0.916529 1.59894 0.916626 1.9449Z" fill="#2C5FA2" />
                                                            </svg>
                                                        </div>

                                                        // <Button onClick={() => setVisible(true)}>Close</Button>
                                                    )
                                                }
                                            })()
                                        }


                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6  video">

                                    <p>{t("video_desc")}</p>
                                    {/* <button className="btn ">{t("video_btn")}</button> */}

                                </div>
                            </div>
                        </div>
                    </section>
                    <div>
                        {/* projects */}
                        <section className="project-area sec-mar">
                            <div className="container">
                                <div className="title-wrap">
                                    <div className="sec-title white featureHead">
                                        {/* <h5>{t("project_page_case_study")}</h5> */}
                                        <h3>
                                            <span className=""></span>
                                            {t("project_page_project")}
                                        </h3>
                                        <p className="p">{t("home_project_paragraph2")}</p>
                                    </div>
                                </div>



                            </div>
                        </section>
                        <section>
                            <div className="row project-items">
                                {apiData.slice(0, 6).map((project) => {
                                    return (
                                        <div
                                            className="col-6 col-md-6 col-lg-4 single-item d-flex justify-content-center align-items-center "
                                            key={project.id}
                                        >

                                            <div className="item-img" >

                                                <a href={`/${i18n.language}/${t("project-details")}/${project.id}`}>
                                                    <img
                                                        className="maxH-300"
                                                        src={project.photoPath}
                                                        alt={project.title}
                                                    />
                                                </a>
                                            </div>
                                            <a
                                                href={`/${i18n.language}/${t("project-details")}/${project.id}`}
                                                className="cursorP"
                                            >
                                                <div className="item-inner-cnt">
                                                    <h4>{project.project}</h4>
                                                </div>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="buttons mt-3">
                                            <div className="cmn-btn">

                                                <a href={`/${i18n.language}/${t("projects")}`}>{t("projects_all")}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* partners   */}
                        <ClientsSection />
                    </div>
                    {/*<Newsletter /> */}
                </main>
            </div>
        </>
    );
};
export default Websites;