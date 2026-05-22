package com.himanshu.portfolio.controller;

import com.himanshu.portfolio.model.Achievement;
import com.himanshu.portfolio.model.Education;
import com.himanshu.portfolio.model.Experience;
import com.himanshu.portfolio.model.Profile;
import com.himanshu.portfolio.model.Project;
import com.himanshu.portfolio.model.Skill;
import com.himanshu.portfolio.repository.AchievementRepository;
import com.himanshu.portfolio.repository.EducationRepository;
import com.himanshu.portfolio.repository.ExperienceRepository;
import com.himanshu.portfolio.repository.ProfileRepository;
import com.himanshu.portfolio.repository.ProjectRepository;
import com.himanshu.portfolio.repository.SkillRepository;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PortfolioController {
    private final ProfileRepository profileRepository;
    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final AchievementRepository achievementRepository;

    public PortfolioController(
            ProfileRepository profileRepository,
            ProjectRepository projectRepository,
            SkillRepository skillRepository,
            ExperienceRepository experienceRepository,
            EducationRepository educationRepository,
            AchievementRepository achievementRepository
    ) {
        this.profileRepository = profileRepository;
        this.projectRepository = projectRepository;
        this.skillRepository = skillRepository;
        this.experienceRepository = experienceRepository;
        this.educationRepository = educationRepository;
        this.achievementRepository = achievementRepository;
    }

    @GetMapping("/profile")
    public Profile getProfile() {
        return profileRepository.findAll().stream().findFirst().orElseThrow();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/skills")
    public List<Skill> getSkills(@RequestParam(required = false) String category) {
        if (category == null || category.isBlank()) {
            return skillRepository.findAll();
        }
        return skillRepository.findByCategoryOrderByLevelDesc(category);
    }

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        return experienceRepository.findAll();
    }

    @GetMapping("/education")
    public List<Education> getEducation() {
        return educationRepository.findAll();
    }

    @GetMapping("/achievements")
    public List<Achievement> getAchievements() {
        return achievementRepository.findAll();
    }
}
