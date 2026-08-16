"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./ResourceDirectory.module.css";
import SearchBar from "./SearchBar";
import CategoryChips from "./CategoryChips";
import ResourceCard from "./ResourceCard";
import EmptyState from "./EmptyState";
import { resources, getCategories } from "@/data/resources";

export default function ResourceDirectory() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category") || "All";
  const searchParam = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(searchParam);

  useEffect(() => {
    setSearchQuery(searchParam);
  }, [searchParam]);

  const categories = getCategories();

  const handleSearchSubmit = (text) => {
    const params = new URLSearchParams();
    if (categoryParam.toLowerCase() !== "all") {
      params.set("category", categoryParam.toLowerCase());
    }
    if (text && text.trim() !== "") {
      params.set("search", text.trim());
    }
    const queryStr = params.toString();
    router.push(queryStr ? `/resources?${queryStr}` : "/resources");
  };

  const filteredResources = useMemo(() => {
    const activeCategory = categoryParam.toLowerCase();
    const query = searchQuery.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "all" ||
        resource.category?.toLowerCase() === activeCategory;

      const matchesSearch =
        !query ||
        resource.title?.toLowerCase().includes(query) ||
        resource.description?.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, categoryParam]);

  const handleClear = () => {
    setSearchQuery("");
    router.push("/resources");
  };

  return (
    <div className={styles.directory}>
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearchSubmit}
      />
      <CategoryChips
        categories={categories}
        selectedCategory={categoryParam}
        searchQuery={searchQuery}
      />

      {filteredResources.length > 0 ? (
        <div className={styles.grid}>
          {filteredResources.map((resource) => (
            <div key={resource.id} className="fade-in">
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyState onClear={handleClear} />
      )}
    </div>
  );
}
