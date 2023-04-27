import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import './product-details.css';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';


import { MainContext, useContext } from '../context';
import { FcLike, FcDislike } from 'react-icons/fc';

const ProductDetails = (props) => {

    const [productData, setProductData] = useState([]);
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const { favourites, setFavourites, contentLang } = useContext(MainContext);
    
    const handleFavourites = (likedItem) => {
        let oldData = JSON.parse(localStorage.getItem('liked') ?? "[]")
        if (oldData.some((item) => item.id === likedItem.id)) {
            oldData = oldData.filter((m) => m.id !== likedItem.id)
        } else {
            oldData.push(likedItem)
        }
        localStorage.setItem("liked", JSON.stringify(oldData));
        handleFavouritesState();
    };
    
    

    const handleFavouritesState = () => {
        let oldData = JSON.parse(localStorage.getItem("liked") ?? "[]")
        let temp = oldData.map((likedItem) => likedItem.id);
        setFavourites([...temp])
    };

    useEffect(()=>{
        getResponse();
    },[]);

    const getResponse = async()=>{
        const res = await fetch(`https://fakestoreapi.com/products/${props.productId}`)
                          .then(res=> res.json());
                          setProductData(await res);
    }
    useEffect(()=>{
        handleFavouritesState();
    }, []);
    return (
        <Container className="py-5">
            <Row className="justify-content-center mt-5">
                <Col xs={10} md={7} lg={5} className="p-0">
                  <Lightbox
                        images={[
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 1'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 2'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 3'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 4'
                            }
                        ]}
                  />
                </Col>
                <Col xs={10} md={7} lg={7} className={`${theme? 'text-light' : 'text-black'} product-details`}>
                    <h1>{productData.title}</h1>
                    <p style={{fontSize: '20px', fontWeight: 'bold'}}>{contentLang.category}: {productData.category}</p>
                    <Button 
                        onClick={()=>addItem(productData)}
                        className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} d-flex border-0 align-items-center`}
                        style={{borderRadius: '0', border: 0}}
                    >
                        <BsCartPlus size="1.8rem"/>
                        {contentLang.cart}
                    </Button>
                    <span style={{ fontSize: '25px', paddingLeft: '30px' }}>{contentLang.or}</span>
                    {favourites?.includes(productData.id) ? <Button
                        onClick={() => handleFavourites(productData)}
                        className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} d-flex border-0 align-items-center`}
                    >
                        <FcDislike />
                        {contentLang.notwishlist}

                    </Button> : <Button
                        onClick={() => handleFavourites(productData)}
                        className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} d-flex border-0 align-items-center`}
                    >
                        <FcLike />
                        {contentLang.wishlist}

                    </Button>}
                    <br/>
                    <b className={`${theme? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`}>
                        <del>$ {productData.price*2} </del><br /> $ {productData.price}
                    </b>
                    <br/>
                    <p className="mt-3 h5" style={{opacity: '0.8', fontWeight: '400'}}>
                        {productData.description}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;