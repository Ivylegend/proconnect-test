import ChevronRight from "../../assets/images/Chevronright.png";
import "./CourseRequirements.css";

const CourseRequirements = () => {
  return (
    <div>
      <div className="app_apply">
        <h2 className="font-medium text-3xl">Requirements for this course</h2>
        <div className="uniType">
          <label htmlFor="" className="text-lg">Required</label>
          <div className="course_requirements">
            <div>
              <p className="font-medium">WAEC RESULT CERTIFICATE (ORIGINAL)</p>
              {/* <img className="btn" src={ChevronRight} alt="" /> */}
            </div>
            <div>
              <p className="font-medium">WAEC RESULT 2ND SITTING (OPTIONAL)</p>
              {/* <img className="btn" src={ChevronRight} alt="" /> */}
            </div>
            <div>
              <p className="font-medium">JAMB RESULT/SLIP (ORIGINAL)</p>
              {/* <img className="btn" src={ChevronRight} alt="" /> */}
            </div>
            <div>
              <p className="font-medium">BIRTH CERTIFICATE/AFFIDAVIT (ORIGINAL)</p>
              {/* <img className="btn" src={ChevronRight} alt="" /> */}
            </div>
            <div>
              <p className="font-medium">NIN SLIP/ANY MEANS OF NATIONAL ID</p>
              {/* <img className="btn" src={ChevronRight} alt="" /> */}
            </div>
            <div>
              <p className="font-medium">RECOMMENDER INFORMATION</p>
              {/* <img className="btn" src={ChevronRight} alt="" /> */}
            </div>
            <div>
              <p className="font-medium">OTHER DOCUMENTS</p>
              {/* <img className="btn" src={ChevronRight} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRequirements;
