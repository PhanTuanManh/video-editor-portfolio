import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCameraRetro,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Adobe Premiere Pro",
  "CapCut",
  "After Effects",
  "Audio Syncing",
  "Transitions",
  "Sound Design",
  "Color Grading",
  "Short-form Editing",
];

const labelsSecond = [
  "Camera Operation",
  "Lighting Setup",
  "Audio Recording",
  "Cinematic Style",
  "Video Scripting",
  "Storyboarding",
  "B-roll Capture",
  "Tripod/Gimbal Use",
];

const labelsThird = [
  "Photoshop",
  "Canva",
  "Logo Integration",
  "Visual Consistency",
  "Basic Photography",
  "Social Format Export",
  "Branding Assets",
  "Thumbnail Design",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faVideo} size="3x" />
            <h3>Video Editing & Post-production</h3>
            <p>
              I specialize in editing engaging videos for social media platforms
              like TikTok, Reels, and Shorts using tools like Premiere Pro and
              After Effects. I focus on transitions, audio syncing, and color
              grading for high-quality delivery.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools & Skills:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCameraRetro} size="3x" />
            <h3>Filmmaking & Cinematic Shooting</h3>
            <p>
              I have hands-on experience with camera operation, lighting, and
              audio to capture cinematic visuals. I often direct, plan, and
              shoot creative scenes that support impactful video narratives.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Skills & Equipment:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPalette} size="3x" />
            <h3>Photography & Visual Design</h3>
            <p>
              I apply my skills in Photoshop and Canva to design branded
              visuals, thumbnails, and photo content. My work focuses on
              consistency, aesthetics, and delivering platform-optimized
              content.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Design Stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
