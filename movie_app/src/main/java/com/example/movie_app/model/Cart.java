package com.example.movie_app.model;


import javax.persistence.*;

@Entity
@Table(name="cart")
public class Cart {
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_price")
    private long productPrice;

    public Cart () {
        super();
    }

    public Cart(String productName, long productPrice) {
        super();
        this.productName = productName;
        this.productPrice= productPrice;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public long getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(long productPrice) {
        this.productPrice = productPrice;
    }



}



