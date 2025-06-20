import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { dateFormat } from "../Utils/DateHelpers";
import axios from "axios";
import useAuth from "../Hooks/useAuth";

const ArticleDetails = () => {
  const article = useLoaderData();
  const [likesCount, setLikesCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [postClicked, setPostClicked] = useState(false);
  const { user } = useAuth();

  const { year, month, day } = dateFormat(article?.date);

  const {
    _id,
    title,
    content,
    category_name,
    tags,
    thumbnail_image,

    name,
  } = article;
  const handleLikesCount = () => {
    const likes = {
      likesCount: likesCount + 1,
      postId: _id,
    };

    axios
      .post(`https://clarity-insight-server.vercel.app/likes/${_id}`, likes)
      .then((response) => {})
      .catch((error) => {});
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/likes/${_id}`)
      .then((response) => {
        if (response.data) {
          setLikesCount(response.data.likesCount);
        } else {
          setLikesCount(0);
        }
      })
      .catch((error) => {});
  }, []);

  const handlePostComment = () => {
    if (!commentText.trim()) {
      alert("You must be add comment to post");
    } else {
      const photoURL = user.photoURL;
      const author = user.displayName;
      const commentDetails = {
        photoURL,
        author,
        commentText,
        postId: _id,
      };
      axios
        .post(
          "https://clarity-insight-server.vercel.app/comments",
          commentDetails
        )
        .then((response) => {
          if (response.data.acknowledged) {
            setLoading(!loading);
          }
        })
        .catch((error) => {});
      setCommentText("");
      setPostClicked(!postClicked);
    }
  };
  useEffect(() => {
    axios
      .get(`https://clarity-insight-server.vercel.app/comments/${_id}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {});
  }, [postClicked, loading]);

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
          <p>{content}</p>
        </div>
        {/* Likes Section */}
        <div className="border-t border-gray-200 pt-6 mt-6 flex items-center justify-center space-x-4">
          <button
            disabled={!user} // Disable if not logged in
            onClick={() => {
              setLikesCount(likesCount + 1);
              handleLikesCount();
            }}
            className={`px-6 py-2 rounded-md font-semibold transition-colors flex items-center space-x-2
              ${
                user
                  ? "bg-[#00FFFF]  hover:bg-[#66c1c1]"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
          >
            {/* Heart Icon */}
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                clipRule="evenodd"
              />
            </svg>
            <span>{user ? "Like" : "Log in to Like"}</span>
          </button>
          <span className="text-gray-700 font-medium text-lg">
            {likesCount} Likes
          </span>
        </div>

        {/* Comments Section */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Comments ({comments.length})
          </h3>

          {/* Comment Input Form */}
          {user ? (
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y min-h-[80px]"
                placeholder="Write your comment here..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              ></textarea>
              <button
                onClick={handlePostComment}
                className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Post Comment
              </button>
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg mb-6 py-4 border border-gray-300 rounded-md">
              Please log in to post comments.
            </p>
          )}

          {/* Display Comments */}
          {comments.length === 0 ? (
            <p className="text-center text-gray-600">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div
                  key={comment.id || index}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center mb-2">
                    {" "}
                    {/* Flex container for avatar and name/date */}
                    {/* User Avatar */}
                    <img
                      src={
                        comment.photoURL ||
                        `https://placehold.co/40x40/808080/ffffff?text=${(
                          comment.author || "A"
                        )
                          .charAt(0)
                          .toUpperCase()}`
                      }
                      alt={`${comment.author}'s avatar`}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/40x40/808080/ffffff?text=${(
                          comment.author || "A"
                        )
                          .charAt(0)
                          .toUpperCase()}`;
                      }}
                    />
                    <div className="flex-1">
                      {" "}
                      {/* Container for name and date to push date to right */}
                      <div className="flex justify-between items-baseline">
                        <p className="font-semibold text-gray-800 text-base">
                          {comment.author || "Anonymous"}
                        </p>
                        <p className="text-sm text-gray-500">{comment.date}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 ml-12">{comment.commentText}</p>{" "}
                  {/* Indent comment text to align with author's name */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
