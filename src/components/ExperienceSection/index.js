import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import Experience from "../../data/experience-data.json";
import { SectionHeader, SectionHeaderText } from "../common/SectionElements";
import { ExperienceContainer } from "./ExperienceElements";

const ExperienceSection = () => {
  return (
    <>
      <ExperienceContainer id="experience">
        <SectionHeader>
          <SectionHeaderText>Experience</SectionHeaderText>
        </SectionHeader>
        <VerticalTimeline layout="1-column-left" lineColor="#31757d">
          {Experience.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#ffffff",
                border: "2px solid #31757d",
                borderRadius: "10px",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #31757d" }}
              date={item.date}
              iconStyle={{ background: "#92cece", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#31757d" }}
              >
                {item.title}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "#31757d" }}
              >
                {item.location}
              </h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </ExperienceContainer>
    </>
  );
};

export default ExperienceSection;
