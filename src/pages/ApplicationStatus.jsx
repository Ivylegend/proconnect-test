import React from "react";
import TableLayout from "../containers/TableLayout";
import GalleryAdd from "../../src/assets/images/gallery-add.png";

const ApplicationStatus = () => {
  return (
    <div className="margleft dashboard flex gap-8 flex-col">
      <div className="w-full flex items-center justify-center bg-blue-600 rounded-lg h-14 text-white font-semibold">
        Application Pending
      </div>
      <div className="w-full border border-black rounded-xl min-h-20 p-6 flex flex-col gap-4">
        <p className="text-red-500 font-medium text-3xl">
          Personal Information
        </p>
        <div className="flex justify-between">
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

      
      <div className="flex justify-evenly gap-2 items-start">
        <div className="h-32 w-full border border-black rounded-lg p-4">
          <p className="text-red-500 font-medium text-2xl">
            Other Information
          </p>
        </div>
        <hr className="w-2 h-[100%] bg-black" />
        <div className="h-32 w-full border border-black rounded-lg p-4"></div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
