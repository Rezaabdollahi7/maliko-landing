"use client";

import React from "react";
import ArticleCard from "../ui/ArticleCard";
import MOCK_ARTICLES from "@/app/constants/mockArticles";

export default function ArticlesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8  flex justify-center items-center">
      <div className="max-w-7xl mx-auto flex flex-col justify-center gap-20">
        {/* Header */}
        <div className=" text-center lg:text-right">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            آخرین <span className="custom-underline">مقالات</span>
          </h2>
          <p className="mt-8 text-lg text-gray-600">
            جدیدترین مقالات و راهنماهای ما را مطالعه کنید.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center ">
          <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            مشاهده همه مقالات
          </button>
        </div>
      </div>
    </div>
  );
}
