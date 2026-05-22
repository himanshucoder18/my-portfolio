package com.himanshu.portfolio.repository;

import com.himanshu.portfolio.model.Skill;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {
    List<Skill> findByCategoryOrderByLevelDesc(String category);
}
