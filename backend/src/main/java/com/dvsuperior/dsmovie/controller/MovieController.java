package com.dvsuperior.dsmovie.controller;

import com.dvsuperior.dsmovie.DTO.MovieDTO;
import com.dvsuperior.dsmovie.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/movies")
public class MovieController {

    @Autowired
    private final MovieService movieService;

    @GetMapping
    public ResponseEntity<Page<MovieDTO>> findAll(Pageable pageable) {
        return ResponseEntity.ok(movieService.findAll(pageable));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<MovieDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(movieService.findById(id));
    }


//    @PostMapping("/{id}")
//    public ResponseEntity<MovieDTO> salveRate()

}
