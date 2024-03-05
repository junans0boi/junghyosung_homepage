package com.example.backend.controller;

import com.example.backend.dto.MemberDto;
import com.example.backend.entity.Item;
import com.example.backend.entity.Member;
import com.example.backend.repository.ItemRepository;
import com.example.backend.repository.MemberRepository;
import com.example.backend.service.JwtService;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class AccountController {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    JwtService jwtService;
    @PostMapping("/api/account/login")
    public ResponseEntity login(@RequestBody Map<String, String> params,
                                HttpServletResponse res) {
        Member member = memberRepository.findByEmailAndPassword(params.get("email"), params.get("password"));

        if (member != null) {
            int id = member.getId();
            String token = jwtService.getToken("id", id);

            Cookie cookie = new Cookie("token", token);
            cookie.setHttpOnly(true);
            cookie.setPath("/");

            res.addCookie(cookie);

            return new ResponseEntity<>(id, HttpStatus.OK);
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/api/account/logout")
    public ResponseEntity logout(HttpServletResponse res) {
        Cookie cookie = new Cookie("token", null);
        cookie.setPath("/");
        cookie.setMaxAge(0);

        res.addCookie(cookie);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/api/account/check")
    public ResponseEntity check(@CookieValue(value = "token", required = false) String token) {
        Claims claims = jwtService.getClaims(token);

        if (claims != null) {
            int id = Integer.parseInt(claims.get("id").toString());
            return new ResponseEntity<>(id, HttpStatus.OK);
        }

        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    @PostMapping("/api/account/signup")
    public ResponseEntity<?> signUp(@RequestBody MemberDto memberDto) {
        try {
            // 회원 정보 저장
            Member member = new Member();
            member.setEmail(memberDto.getEmail());
            member.setPassword(memberDto.getPassword());
            member.setName(memberDto.getName());
            member.setAddress(memberDto.getAddress1());
            member.setAddress1(memberDto.getAddress2());
            member.setAddress2(memberDto.getAddress1()+memberDto.getAddress2());
            member.setZipcode(memberDto.getZipcode());
            member.setPhone1(memberDto.getPhone1());
            member.setPhone2(memberDto.getPhone2());
            member.setPhone3(memberDto.getPhone3());
            member.setPhonenum(memberDto.getPhone1()+memberDto.getPhone2()+memberDto.getPhone3());
            // 현재 시각 설정
            member.setJoinDate(new Date());

            // 초기화
            member.setPurchaseamount(0);
            member.setCountofpurchase(0);

            memberRepository.save(member);
            return ResponseEntity.ok("회원가입이 완료되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원가입에 실패했습니다.");
        }
    }

    @GetMapping("/api/account/profile")
    public ResponseEntity<MemberDto> getLoggedInUser(@CookieValue(value = "token", required = false) String token) {
        Claims claims = jwtService.getClaims(token);

        if (claims != null) {
            int userId = Integer.parseInt(claims.get("id").toString());
            Optional<Member> optionalMember = memberRepository.findById(userId);

            if (optionalMember.isPresent()) {
                Member member = optionalMember.get();
                MemberDto memberDto = new MemberDto();
                memberDto.setEmail(member.getEmail());
                memberDto.setPassword(member.getPassword());
                memberDto.setName(member.getName());
                memberDto.setAddress(member.getAddress1()+member.getAddress2());
                memberDto.setAddress1(member.getAddress1());
                memberDto.setAddress2(member.getAddress2());
                memberDto.setZipcode(member.getZipcode());
                memberDto.setPhone1(member.getPhone1());
                memberDto.setPhone2(member.getPhone2());
                memberDto.setPhone3(member.getPhone3());
                memberDto.setPhonenum(member.getPhone1()+member.getPhone2()+member.getPhone3());

                return ResponseEntity.ok(memberDto);
            }
        }

        return ResponseEntity.notFound().build();
    }
    @PutMapping("/api/account/profile")
    public ResponseEntity<?> updateProfile(@RequestBody MemberDto memberDto,
                                           @CookieValue(value = "token", required = false) String token) {
        try {
            // Ensure the token is not null
            if (token == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized access");
            }

            // Find the logged-in user
            Claims claims = jwtService.getClaims(token);
            if (claims != null) {
                int userId = Integer.parseInt(claims.get("id").toString());
                Optional<Member> optionalMember = memberRepository.findById(userId);

                if (optionalMember.isPresent()) {
                    Member member = optionalMember.get();
                    // Update the user's information
                    member.setEmail(memberDto.getEmail());
                    member.setPassword(memberDto.getPassword());
                    member.setName(memberDto.getName());
                    member.setAddress(memberDto.getAddress());
                    member.setAddress1(memberDto.getAddress1()+memberDto.getAddress2());
                    member.setAddress2(memberDto.getAddress2());
                    member.setZipcode(memberDto.getZipcode());
                    member.setPhone1(memberDto.getPhone1());
                    member.setPhone2(memberDto.getPhone2());
                    member.setPhone3(memberDto.getPhone3());
                    member.setPhonenum(memberDto.getPhone1()+memberDto.getPhone2()+memberDto.getPhone3());

                    memberRepository.save(member); // Save the updated member object
                    return ResponseEntity.ok("개인정보가 수정되었습니다.");
                }
            }

            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("개인정보 수정에 실패했습니다.");
        }
    }
    @GetMapping("/api/account/all")
    public ResponseEntity<List<Member>> getAllMembers() {
        List<Member> members = memberRepository.findAll();
        return ResponseEntity.ok(members);
    }
}
