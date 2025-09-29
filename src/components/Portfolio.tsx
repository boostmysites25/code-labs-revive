import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  webPortfolio,
  appPortfolio,
  blockchainPortfolio,
  gamePortfolio,
} from "@/content";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Combine all portfolio items with their categories
  const allPortfolio = [
    ...webPortfolio.map((item) => ({ ...item, category: "web" })),
    ...appPortfolio.map((item) => ({ ...item, category: "app" })),
    ...blockchainPortfolio.map((item) => ({ ...item, category: "blockchain" })),
    ...gamePortfolio.map((item) => ({ ...item, category: "game" })),
  ];

  const filteredPortfolio =
    activeFilter === "all"
      ? allPortfolio
      : allPortfolio.filter((item) => item.category === activeFilter);

  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "app", label: "App Development" },
    { id: "blockchain", label: "Blockchain" },
    { id: "game", label: "Game Development" },
  ];

  return (
    <section className="section-padding bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore some of our recent work and see how we bring ideas to life.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-neon-cyan to-neon-pink text-black border-0"
                  : "border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((project, index) => (
            <Card
              key={`${project.category}-${project.id}`}
              className="bg-retro-gray border-retro-gray overflow-hidden group hover:border-neon-cyan transition-all duration-300 animate-fade-in"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3">
                  {project.category === "web"
                    ? "Modern web development with cutting-edge technologies"
                    : project.category === "app"
                    ? "Native and cross-platform mobile application"
                    : project.category === "blockchain"
                    ? "Decentralized blockchain solutions and smart contracts"
                    : "Immersive gaming experiences with cutting-edge graphics"}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neon-cyan capitalize">
                    {project.category} Development
                  </div>
                  {(project as any).link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-neon-cyan hover:text-white hover:bg-neon-cyan/10 transition-colors duration-300"
                      onClick={() => window.open((project as any).link, "_blank")}
                    >
                      View Project →
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPortfolio.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
