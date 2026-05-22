package com.himanshu.portfolio.repository;

import com.himanshu.portfolio.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {
}
