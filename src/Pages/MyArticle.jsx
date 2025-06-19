import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { Link, Navigate } from "react-router";
import Modal from "../Components/Modal";
import PostArticle from "../Pages/PostArticle";
import InputField from "../Components/InputField";
import Swal from "sweetalert2";

const MyArticles = () => {
  const { user, loading } = useAuth();
  const [articles, setArticles] = useState([]);
  const [modalArticles, setModalArticles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/myArticles?email=${user?.email}`)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => console.log(error));
  }, [loading, updated, deleted]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleEditArticle = (id) => {
    const modalArticle = articles.filter((article) => article._id === id);
    console.log(modalArticle);
    setModalArticles(modalArticle);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(user?.email);

  const handleUpdateWithModal = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const categoryName = form.category_name.value;
    const photo = form.photo.value;
    const content = form.content.value;
    const id = form.articleId.value;

    const newInfo = { title, categoryName, content, id, photo };
    console.log(newInfo);
    axios
      .patch("http://localhost:3000/myArticles", newInfo)
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Update your insights successfully",
          icon: "success",
          draggable: true,
        });
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDeleteArticle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/myArticles/${id}`)
          .then((response) => console.log(response))
          .catch((error) => {
            console.log(error);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your insights has been deleted.",
          icon: "success",
        });
        setDeleted(!deleted);
      }
    });
  };
  return (
    <div className="min-h-screen bg-gray-100  flex flex-col items-center py-8 px-4">
      <div
        className={`w-full max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden p-6 md:p-8 ${
          isModalOpen ? "blur-[1px]" : ""
        }`}
      >
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          My Published Insights
        </h1>
        {loading ? (
          <div className=" flex items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-600 text-xl py-10">
            You haven't published any articles yet. Why not create your first
            one?
          </p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 article-table">
              <thead className="bg-[#00183A] text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider rounded-tl-lg"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider rounded-tr-lg"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {articles.map((article) => (
                  <tr key={article._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium hover:underline">
                      <Link to={`/insights/${article._id}`}>
                        {article.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {article.category_name || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {/* {formatUtcDateToHumanReadable(article.date)} */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <div className="flex justify-center space-x-2">
                        <button className="text-[#00183A] hover:text-blue-900 px-3 py-1 rounded-md border border-[#00183A] hover:border-blue-900 transition-colors text-xs font-semibold">
                          <Link to={`/insights/${article._id}`}>View</Link>
                        </button>
                        <button
                          onClick={() => {
                            handleEditArticle(article._id), openModal();
                          }}
                          className="text-yellow-600 hover:text-yellow-900 px-3 py-1 rounded-md border border-yellow-600 hover:border-yellow-900 transition-colors text-xs font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(article._id)}
                          className="text-red-600 hover:text-red-900 px-3 py-1 rounded-md border border-red-600 hover:border-red-900 transition-colors text-xs font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="min-h-screen bg-gray-100  flex flex-col items-center justify-center p-4">
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Update Your Insights"
        >
          <form onSubmit={handleUpdateWithModal}>
            <div className="space-y-2">
              <label className="block">Title</label>
              <input
                type="text"
                name="title"
                id=""
                required
                defaultValue={modalArticles[0]?.title}
                className="input focus:outline-none border-none w-full"
              />

              <label className="block">Your Insights</label>
              <input
                type="text"
                name="articleId"
                defaultValue={modalArticles[0]?._id}
                className="hidden"
              />
              <textarea
                defaultValue={modalArticles[0]?.content}
                name="content"
                required
                className="input  focus:outline-none border-none p-4 w-full resize-y min-h-[300px] whitespace-normal"
                placeholder="Add Your Insights in Detail Here"
              ></textarea>
              <label className="block">
                Add a Thumbnail Photo (Only hosted photo)
              </label>
              <input
                type="text"
                name="photo"
                required
                id=""
                defaultValue={modalArticles[0]?.thumbnail_image}
                className="input focus:outline-none border-none w-full"
              />
              <label className="block">Select a Category </label>
              <select
                required
                name="category_name"
                className="input  focus:outline-none border-none w-full cursor-default"
              >
                <option value="">Select a Category</option>
                <option value="Technology & Innovation">
                  Technology & Innovation
                </option>
                <option value="Science & Research">Science & Research</option>
                <option value="Humanities & Arts">Humanities & Arts</option>
                <option value="Business & Economics">
                  Business & Economics
                </option>
                <option value="Health & Medicine">Health & Medicine</option>
                <option value="Engineering & Design">
                  Engineering & Design
                </option>
                <option value="Social Sciences">Social Sciences</option>
                <option value="Education & Pedagogy">
                  Education & Pedagogy
                </option>
                <option value="Environmental Studies">
                  Environmental Studies
                </option>
                <option value="Mathematics">Mathematics</option>
                <option value="Literature & Writing">
                  Literature & Writing
                </option>
                <option value="History & Culture">History & Culture</option>
                <option value="Philosophy & Ethics">Philosophy & Ethics</option>
                <option value="Career Development">Career Development</option>
                <option value="Personal Growth & Well-being">
                  Personal Growth & Well-being
                </option>
                <option value="Computer Science">Computer Science</option>
                <option value="Data Science & AI">Data Science & AI</option>
                <option value="Fine Arts & Music">Fine Arts & Music</option>
                <option value="Architecture & Urban Planning">
                  Architecture & Urban Planning
                </option>
                <option value="Law & Legal Studies">Law & Legal Studies</option>
                <option value="Psychology">Psychology</option>
                <option value="Astronomy & Space">Astronomy & Space</option>
                <option value="Biology & Life Sciences">
                  Biology & Life Sciences
                </option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Sports Science">Sports Science</option>
                <option value="Journalism & Media">Journalism & Media</option>
                <option value="International Relations">
                  International Relations
                </option>
                <option value="Culinary Arts">Culinary Arts</option>
                <option value="Gaming & Game Development">
                  Gaming & Game Development
                </option>
                <option value="Programming">Programming</option>
              </select>
            </div>
            <button
              type="submit"
              className="px-4 py-2 mt-4 bg-[#00FFFF] rounded-md hover:bg-[#92efef] transition-colors"
            >
              Update Articles
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default MyArticles;
