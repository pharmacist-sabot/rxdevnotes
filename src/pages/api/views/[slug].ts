import type { APIRoute } from 'astro';

import { supabase } from '../../../lib/supabase';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  if (!slug)
    return new Response('Not found', { status: 404 });

  const { data, error } = await supabase
    .from('views')
    .select('count')
    .eq('slug', slug)
    .single();

  if (error) {
    return new Response(JSON.stringify({ count: 0 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ count: data.count }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ params }) => {
  const { slug } = params;
  if (!slug)
    return new Response('Not found', { status: 404 });

  const { data } = await supabase
    .from('views')
    .select('count')
    .eq('slug', slug)
    .single();

  const currentCount = data ? data.count : 0;

  const { error } = await supabase.from('views').upsert(
    { slug, count: currentCount + 1 },
    { onConflict: 'slug' },
  );

  if (error)
    return new Response('Error updating views', { status: 500 });

  return new Response(JSON.stringify({ count: currentCount + 1 }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
