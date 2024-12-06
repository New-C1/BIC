"use client"
import { GetServerSideProps } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faFlask,
  faHospital,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';

const Counts = () => {
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row">
          

          <div className="col-lg-5 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <div className="counts-icon">
                <FontAwesomeIcon icon={faHospital}></FontAwesomeIcon>
              </div>
              <CountUp
                start={0}
                end={6}
                duration={5}
                delay={0}
                >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>Departments</p>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <div className="counts-icon">
                <FontAwesomeIcon icon={faFlask}></FontAwesomeIcon>
              </div>
              <CountUp
                start={0}
                end={10}
                duration={5}
                delay={0}
                >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>Research Labs</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <div className="counts-icon">
                <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
              </div>
              <CountUp
                start={0}
                end={10}
                duration={5}
                delay={0}
                >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Counts;
