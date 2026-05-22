package com.himanshu.portfolio.config;

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
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {
    private final ProfileRepository profileRepository;
    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final AchievementRepository achievementRepository;

    public DataSeeder(
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

    @Override
    public void run(String... args) {
        if (profileRepository.count() > 0) {
            return;
        }

        Profile profile = new Profile();
        profile.setName("Himanshu Kumar Thakur");
        profile.setTitle("Java Full Stack Developer");
        profile.setEmail("hkumar54321s@gmail.com");
        profile.setPhone("+91 6201340937");
        profile.setLocation("Dehradun, Uttarakhand");
        profile.setResumeUrl("/resume/Himanshu_Kumar_Thakur_Resume.pdf");
        profile.setSummary("Final-year B.Tech CSE student with experience building scalable web applications using Spring Boot, React.js, and REST APIs. Skilled in backend development, database design, and API integration, with strong foundations in Data Structures, OOP, and system design.");
        profile.setHighlights(List.of(
                "Final-year B.Tech CSE student, expected 2026",
                "Java, Spring Boot, React, REST APIs and MySQL",
                "GATE CSE qualified twice: 2026 and 2025",
                "Interested in software engineering and full-stack systems"
        ));
        profileRepository.save(profile);

        projectRepository.saveAll(List.of(
                project(
                        "Sahi Raasta - AI-Powered Career Guidance Platform",
                        "Mar 2026 - Current",
                        "AI career platform",
                        "#22c55e",
                        "A full-stack career guidance platform that gives students dynamic, step-by-step roadmaps from 10th grade onwards.",
                        List.of("Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "LLM API"),
                        List.of(
                                "Built React and Java flows for personalized career guidance.",
                                "Integrated an LLM API to analyze user data and generate tailored college and career roadmaps.",
                                "Designed backend support for safe authentication and smooth roadmap retrieval."
                        )
                ),
                project(
                        "Memory Allocator Simulator",
                        "Oct 2025 - Dec 2025",
                        "Operating systems visualizer",
                        "#38bdf8",
                        "An interactive simulation application for visualizing core operating system memory allocation algorithms.",
                        List.of("Java", "React.js", "Spring Boot", "REST APIs"),
                        List.of(
                                "Implemented First Fit and Best Fit allocation logic in Java.",
                                "Engineered REST endpoints to connect backend simulation logic with the frontend.",
                                "Created a dynamic React interface for real-time memory allocation visualization."
                        )
                ),
                project(
                        "Full-Stack Calorie Tracker",
                        "Apr 2025 - Jul 2025",
                        "Health tracking app",
                        "#f97316",
                        "A full-stack nutrition tracker for daily intake, BMR calculation, food cataloging, and consumption logs.",
                        List.of("React", "Tailwind CSS", "Java", "Spring Boot", "REST APIs", "MySQL"),
                        List.of(
                                "Built a responsive React frontend and Spring Boot backend for REST API management.",
                                "Used MVC and service-layer architecture to calculate BMR and daily caloric limits.",
                                "Designed normalized MySQL schemas for users, foods, and daily consumption logs."
                        )
                )
        ));

        skillRepository.saveAll(List.of(
                skill("Java", "Languages", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", 92),
                skill("JavaScript", "Languages", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", 84),
                skill("Python", "Languages", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", 72),
                skill("C Programming", "Languages", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", 68),
                skill("HTML5", "Languages", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", 86),
                skill("CSS3", "Languages", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", 82),
                skill("React.js", "Frontend", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", 88),
                skill("Tailwind CSS", "Frontend", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", 78),
                skill("Spring Boot", "Backend", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", 88),
                skill("REST APIs", "Backend", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg", 86),
                skill("Microservices", "Backend", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", 70),
                skill("MySQL", "Database", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", 84),
                skill("SQL", "Database", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", 80),
                skill("AWS", "Cloud & Tools", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", 62),
                skill("Git", "Cloud & Tools", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", 82),
                skill("GitHub", "Cloud & Tools", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", 82),
                skill("Linux", "Cloud & Tools", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", 74),
                skill("Maven", "Cloud & Tools", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg", 76),
                skill("IntelliJ IDEA", "Cloud & Tools", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg", 78),
                skill("VS Code", "Cloud & Tools", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", 84)
        ));

        Experience internship = new Experience();
        internship.setRole("Java Developer Intern");
        internship.setCompany("InternPe");
        internship.setLocation("Remote");
        internship.setPeriod("Jul 2025 - Sep 2025");
        internship.setPoints(List.of(
                "Implemented exception handling and input validation to improve application reliability.",
                "Used Core Java, OOP, and data structures to build modular application logic.",
                "Completed console-based applications including Tic-Tac-Toe, Rock-Paper-Scissors, and Hangman."
        ));
        experienceRepository.save(internship);

        educationRepository.saveAll(List.of(
                education("Quantum University", "Roorkee, India", "B.Tech in Computer Science & Engineering", "2022 - Expected 2026"),
                education("DAV Public School Sec-4", "Bokaro Steel City, Jharkhand", "Class XII (CBSE)", "2020 - 2021")
        ));

        achievementRepository.saveAll(List.of(
                achievement("GATE CSE Qualified Twice", "Qualified GATE CSE in 2026 during final year and in 2025 during third year."),
                achievement("PAHAL Volunteer", "Volunteered with PAHAL - ek nanha kadam, supporting education for village kids.")
        ));
    }

    private Project project(String title, String period, String category, String accent, String description, List<String> techStack, List<String> impact) {
        Project project = new Project();
        project.setTitle(title);
        project.setPeriod(period);
        project.setCategory(category);
        project.setAccent(accent);
        project.setDescription(description);
        project.setTechStack(techStack);
        project.setImpact(impact);
        return project;
    }

    private Skill skill(String name, String category, String iconUrl, int level) {
        Skill skill = new Skill();
        skill.setName(name);
        skill.setCategory(category);
        skill.setIconUrl(iconUrl);
        skill.setLevel(level);
        return skill;
    }

    private Education education(String institution, String location, String degree, String period) {
        Education education = new Education();
        education.setInstitution(institution);
        education.setLocation(location);
        education.setDegree(degree);
        education.setPeriod(period);
        return education;
    }

    private Achievement achievement(String title, String detail) {
        Achievement achievement = new Achievement();
        achievement.setTitle(title);
        achievement.setDetail(detail);
        return achievement;
    }
}
