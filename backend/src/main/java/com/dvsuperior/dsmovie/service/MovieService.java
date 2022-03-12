package com.dvsuperior.dsmovie.service;

import com.dvsuperior.dsmovie.DTO.MovieDTO;
import com.dvsuperior.dsmovie.entities.Movie;
import com.dvsuperior.dsmovie.repository.MovieRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service
@AllArgsConstructor
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAll(Pageable pageable) {
        Page<Movie> result = movieRepository.findAll(pageable);
        return result.map(MovieDTO::new);
    }

    public MovieDTO findById(Long id) {
        Movie result = movieRepository.findById(id).get();
        return new MovieDTO(result);
    }
}
