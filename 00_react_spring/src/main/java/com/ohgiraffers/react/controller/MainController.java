package com.ohgiraffers.react.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class MainController {

    @GetMapping("/showMe")
    public List<String> hello(){
        return Arrays.asList("드디어 연결됐다", "으어어어어어어어어");
    }
}
