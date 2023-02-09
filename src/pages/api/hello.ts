import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextRequest) {
  return NextResponse.json({ result: "Hello World" });
}
