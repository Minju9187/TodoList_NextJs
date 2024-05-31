import { NextRequest, NextResponse } from "next/server";
import dummyTodos from "@/data/dummy.json";
import { fetchTodos } from "@/data/firestore";

/// 모든 할일 가져오기
export async function GET(request: NextRequest) {
  const fetchedTodos = await fetchTodos();

  const response = {
    message: "todos 몽땅 가져오기",
    data: fetchedTodos,
  };

  return NextResponse.json(response, { status: 200 });
}

/// 할일 추가
export async function POST(request: NextRequest) {
  const { title } = await request.json();

  const newTodo = {
    id: "10",
    title,
    is_done: false,
  };

  const response = { message: "할일 추가 성공!", data: newTodo };

  return NextResponse.json(response, { status: 201 });
}