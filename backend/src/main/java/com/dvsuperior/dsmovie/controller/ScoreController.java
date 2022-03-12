package com.dvsuperior.dsmovie.controller;

import com.dvsuperior.dsmovie.DTO.MovieDTO;
import com.dvsuperior.dsmovie.DTO.ScoreDTO;
import com.dvsuperior.dsmovie.service.MovieService;
import com.dvsuperior.dsmovie.service.ScoreService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO scoreDTO) {
    	MovieDTO movieDTO = scoreService.saveScore(scoreDTO);
    	System.out.println("movieDTO: " + movieDTO);
        return movieDTO;
    }

}
