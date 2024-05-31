import { NextRequest, NextResponse } from "next/server";
import { fetchATodo } from "@/data/firestore";
//할일 단일 조회
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;

  //   const search = searchParams.get("search");
  const query = searchParams.get("query");

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'

  const fetchedTodo = await fetchATodo(params.slug);

  if (fetchedTodo === null) {
    return new NextResponse(null, { status: 204 });
  }

  const response = {
    message: "단일 할일 가져오기 성공",
    data: fetchedTodo,
  };

  return NextResponse.json(response, { status: 200 });
}

// 할일 단일 삭제 id
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const response = {
    message: "단일 할일 삭제 성공",
    data: {
      id: params.slug,
      title: "오늘도 빡코딩!",
      is_done: false,
    },
  };

  return NextResponse.json(response, { status: 200 });
}

// 할일 단일 수정 id
export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { title, is_done } = await request.json();

  const editedTodo = {
    id: params.slug,
    title,
    is_done,
  };

  const response = {
    message: "단일 할일 수정 성공",
    data: editedTodo,
  };

  return NextResponse.json(response, { status: 200 });
}
