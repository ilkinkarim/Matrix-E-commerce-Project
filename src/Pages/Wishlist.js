import React, { useContext, useState, useEffect } from 'react';
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { MainContext } from '../context';





const Wishlist = () => {
    const { favourites, setFavourites, contentLang} = useContext(MainContext);
    const term = (JSON.parse(localStorage.getItem("liked")))
    const [theme] = useThemeHook();
    const { addItem } = useCart();
    const addToCart = (item) => {
        addItem(item);
    };

    const {
        isEmpty,
        cartTotal,
    } = useCart();

    useEffect(()=>{
        document.title = "Superfront | Wishlist";

    },[(favourites)])

    

    const handleFavourites = (likedItem) => {
        let oldData = JSON.parse(localStorage.getItem('liked') || "[]")
        if(oldData.includes(likedItem.id)){
            oldData.push(likedItem)
        }else{
            oldData = oldData.filter((m) => m.id!==likedItem.id)
        }
        localStorage.setItem("liked",JSON.stringify(oldData));
        handleFavouritesState();
    };
    const handleFavouritesState=()=>{
        let oldData = JSON.parse(localStorage.getItem("liked") || "[]")
        let temp = oldData?.map((likedItem)=>likedItem.id);
        setFavourites([...temp])
    };

    





    return (
        <>
            {
                <Container className="py-4 mt-5">
                    <h1 className={`${theme ? 'text-light' : 'text-light-primary'} my-5 text-center`}>{contentLang.fav}</h1>
                    <Row className="justify-content-center">
                        <Table responsive="sm" striped bordered hover variant={theme ? 'dark' : 'light'} className="mb-5">
                            <tbody>
                                {term?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <div style={{
                                                    background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                                    justifyContent: 'center', alignItems: 'center'
                                                }}>
                                                    <div style={{ padding: '.5rem' }}>
                                                        <img src={item.image} style={{ width: '4rem' }} alt={item.title} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p style={{fontStyle: 'italic', fontSize: '15px'}}>{item.category}</p>
                                                <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis' }}>
                                                    {item.title}
                                                </h6>
                                                <p style={{width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', }}>{item.description}</p>
                                            </td>
                                            <td><del style={{fontSize: '15px'}}>$ {item.price*2}</del> $ {item.price}</td>
                                            <td>
                                                <Button variant="danger" onClick={() => handleFavourites(item)} className="ms-2">{contentLang.notwishlist}</Button>
                                                <Button variant="primary" onClick={() => addToCart(item)} className="ms-2">{contentLang.cart}</Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            }
        </>
    );
};

export default Wishlist;