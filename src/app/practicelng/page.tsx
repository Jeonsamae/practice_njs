"use client";
import React, { useState, useEffect } from "react";

//needed since we use typescript .tsx
interface Todo {
  id: number;
  title: string;
}

const Page = () => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data: Todo[] = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      {data.map((d) => (
        <div key={d.id} className="bg-blue-500 rounded-lg p-6 w-[200px] mb-3">
          <p className="text-white text-lg">{d.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
