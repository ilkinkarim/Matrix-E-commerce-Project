import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from "@reach/router";
import { useInView } from 'react-intersection-observer';
import { MainContext, useContext } from '../context';
import { FcLike, FcDislike } from 'react-icons/fc';



const ProductCard = (props) => {
    // const [state,setState]=useState({
    //     favourites:[]       
    //    });
    const { favourites, setFavourites, contentLang } = useContext(MainContext);
    
    


    let { image, price, title, id } = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const { ref: headerAni, inView: headerAniVisible } = useInView();

    const addToCart = () => {
        addItem(props.data);
    };

    

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
        handleFavouritesState();
    }, [])


    return (
        <>

            <Card
                style={{ width: '18rem', height: 'auto' }}
                className={`${theme ? 'bg-light-black text-light' : 'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}

                ref={headerAni}
            >
                <Link to={`/product-details/${id}`}>
                    <div style={{
                        background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                        justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit'
                    }}>
                        <div style={{ width: '9rem' }}>
                            <Card.Img variant="top" src={image} className="img-fluid" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" data-aos={`${headerAniVisible ? "" : "zoom-out"}`} />
                        </div>
                    </div>
                </Link>
                <Card.Body>
                    <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {title}
                    </Card.Title>
                    <Card.Title>
                        $ <del><span className="">{price * 2}</span></del>
                    </Card.Title>
                    <Card.Title>
                        $ <span className="h3">{price}</span>
                    </Card.Title>
                    <Button
                        onClick={() => addToCart()}
                        className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} d-flex m-auto border-0 align-items-center`}
                    >
                        <BsCartPlus size="1.8rem" />
                        {contentLang.cart}
                    </Button>
                    <Card.Title>
                        <span style={{ fontSize: '15px' }}>{contentLang.or}</span>
                    </Card.Title>
                    
                    {favourites?.includes(id) ? <Button
                        onClick={() => handleFavourites(props.data)}
                        className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} d-flex m-auto border-0 align-items-center`}
                    >
                        <FcDislike />
                        {contentLang.notwishlist}

                    </Button> : <Button
                        onClick={() => handleFavourites(props.data)}
                        className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} d-flex m-auto border-0 align-items-center`}
                    >
                        <FcLike />
                        {contentLang.wishlist}

                    </Button>}

                </Card.Body>
            </Card>
        </>
    );
};

export default ProductCard;