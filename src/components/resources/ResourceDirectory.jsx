"use client";

import { useState, useMemo } from "react";
import styles from "./ResourceDirectory.module.css";
import SearchBar from "./SearchBar";
import CategoryChips from "./CategoryChips";
import ResourceCard from "./ResourceCard";
import EmptyState from "./EmptyState";
import { resources, getCategories } from "@/data/resources";

export default function ResourceDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = getCategories();

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleClear = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className={styles.directory}>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <CategoryChips 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelect={setSelectedCategory} 
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
