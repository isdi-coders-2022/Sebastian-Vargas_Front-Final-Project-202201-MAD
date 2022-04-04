import React from "react";
import Footer from "../components/core/footer/Footer";
import Header from "../components/core/header/Header";

function Details(): JSX.Element {

    return (
        <>
            <Header/>
            <section className="product-data">
                <h2 className="product-data__title">Red Bull</h2>
                <div className="book-data__top-details">
                    <img
                        className="book-data__cover"
                        src="https://labnutrition.vtexassets.com/arquivos/ids/158559/red-bull-azul.png?v=637316492995900000"
                        alt="book cover"
                    />
                    <div className="book-data__details">
                        <p>Marca: Red Bull</p>
                    </div>
                </div>

                <div className="book-data__description" />
            </section>
            <Footer/>
        </>
        
    )
}

export default Details;

/* {isAuthenticated ? (
                    <div className="actions">
                        {userBooks.find((item) => item.isbn === bookState.isbn) ===
                        undefined ? (
                            <input
                                onClick={handleSave}
                                className="actions__save-button"
                                type="button"
                                value="Save"
                            />
                        ) : (
                            <input
                                onClick={handleDelete}
                                className="actions__delete-button"
                                type="button"
                                value={
                                    userBooks.find(
                                        (item) => item.isbn === bookState.isbn
                                    ).isRead === true
                                        ? 'mark as unread'
                                        : 'delete'
                                }
                            />
                        )}
                    </div>
                ) : (
                    <p>Login to save this book</p>
                )} */