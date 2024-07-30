import React from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";

const Blog = ({id, titleProp, bodyProp, authorProp, deleteProp }) => {
  return (
    <>
      <div className="container border p-5 bg-slate-100 rounded mt-6">
        <h2 className="font-bold text-slate-700">{titleProp}</h2>
        <p className="text-gray-500">{bodyProp}</p>
        <div className="flex justify-between">
          <h4 className="text-slate-800 mt-2">{authorProp}</h4>
          <div className="flex">

            <div className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center hover:text-blue-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <Link to={`/update/${id}`}>
              <CiEdit />
              </Link>
            </div>

            <div className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center hover:text-red-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <CiTrash onClick={deleteProp} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
