import React from "react";
import { Link } from "react-router";

const TopContributor = () => {
  const contributors = [
    {
      id: 1,
      name: "Dr. Aisha Khan",
      specialty: "Artificial Intelligence & Ethics",
      bio: "A leading researcher in AI fairness and responsible technology development. Dr. Khan frequently writes on the societal impact of emerging AI trends.",
      imageUrl: "https://placehold.co/150x150/F0F9FF/222?text=AK", // Placeholder image
      profileLink: "/authors/aisha-khan",
    },
    {
      id: 2,
      name: "Michael Chen",
      specialty: "Sustainable Urban Planning",
      bio: "An urban planner passionate about green infrastructure and resilient city design. Michael shares practical insights on building sustainable communities.",
      imageUrl: "https://placehold.co/150x150/F0F9FF/222?text=MC", // Placeholder image
      profileLink: "/authors/michael-chen",
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      specialty: "Digital Marketing & Consumer Psychology",
      bio: "Expert in brand strategy and consumer behavior in the digital age. Sophia provides actionable advice on effective online engagement.",
      imageUrl: "https://placehold.co/150x150/F0F9FF/222?text=SR", // Placeholder image
      profileLink: "/authors/sophia-rodriguez",
    },
    {
      id: 4,
      name: "David Lee",
      specialty: "Financial Technology & Blockchain",
      bio: "A fintech analyst exploring the intersection of finance and technology. David demystifies complex financial innovations and blockchain applications.",
      imageUrl: "https://placehold.co/150x150/F0F9FF/222?text=DL", // Placeholder image
      profileLink: "/authors/david-lee",
    },
  ];

  return (
    <section className="py-12 md:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 ">
          Meet Our Top Contributors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center
                         hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
                         "
            >
              {/* Profile Image */}
              <img
                src={contributor.imageUrl}
                alt={contributor.name}
                className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-blue-500 "
              />
              {/* Contributor Name */}
              <h3 className="text-xl font-semibold text-gray-900  mb-1">
                {contributor.name}
              </h3>
              {/* Contributor Specialty */}
              <p className="text-blue-600 text-sm mb-3">
                {contributor.specialty}
              </p>
              {/* Contributor Bio */}
              <p className="text-gray-700  text-base leading-relaxed mb-4 line-clamp-3">
                {contributor.bio}
              </p>
              {/* Optional: Link to Contributor's Profile */}
              {contributor.profileLink && (
                <Link
                  to="/profileDetails"
                  className="btn btn-sm btn-outline btn-primary  mt-auto
                            "
                >
                  View Profile
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopContributor;
