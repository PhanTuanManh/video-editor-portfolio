import "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Apr 16, 2025 - Jul 1, 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Video Editor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              R&D Department - Athena Group (Holding)
            </h4>
            <a href="https://athenaholdings.vn">
              <p>https://athenaholdings.vn</p>
            </a>
            <p>
              Product Video Editing, Event Videography, On-site Filming, Visual
              Branding, Cross-team Collaboration
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Apr 4, 2022 - Mar 3, 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Video Editor & Content Creator
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Marketing Department – BTEC FPT College
            </h4>
            <a href="https://btec.fpt.edu.vn/">
              <p>https://btec.fpt.edu.vn</p>
            </a>
            <p>
              Video Production, Content Creation, Event Coverage, Visual Design,
              Cross-functional Collaboration
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Oct 1, 2022 - Nov 1, 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Video Editor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kokasi Viet Nam
            </h4>
            <a href="https://kokasi.vn/">
              <p>https://kokasi.vn</p>
            </a>
            <p>
              Camera Operation, Gimbal Filming, Interview & Documentary
              Shooting, Video Editing, Field Production
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
