package org.zerock.sb2.member.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.sb2.member.service.MemberService;

@RestController
@Log4j2
@RequiredArgsConstructor
public class SocialController {

    private final MemberService memberService;

    @RequestMapping("/api/v1/member/kakao")
    public ResponseEntity<String[]> getkakao(String accessToken){
        log.info("getkako: " + accessToken);

        String kakaoEmail = memberService.getKakaoEmail(accessToken);

        log.info("kakaoEmail: " + kakaoEmail);

        String[] result = new String[]{"acccess......", "refresh...."};

        return ResponseEntity.ok(result);
    }

}
