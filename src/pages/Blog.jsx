import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BsArrowRight} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";

import axios from "axios";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import CallToUsWedigt from "../components/CallToUsWedigt";

const Blog = () => {
  const [apiData, setApiData] = useState([]);
  const [t,i18n] = useTranslation();
  const [getContact, setGetContact] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const lang = localStorage.i18nextLng === "en-US" ? 1 : 2;
  const [video, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.udtech-sa.com/api/WebSite/GetBlogs?languageId=${lang}`)
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.udtech-sa.com/api/WebSite/GetContactUs?languageId=${lang}`,
        {
          params: {
            languageId: lang,
            // languageId: 1,
          },
        }
      )
      .then((res) => {
        setGetContact(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.udtech-sa.com/api/WebSite/GetPagesVideo")
      .then((res) => {
        setVideo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setPreLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      <div>
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
          <section className="breadcrumbs blog-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb-wrapper">
                    <div className="breadcrumb-cnt">
                      <h1>{t("blog")}</h1>
                      <span>
                        <a href={`/${i18n.language}`}>{t("home")}</a>
                        <BsArrowRight className="m-1" />
                        {t("blog")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Body>
              <video
                src={video.video_Blogs}
                controls
                autoPlay
                className="bread-video"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
          <section className="blog-grid sec-mar">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 divdeir-vr">
                  <div className="sidebar-widget">
                    <h4 className="n-h3">
                      <span className=""></span>
                      {t("blog_page_new_post")}
                    </h4>
                    {apiData.slice(0, 3).map((tinyBlog) => {
                      return (
                        <div className="recent-post" key={tinyBlog.id}>
                          <div className="recent-thumb">
                            <a href={`/${i18n.language}/${t("blog-details")}/${tinyBlog.id}`}>
                              <img src={tinyBlog.photoPath} alt="" />
                            </a>
                          </div>
                          <div className="recent-post-cnt">
                            <span>{apiData.blogDate}</span>
                            <h5>
                              <a href={`/${i18n.language}/${t("blog-details")}/${tinyBlog.id}`}>
                                {tinyBlog.title}
                              </a>
                            </h5>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <CallToUsWedigt />

                  {/* <div className="sidebar-widget">
                    <div className="widget-search">
                      <form action="#" method="post">
                        <input
                          type="text"
                          name="search"
                          placeholder={t("blog_page_search")}s
                        />
                        <button type="submit">
                          <BsSearch />
                        </button>
                      </form>
                    </div>
                  </div> */}
                  {/* <div className="sidebar-widget">
                    <h4>{t("blog_page_category")}</h4>
                    <ul className="category">
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_web")}</a>
                      </li>
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_app")}</a>
                      </li>
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_software")}</a>
                      </li>
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_motion")}</a>
                      </li>
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_ui_ux")}</a>
                      </li>
                      <li>
                        <BsArrowRight />
                        <a href="/projects">{t("blog_page_graphic")}</a>
                      </li>
                    </ul>
                  </div> */}

                  {/* <div className="sidebar-widget">
                    <h4>{t("blog_page_hashtag")}</h4>
                    <ul className="tag-list">
                      <li>
                        <Link to="/projects">Website</Link>
                      </li>
                      <li>
                        <Link to="/projects">Web Design</Link>
                      </li>
                      <li>
                        <Link to="/projects">Development</Link>
                      </li>
                      <li>
                        <Link to="/projects">Graphic Design</Link>
                      </li>
                      <li>
                        <Link to="/projects">Graphic</Link>
                      </li>
                      <li>
                        <Link to="/projects">UI/UX Design</Link>
                      </li>
                      <li>
                        <Link to="/projects">Activities</Link>
                      </li>
                      <li>
                        <Link to="/projects">Software Design</Link>
                      </li>
                      <li>
                        <Link to="/projects">3d Design</Link>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div className="col-lg-8">
                  <div className="blog-item-grid">
                    <div className="row g-4">
                      {apiData
                        .slice(currentPage * 5, currentPage * 5 + 5)
                        .map((e) => {
                          return (
                            <div className="col-md-6" key={e.id}>
                              <div className="single-blog h-100">
                                <div className="blog-thumb">
                                  <Link Link to={`/blog-details/${e.id}`}>
                                    <img src={e.photoPath} alt="" />
                                  </Link>
                                  {/*<div className="tag">
                                    <Link to={`/blog-details/${e.id}`}>
                                      {e.category}
                                    </Link>
                                  </div>*/}
                                </div>
                                <div className="blog-inner">
                                  {/*<div className="author-date">
                                    <Link to={"/blog-details/" + e.id}>
                                      {t("by")}, {e.blogAuthor}
                                    </Link>
                                    <Link to={`/blog-details/${e.id}`}>
                                      {e.blogDate}
                                    </Link>
                                  </div>*/}
                                  <h4>
                                    <Link to={`/blog-details/${e.id}`}>
                                      {e.title}
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <ReactPaginate
                    pageCount={Math.ceil(apiData.length / 5)}
                    onPageChange={(data) => setCurrentPage(data.selected)}
                    containerClassName={"load-more paginations ms-3"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    activeClassName={"active"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    disabledClassName={"disabled"}
                  />
                </div>
              </div>
            </div>
          </section>
          {/*<Newsletter /> */}
        </main>
      </div>
    </>
  );
};

export default Blog;
