import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ status: 400, message: "Missing Secret Param" });
  }

  if (!tag) {
    return NextResponse.json({ status: 400, message: "Missing Tag Param" });
  }

  revalidateTag(tag);

  return NextResponse.json({ status: true, now: Date.now() });
}
