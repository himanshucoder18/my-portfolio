package com.himanshu.portfolio.repository;

import com.himanshu.portfolio.model.Education;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducationRepository extends JpaRepository<Education, Long> {
}
