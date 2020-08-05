import React, { useState } from "react";
import Title from "./Title";
import { FaAngleDoubleRight, FaAlignRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const query = graphql`
  {
    allStrapiJobs(sort: { order: DESC, fields: strapiId }) {
      nodes {
        strapiId
        company
        desc {
          name
          id
        }
        position
        date
      }
    }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiJobs: { nodes: jobs },
  } = data;
  const [value, setValue] = useState(0);

  const { company, position, date, desc } = jobs[value];

  return (
    <section className="section jobs">
      <Title title="experience"></Title>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
            desc.map((item) => {
              return <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            })
          }
        </article>
      </div>
      <Link to='/about' aria-label="about" className="btn center-btn">More info</Link>
    </section>
  );
};

export default Jobs;
