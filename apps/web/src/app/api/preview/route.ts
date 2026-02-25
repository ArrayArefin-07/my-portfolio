import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const redirect = searchParams.get('redirect') || '/';
  if (!process.env.SANITY_PREVIEW_SECRET || secret !== process.env.SANITY_PREVIEW_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }
  (await draftMode()).enable();
  return NextResponse.redirect(new URL(redirect, request.url));
}
