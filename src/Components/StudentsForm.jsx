import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

export default function StudentsForm() {
  const [studentData, setStudentData] = useState({
    name: "",
    class: "",
    section: "",
    rollNumber: "",
    address: "",
    parentName: "",
    parentPhone: "",
    email: "",
    dob: "",
    gender: "",
    hobbies: "",
    notes: "",
  });

  // for storing the error mesages..
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  // Form validation for the input fields..
  const validateForm = () => {
    let formErrors = {};
    // Checking if reqired fields are empty..
    if (!studentData.name) formErrors.name = "Name is required";
    if (!studentData.class) formErrors.class = "Class is required";
    if (!studentData.section) formErrors.section = "Section is required";
    if (!studentData.rollNumber)
      formErrors.rollNumber = "Roll Number is required";
    if (!studentData.address) formErrors.address = "Address is required";
    if (!studentData.parentName)
      formErrors.parentName = "Parent's Name is required";
    if (!studentData.parentPhone)
      formErrors.parentPhone = "Parent's Phone is required";
    if (!studentData.email) formErrors.email = "Email is required";
    if (!studentData.dob) formErrors.dob = "Date of Birth is required";

    // Set errors state..
    setErrors(formErrors);
    // Return true if no errors
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form before submitting
    if (!validateForm()) {
      // If validation fails, don't submit
      return;
    }

    try {
      await addDoc(collection(db, "students"), studentData);
      alert("Student added successfully!");
      navigate("/students");
      setStudentData({
        name: "",
        class: "",
        section: "",
        rollNumber: "",
        address: "",
        parentName: "",
        parentPhone: "",
        email: "",
        dob: "",
        gender: "",
        hobbies: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  const handleCancel = () => {
    navigate("/students");
  };

  return (
    <div className="bg-gray-100 w-[75vw] h-full flex flex-col justify-start items-center p-6">
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-96 max-h-[75vh] overflow-auto"
      >
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Class</label>
          <input
            type="text"
            name="class"
            value={studentData.class}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.class && (
            <span className="text-red-500 text-sm">{errors.class}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Section</label>
          <input
            type="text"
            name="section"
            value={studentData.section}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.section && (
            <span className="text-red-500 text-sm">{errors.section}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={studentData.rollNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.rollNumber && (
            <span className="text-red-500 text-sm">{errors.rollNumber}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={studentData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.address && (
            <span className="text-red-500 text-sm">{errors.address}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Parent's Name</label>
          <input
            type="text"
            name="parentName"
            value={studentData.parentName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.parentName && (
            <span className="text-red-500 text-sm">{errors.parentName}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Parent's Phone</label>
          <input
            type="text"
            name="parentPhone"
            value={studentData.parentPhone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.parentPhone && (
            <span className="text-red-500 text-sm">{errors.parentPhone}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={studentData.dob}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.dob && (
            <span className="text-red-500 text-sm">{errors.dob}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Gender</label>
          <select
            name="gender"
            value={studentData.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-sm">{errors.gender}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Hobbies</label>
          <input
            type="text"
            name="hobbies"
            value={studentData.hobbies}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.hobbies && (
            <span className="text-red-500 text-sm">{errors.hobbies}</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Notes</label>
          <textarea
            name="notes"
            value={studentData.notes}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-6 py-2 rounded"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
