import React, { useState } from "react";
import "../assets/styles/Project.scss";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  link: string;
  thumbnailUrl?: string;
}

const Project: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const projects: ProjectItem[] = [
    {
       id: 1,
      title: "Vinmec Sao Phuong Dong",
      description:
        "Handled filming and post-production for an interview session with doctors and patients at Vinmec Sao Phuong Dong. Tasks included lighting setup, camera operation, editing, adding text effects, color grading, and overall post-production to deliver a polished final video.",
      youtubeId: "cgdk2FfV_Wc", // Thay bằng ID video YouTube của bạn
      link: "https://www.youtube.com/watch?v=cgdk2FfV_Wc",
      thumbnailUrl: "https://img.youtube.com/vi/cgdk2FfV_Wc/hqdefault.jpg",
    },
    {
      id: 2,
      title: "Sojin Hair Product Visual Ad",
      description:
        "Edited a promotional video featuring text effects and product cutouts for Sojin Hair. Created visual effects and clean background removal to showcase the hair care products.",
      youtubeId: "FI7gVH-KbiY", // Thay bằng ID video YouTube của bạn
      link: "https://www.youtube.com/shorts/FI7gVH-KbiY",
      thumbnailUrl: "https://img.youtube.com/vi/FI7gVH-KbiY/hqdefault.jpg",
    },
    {
      id: 3,
      title: "Athena Bling (Concept Music Video)",
      description:
        "Conceptualized, shot and edited a bling-style music video titled 'Athena Bling'. Handled all aspects from pre-production to final editing, creating a visually striking MV aesthetic.",
      youtubeId: "ZNQp5u6Ji0Q",
      link: "https://www.youtube.com/watch?v=ZNQp5u6Ji0Q",
      thumbnailUrl: "https://img.youtube.com/vi/ZNQp5u6Ji0Q/hqdefault.jpg",
    },
    {
      id: 4,
      title: "Athena Group 3D Logo Intro",
      description:
        "Created a professional 3D animated logo introduction for Athena Group. Designed the motion graphics and transitions to establish brand identity.",
      youtubeId: "Oiqb2iCaaZU",
      link: "https://www.youtube.com/watch?v=Oiqb2iCaaZU",
      thumbnailUrl: "https://img.youtube.com/vi/Oiqb2iCaaZU/hqdefault.jpg",
    },
    {
      id: 5,
      title: "BTEC FPT Student Selection Interviews",
      description:
        "Filmed and edited interview footage for BTEC FPT's selection process of students participating in the 'Step By Tien' program at Chu Van An High School. Responsible for all videography and post-production.",
      youtubeId: "0FKzCuMNrqY",
      link: "https://www.youtube.com/watch?v=0FKzCuMNrqY",
      thumbnailUrl: "https://img.youtube.com/vi/0FKzCuMNrqY/hqdefault.jpg",
    },
    {
      id: 6,
      title: "BTEC FPT Cinematic School Tour (Short)",
      description:
        "Produced a vertical cinematic-style short film showcasing BTEC FPT school environment. Handled all cinematography and editing to create an atmospheric, narration-free visual experience.",
      youtubeId: "eaqzmp3yf_c",
      link: "https://www.youtube.com/shorts/eaqzmp3yf_c",
      thumbnailUrl: "https://img.youtube.com/vi/eaqzmp3yf_c/hqdefault.jpg",
    },
    {
      id: 7,
      title: "BTEC FPT Youthful Promotional TikTok",
      description:
        "Created an engaging TikTok-style advertisement for BTEC FPT with youthful, approachable content. Responsible for shooting and editing this dynamic social media promo.",
      youtubeId: "WCTCGVPRVT0",
      link: "https://www.youtube.com/shorts/WCTCGVPRVT0",
      thumbnailUrl: "https://img.youtube.com/vi/WCTCGVPRVT0/hqdefault.jpg",
    },
    {
      id: 8,
      title: "BTEC FPT 'Step By Tien' Program Trailer",
      description:
        "Produced the official trailer for BTEC FPT's 'Step By Tien' educational program. Handled all aspects of videography and editing to create an impactful promotional video.",
      youtubeId: "f1A73VYAJH8",
      link: "https://www.youtube.com/watch?v=f1A73VYAJH8",
      thumbnailUrl: "https://img.youtube.com/vi/f1A73VYAJH8/hqdefault.jpg",
    },
    // Thêm các project khác tương tự...
  ];

  const handleProjectClick = (projectId: number) => {
    setActiveVideo(activeVideo === projectId ? null : projectId);
  };

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div
              className="video-container"
              onClick={() => handleProjectClick(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && handleProjectClick(project.id)
              }
            >
              {activeVideo === project.id ? (
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                />
              ) : (
                <img
                  src={
                    project.thumbnailUrl ||
                    `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
                  }
                  alt={`${project.title} thumbnail`}
                  className="zoom"
                  width="100%"
                  loading="lazy"
                />
              )}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
