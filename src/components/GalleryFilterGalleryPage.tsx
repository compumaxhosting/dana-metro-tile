"use client";
import { useMemo, useState } from "react";

import {
  galleryCategories,
  galleryFilterGalleryData,
  GalleryCategory,
} from "../data/galleryFilterGalleryData";

const GalleryFilterGalleryPage = () => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("ALL");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") return galleryFilterGalleryData;

    return galleryFilterGalleryData.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="bg-theme-cream py-20">
      <div className="mx-auto max-w-[1320px] px-5">

        {/* Filter */}

        <div className="flex flex-wrap items-center gap-7 border-b border-caramel pb-5">

          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative pb-2 text-[11px] font-sans uppercase tracking-[0.35em] transition

                ${
                  activeCategory === category
                    ? "text-caramel"
                    : "text-neutral-700 hover:text-caramel"
                }
              `}
            >
              {category}

              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-caramel" />
              )}
            </button>
          ))}
        </div>

        {/* Gallery */}

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden

                ${
                  project.featured
                    ? "md:col-span-2 lg:col-span-2"
                    : ""
                }
              `}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full object-cover transition duration-700 group-hover:scale-105

                ${
                  project.featured
                    ? "h-[500px]"
                    : "h-[500px]"
                }
                `}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-premium-beige">
                  {project.subtitle}
                </p>

                <h3 className="mt-2 text-font-cormorant text-4xl text-white">
                  {project.title}
                </h3>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default GalleryFilterGalleryPage;