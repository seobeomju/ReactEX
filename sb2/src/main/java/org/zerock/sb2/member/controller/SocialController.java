package org.zerock.sb2.member.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
@RequiredArgsConstructor
public class SocialController {
    @RequestMapping("/api/v1/member/kakao")
    public ResponseEntity<String[]> getkakao(String accessToken){
        log.info("getkako: " + accessToken);

        String[] result = new String[]{"acccess......", "refresh...."};

        return ResponseEntity.ok(result);
    }

}
