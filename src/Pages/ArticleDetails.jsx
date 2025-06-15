import React from "react";
import { useLoaderData } from "react-router";
import { dateFormat } from "../Utils/DateHelpers";

const ArticleDetails = () => {
  const article = useLoaderData();
  console.log(article);
  const { year, month, day } = dateFormat(article.date);
  console.log(year, month, day);
  const {
    title,
    content,
    category_name,
    tags,
    thumbnail_image,

    name,
  } = article;
  return (
    <div className="min-h-screen bg-gray-100   flex justify-center py-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden md:p-8 p-4">
        {thumbnail_image && (
          <div className="relative w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden mb-8">
            <img
              src={thumbnail_image}
              alt={title || "Article thumbnail"}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/1000x500/CCCCCC/333333?text=Image+Not+Available";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
                {title}
              </h1>
            </div>
          </div>
        )}

        {!thumbnail_image && (
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">
            {title}
          </h1>
        )}

        <div className="flex flex-wrap justify-between items-center text-gray-600 text-sm md:text-base mb-6 border-b pb-4">
          <p className="mb-2 md:mb-0">
            <strong className="text-gray-800">Author:</strong>{" "}
            {name || "Anonymous"}
          </p>
          <p className="mb-2 md:mb-0">
            <strong className="text-gray-800">Published On:</strong>{" "}
            {`${day[0]}${day[1]}/${month}/${year}`}
          </p>
          <p className="mb-2 md:mb-0">
            <strong className="text-gray-800">Category:</strong>{" "}
            {category_name || "Uncategorized"}
          </p>
        </div>

        {tags && tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            <strong className="text-gray-800 text-lg">Tags:</strong>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Article Content */}
        <div className="prose lg:prose-lg max-w-none text-gray-800 leading-relaxed article-content">
          {/* Using dangerouslySetInnerHTML if content contains HTML, otherwise just {content} */}
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
