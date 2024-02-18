package com.ohgiraffers.react.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class MainController {

    @GetMapping("/showMe")
    public List<String> hello(){
        return Arrays.asList("1번 연결 테스트", "2번 연결 테스트");
    }
}
