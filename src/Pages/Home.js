import { useRef } from 'react';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../components/ProductCard';
import Carousel from 'react-bootstrap/Carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import { useInView } from 'react-intersection-observer';
import { MainContext, useContext } from '../context';




const Home = () => {
    const [theme] = useThemeHook();
    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);


    const { ref: myRef, inView: myElementIsVisible } = useInView();
    const { ref: rocketRef, inView: rocketIsVisible } = useInView();
    const { ref: bannerOne, inView: bannerOneVisible } = useInView();
    const { ref: headerAni, inView: headerAniVisible } = useInView();
    const { contentLang } = useContext(MainContext);




    async function getResponse() {
        const res = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json());
        setProductData(await res);
    }

    useEffect(() => {
        getResponse();
        document.title = "Superfront | Home";
    }, []);

    const [sortState, setSortState] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: (a, b) => (a.price - b.price) },
        descending: { method: (a, b) => (a.title > b.title ? 1 : -1) },
    };





    return (
        <>
            <Carousel fade className='padd-1' interval='3000' data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" data-aos={`${headerAniVisible ? "" : "fade-up"}`}>
                <Carousel.Item ref={headerAni} className='carousel'>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/vwB9BV2/Untitled-design-33.png"
                        alt="First slide"

                    />
                    <Carousel.Caption className='wid-300 pad-top' >
                        <h3>{contentLang.title}</h3>
                        <p>
                            {contentLang.titleComment}
                        </p>
                        <a href='#' className='button'>{contentLang.moreInf}</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item ref={headerAni}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/PwrBm7q/Untitled-design-32.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='wid-300 pad-top' >
                        <h3>{contentLang.title2}</h3>
                        <p>
                            {contentLang.titleComment2}
                        </p>
                        <a href='#' className='button'>{contentLang.moreInf}</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item ref={headerAni}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/HYKM6z4/Untitled-design-34.png"
                        alt="Third slide"

                    />

                    <Carousel.Caption className='wid-300 pad-top' >
                        <h3>{contentLang.title3}</h3>
                        <p>
                            {contentLang.titleComment3}
                        </p>
                        <a href='#' className='button'>{contentLang.moreInf}</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <section className='home-wrapper-1 padd-5'  >
                <div className='container-xxl padd'  >
                    <div className='row' >
                        <div className='col-6 itemsOff ' >
                            <div className='main-banner position-relative' ref={rocketRef}>
                                <img
                                    src='https://i.ibb.co/frk8BYf/Untitled-design-35.png'
                                    className='img-fluid rounded-3 shadow'
                                    alt='banner'
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000" data-aos={`${rocketIsVisible ? "" : "fade-right"}`}
                                />
                                <div className='main-banner-content position-absolute'>
                                    <h4>Mens Cotton Jacket</h4>
                                    <h5>{contentLang.off}</h5>
                                    <p>{contentLang.endirim1}</p>
                                    <a href='https://www.youtube.com' className='button'>{contentLang.buyNow}</a>
                                </div>

                            </div>
                        </div>
                        <div className='col-6 itemsOff'>
                            <div className='d-flex flex-wrap gap justify-content-between align-items-center'>
                                <div className='small-banner position-relative itemsOff2' ref={rocketRef}>
                                    <img
                                        src='https://i.ibb.co/L1Y1D0X/Untitled-design-36.png"'
                                        className='img-fluid rounded-3 imageOff shadow'
                                        alt='banner'
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" data-aos={`${rocketIsVisible ? "" : "fade-down"}`}
                                    />
                                    <div className='small-banner-content position-absolute titleOff' data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" data-aos={`${rocketIsVisible ? "" : "fade-down"}`}>
                                        <h4>John Hardy Women's</h4>
                                        <h5>{contentLang.off}</h5>
                                        <p>{contentLang.endirim2}</p>
                                    </div>

                                </div>
                                <div className='small-banner position-relative itemsOff2' ref={rocketRef}>
                                    <img
                                        src='https://i.ibb.co/vDFsjJh/Untitled-design-37.png'
                                        className='img-fluid rounded-3 shadow'
                                        alt='banner'
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" data-aos={`${rocketIsVisible ? "" : "fade-down"}`}
                                    />
                                    <div className='small-banner-content position-absolute titleOff' data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" data-aos={`${rocketIsVisible ? "" : "fade-down"}`}>
                                        <h4>Rain Jacket Women</h4>
                                        <h5>{contentLang.off}</h5>
                                        <p>{contentLang.endirim4}</p>
                                    </div>

                                </div>
                                <div className='small-banner position-relative itemsOff2' ref={bannerOne}>
                                    <img
                                        src='https://i.ibb.co/WD8TPVM/Untitled-design-38.png'
                                        className='img-fluid rounded-3 shadow'
                                        alt='banner'
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" data-aos={`${bannerOneVisible ? "" : "fade-up"}`}
                                    />
                                    <div className='small-banner-content position-absolute titleOff' data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" data-aos={`${bannerOneVisible ? "" : "fade-up"}`}>
                                        <h4>White Gold</h4>
                                        <h5>{contentLang.off}</h5>
                                        <p>{contentLang.endirim3}</p>
                                    </div>

                                </div>
                                <div className='small-banner position-relative itemsOff2' ref={bannerOne}>
                                    <img
                                        src='https://i.ibb.co/GV9Vs7z/Untitled-design-39.png'
                                        className='img-fluid rounded-3 shadow'
                                        alt='banner'
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" data-aos={`${bannerOneVisible ? "" : "fade-up"}`}
                                    />
                                    <div className='small-banner-content position-absolute titleOff' data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" data-aos={`${bannerOneVisible ? "" : "fade-up"}`}>
                                        <h4>DANVOUY Womens</h4>
                                        <h5>{contentLang.off}</h5>
                                        <p>{contentLang.endirim5}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Container className="py-4 search">
                <Row className="justify-content-center">
                    <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                        <h1 className={theme ? 'text-light my-5 search' : 'text-black my-5 search'}>{contentLang.search}</h1>
                        <InputGroup className="mb-3">
                            <InputGroup.Text className={theme ? 'bg-black text-dark-primary' : 'bg-light text-light-primary'}>
                                <BiSearch size="2rem" />
                            </InputGroup.Text>
                            <FormControl
                                placeholder={contentLang.search}
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className={theme ? 'bg-light-black text-light' : 'bg-light text-black'}
                            />
                        </InputGroup>
                    </Col>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} className='mb-3'>
                        <span 
                        style={{fontWeight: 'bold'}}
                        className={`${theme? 'text-dark-primary' : 'text-light-primary'}`}>{contentLang.sort}</span>
                        <select style={{ width: '100px' }} defaultValue={'none'} onChange={(e) => setSortState(e.target.value)}>
                            <option value="none">None</option>
                            <option value="ascending">Price</option>
                            <option value="descending">A-Z</option>
                        </select>
                    </div>
                    <SearchFilter
                        value={searchInput}
                        data={productData}
                        renderResults={results => (
                            <Row className="justify-content-center">


                                {results?.sort(sortMethods[sortState].method).map((item, i) => (
                                    <ProductCard data={item} key={i} />
                                ))}
                            </Row>
                        )}
                    />

                </Row>
            </Container>

        </>

    );
};

export default Home;