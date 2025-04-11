package org.zerock.sb2.todo.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.sb2.todo.dto.TodoDTO;

import java.util.List;

@RestController
@RequestMapping("/api/v1/todos")
@Log4j2
@RequiredArgsConstructor
public class TodoController {

    @GetMapping("list")
    public ResponseEntity<List<TodoDTO>> list1(){
        List<TodoDTO> list
                =List.of(
                        TodoDTO.builder()
                                .tno(10L)
                                .title("title10")
                                .writer("writer10")
                                .build(),
                        TodoDTO.builder()
                                .tno(10L)
                                .title("title10")
                                .writer("writer10")
                                .build()
        );

        return ResponseEntity.ok(list);
    }

}
