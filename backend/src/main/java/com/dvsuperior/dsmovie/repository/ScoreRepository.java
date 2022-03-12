package com.dvsuperior.dsmovie.repository;

import com.dvsuperior.dsmovie.entities.Score;
import com.dvsuperior.dsmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
