import ChevronRight from "../../assets/images/Chevronright.png";
import "./CourseRequirements.css";

const CourseRequirements = () => {
  return (
    <div>
      <div className="app_apply">
        <h2>Requirements for this course</h2>
        <div className="uniType">
          <label htmlFor="">Courses</label>
          <div className="course_requirements">
            <div>
              <p>WAEC RESULT CERTIFICATE (ORIGINAL)</p>
              <img className="btn" src={ChevronRight} alt="" />
            </div>
            <div>
              <p>WAEC RESULT 2ND SITTING (OPTIONAL)</p>
              <img className="btn" src={ChevronRight} alt="" />
            </div>
            <div>
              <p>JAMB RESULT/SLIP (ORIGINAL)</p>
              <img className="btn" src={ChevronRight} alt="" />
            </div>
            <div>
              <p>BIRTH CERTIFICATE/AFFIDAVIT (ORIGINAL)</p>
              <img className="btn" src={ChevronRight} alt="" />
            </div>
            <div>
              <p>NIN SLIP/ANY MEANS OF NATIONAL ID</p>
              <img className="btn" src={ChevronRight} alt="" />
            </div>
            <div>
              <p>RECOMMENDER INFORMATION</p>
              <img className="btn" src={ChevronRight} alt="" />
            </div>
            <div>
              <p>OTHER DOCUMENTS</p>
              <img className="btn" src={ChevronRight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRequirements;
