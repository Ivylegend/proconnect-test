import React from "react";
import TableLayout from "../containers/TableLayout";
import GreenTick from "../assets/images/greentick.png";
import GalleryAdd from "../../src/assets/images/gallery-add.png";

const ApplicationStatus = () => {
  return (
    <div className="margleft dashboard flex gap-8 flex-col">
      {/* PENDING DIV */}
      <div className="w-full flex items-center justify-center bg-blue-600 rounded-lg h-14 text-white font-semibold">
        Application Pending
      </div>

      {/* PESRONAL INFORMATION */}
      <div className="w-full border border-gray-400 rounded-xl min-h-20 p-6 flex flex-col gap-4">
        <p className="text-red-500 font-medium text-3xl">
          Personal Information
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col gap-4">
            <span className="flex">
              <p className="w-[150px]">Name</p>
              <p className="text-left font-semibold">John Francis Okonkwo</p>
            </span>
            <span className="flex">
              <p className="w-[150px]">NIN</p>
              <p className="text-left font-semibold">1223232763</p>
            </span>
            <span className="flex">
              <p className="w-[150px]">Gender</p>
              <p className="text-left font-semibold">Male</p>
            </span>
            <span className="flex">
              <p className="w-[150px]">Date Of Birth</p>
              <p className="text-left font-semibold">20th May, 1996</p>
            </span>
            <span className="flex">
              <p className="w-[150px]">Phone Number</p>
              <p className="text-left font-semibold">+234 7042683093</p>
            </span>
            <span className="flex">
              <p className="w-[150px]">Address</p>
              <p className="text-left font-semibold">
                17th University Road, Yaba Lagos State
              </p>
            </span>
            <span className="flex">
              <p className="w-[150px]">Father's Name</p>
              <p className="text-left font-semibold">JohnSon Frank Okonkwo</p>
            </span>
            <span className="flex">
              <p className="w-[150px]">Mother's Name</p>
              <p className="text-left font-semibold">Mary Janet Okonkwo</p>
            </span>
          </div>
          <div className="profile-pics">
            <span>
              <div className="pics-upload">
                <input type="file" className="file-upload" />
                <img src={GalleryAdd} alt="upload image" />
                <p>Student's photo</p>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly gap-2">
        {/*OTHER INFORMATION  */}
        <div className="w-full border border-gray-400 rounded-lg p-4 flex flex-col gap-4">
          <p className="text-red-500 font-medium text-2xl">Other Information</p>
          <div className="flex flex-col gap-4">
            <span className="flex justify-between">
              <p className="font-normal text-gray-500">Institution Of Choice</p>
              <p className="font-medium">Covenant University</p>
            </span>
            <span className="flex justify-between">
              <p className="font-normal text-gray-500">Course Of Study</p>
              <p className="font-medium">Computer Science</p>
            </span>
            <span className="flex justify-between">
              <p className="font-normal text-gray-500">Financial Option</p>
              <p className="font-medium">Parents</p>
            </span>
            <span className="flex justify-between">
              <p className="font-normal text-gray-500">
                Application Fee Payment
              </p>
              <p className="font-medium">Paid</p>
            </span>
            <div className="flex justify-between">
              <p className="font-normal text-gray-500">Documents Uploaded</p>
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2">
                  <img src={GreenTick} alt="green tick" />
                  <p>WAEC</p>
                </span>
                <span className="flex items-center gap-2">
                  <img src={GreenTick} alt="green tick" />
                  <p>JAMB</p>
                </span>
                <span className="flex items-center gap-2">
                  <img src={GreenTick} alt="green tick" />
                  <p>NECO</p>
                </span>
                <span className="flex items-center gap-2">
                  <img src={GreenTick} alt="green tick" />
                  <p>NIN</p>
                </span>
                <span className="flex items-center gap-2">
                  <img src={GreenTick} alt="green tick" />
                  <p>Passport Photograph</p>
                </span>
                <span className="flex items-center gap-2">
                  <img src={GreenTick} alt="green tick" />
                  <p>Birth Certificate</p>
                </span>
                <span className="flex items-center gap-2">
                  <img src={GreenTick} alt="green tick" />
                  <p>Certificate of Origin</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* HORIZOONTAL LINE */}
        <span className="w-0 sm:w-1 rounded-md bg-gray-300" />

        {/* REFERENCE INFO */}
        <div className="w-full border border-gray-400 rounded-lg p-4 flex flex-col gap-4">
          <p className="text-red-500 font-medium text-2xl">
            Reference Information
          </p>
          <div className="flex flex-col gap-4">
            <span className="flex justify-between">
              <p className="font-normal text-gray-500">Full Name</p>
              <p className="font-medium">Isaac John</p>
            </span>
            <span className="flex justify-between">
              <p className="font-normal text-gray-500">Email Address</p>
              <p className="font-medium">vistaor@gmail.com</p>
            </span>
            <span className="flex justify-between">
              <p className="font-normal text-gray-500">Phone Number</p>
              <p className="font-medium">+234 023 122 1222</p>
            </span>
            <span className="flex justify-between">
              <p className="font-normal text-gray-500">Profession </p>
              <p className="font-medium">Doctor</p>
            </span>
            <span className="flex justify-between">
              <p className="font-normal text-gray-500">Relationship</p>
              <p className="font-medium">Family Member</p>
            </span>
            <span className="flex justify-between">
              <p className="font-normal text-gray-500">Address </p>
              <p className="font-medium">
                13, Johnson street, GRA, Lagos State
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
