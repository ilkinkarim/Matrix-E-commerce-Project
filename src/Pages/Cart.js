import React, { useEffect } from 'react';
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsCartCheck, BsCartX } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainContext, useContext } from '../context';
/** Giris bilgileri **/
import { useAuth0 } from "@auth0/auth0-react";
/** Giris bilgileri **/


const Cart = () => {
    const { contentLang } = useContext(MainContext);
    const [theme] = useThemeHook();
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    useEffect(() => {
        document.title = "Superfront | Cart";
    });
    /** Giris bilgileri **/

    const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

    /** Giris bilgileri **/

    const notify = () => {
        toast.success('Məhsullar alındı!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        emptyCart();
    };
    const notifyLogIn = () => {
        toast.error('İlk öncə giriş edin!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };



    return (
        <Container className="py-4 mt-5">
            <h1 className={`${theme ? 'text-light' : 'text-light-primary'} my-5 text-center`}>{contentLang.cartPage}</h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={theme ? 'dark' : 'light'} className="mb-5 table">
                    <tbody className='you'>
                        {items.map((item, index) => {
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
                                        <p style={{ fontStyle: 'italic', fontSize: '15px' }}>{item.category}</p>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis' }}>
                                            {item.title}
                                        </h6>
                                        <p style={{ width: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', }}>{item.description}</p>
                                    </td>
                                    <td><del style={{ fontSize: '15px' }}>$ {item.price * 2}</del> $ {item.price}</td>
                                    <td>{contentLang.quantity} ({item.quantity})</td>
                                    <td>
                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={() => removeItem(item.id)} className="ms-2">{contentLang.remove}</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                { }
                {!isEmpty &&
                    <Row
                        style={{ bottom: 0 }}
                        className={`${theme ? 'bg-light-black text-light' : 'bg-light text-balck'} justify-content-center w-100`}
                    >
                        <Col className="py-2">
                            <h4>{contentLang.total} $ {cartTotal.toFixed(2)}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="danger"
                                className="m-2"
                                onClick={() => emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                {contentLang.clear}
                            </Button>
                            {
                                isAuthenticated ? (
                                    <>
                                        <Button onClick={() => {
                                            notify();
                                        }} variant="success"
                                            className="m-2"
                                        >
                                            <BsCartCheck size="1.7rem" />

                                            {contentLang.checkout}

                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button onClick={() => {
                                            notifyLogIn();
                                        }} variant="success"
                                            className="m-2"
                                        >
                                            <BsCartCheck size="1.7rem" />

                                            Checkout

                                        </Button>
                                    </>
                                )
                            }

                        </Col>
                    </Row>}
                <ToastContainer />
            </Row>
        </Container>
    );
};

export default Cart;