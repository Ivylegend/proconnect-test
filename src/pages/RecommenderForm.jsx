import React from "react";

const RecommenderForm = () => {
  return (
    <div className="p-12">
      <h1 className="text-[32px] font-medium text-center">
        Recommender Information for Student
      </h1>
      <p className="font-semibold text-2xl my-4">Recommender Details</p>

      {/* QUESTION 1 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>1.</span> Are you a family member, employer ,or someone familiar
          with the student's academic and financial situation?{" "}
        </p>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Family Member </p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Employer</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">
            Other (Please specify):{" "}
            <input
              type="text"
              className="border-b-2 border-black border-dashed focus:border-none"
            />
          </p>
        </span>
      </div>

      {/* QUESTION 2 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>2.</span>How long have you known the student?
        </p>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Less than 6 months</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">6 months - 1 year</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">1-2 years</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">More than 2 years</p>
        </span>
      </div>

      {/* QUESTION 3 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>3.</span>In what capacity have you interacted with the student?
        </p>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Academic Advisor</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Supervisor</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Colleague</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">
            Other (Please specify):{" "}
            <input
              type="text"
              className="border-b-2 border-black border-dashed focus:border-none"
            />
          </p>
        </span>
      </div>

      <p className="font-semibold text-2xl my-6">Student's Academic Performance</p>

      {/* QUESTION 4 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>4.</span>How would you rate the student's academic performance?
        </p>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Excellent</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Good</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Average</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Below Average</p>
        </span>
      </div>

      {/* QUESTION 5 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>5.</span>Is the student actively involved in extracurricular
          activities or community service?
        </p>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Yes</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">No</p>
        </span>
      </div>

      {/* QUESTION 6 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>6.</span>Can you provide any specific achievements or notable
          qualities of the student?
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="border-2 border-[#686868] max-w-[700px] p-4 rounded-lg"
        ></textarea>
      </div>

      {/* QUESTION 7 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>7.</span>Are you aware of the student's current financial status
          and challenges?
        </p>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Yes</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">No</p>
        </span>
      </div>

      {/* QUESTION 8 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>8.</span>Does the student have any part-time employment or
          source of income?
        </p>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Yes</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">No</p>
        </span>
      </div>

      {/* QUESTION 9 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>9.</span>Are there any financial hardships or unexpected
          expenses the student is currently facing?
        </p>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Yes</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">No</p>
        </span>
      </div>

      <p className="font-semibold text-2xl my-6">Recommendation</p>
      {/* QUESTION 10 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>10.</span>Based on your knowledge of the student, do you believe
          they would be a responsible borrower?
        </p>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Yes</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">No</p>
        </span>
      </div>

      {/* QUESTION 11 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>11.</span>Would you recommend the student for a student
          financing loan?
        </p>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Strongly Recommend</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Recommend</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Neutral</p>
        </span>
        <span className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="rounded-full" />
          <p className="font-medium">Do Not Recommend</p>
        </span>
      </div>

      {/* QUESTION 12 */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="font-semibold flex gap-4">
          <span>12.</span>Is there any additional information or comments you
          would like to provide in support of the student's loan application?
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="border-2 border-[#686868] p-4 max-w-[700px] rounded-lg"
        ></textarea>
      </div>
    </div>
  );
};

export default RecommenderForm;
