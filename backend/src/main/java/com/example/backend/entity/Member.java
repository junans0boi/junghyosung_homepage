// Member.java
package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter
@Entity
@Table(name = "members")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50, nullable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false)
    private String password;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(length = 200, nullable = false)
    private String address;

    @Column(length = 200, nullable = false)
    private String address1;

    @Column(length = 200, nullable = false)
    private String address2;

    @Column(length = 50, nullable = false)
    private String zipcode;

    @Column(length = 50, nullable = false)
    private String phonenum;
    @Column(length = 50, nullable = false)
    private String phone1;
    @Column(length = 50, nullable = false)
    private String phone2;
    @Column(length = 50, nullable = false)
    private String phone3;


    @Column(name = "join_date")
    private Date joinDate;
    private int purchaseamount;
    private int countofpurchase;
}
