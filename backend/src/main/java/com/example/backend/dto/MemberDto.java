// MemberDto.java
package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class MemberDto {
    private String name;
    private String email;
    private String password;
    private String address;
    private String address1;
    private String address2;
    private String zipcode;
    private String phonenum;
    private String phone1;
    private String phone2;
    private String phone3;
    private Date join_date;
    private int purchaseamount;
    private int countofpurchase;
}
