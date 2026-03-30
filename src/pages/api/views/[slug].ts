import type { APIRoute } from 'astro';

import { supabase } from '@/lib/supabase';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  if (!slug)
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });

  try {
    const { data, error } = await supabase
      .from('views')
      .select('count')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Supabase GET views error:', error);
      return new Response(JSON.stringify({ count: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ count: data.count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  catch (err) {
    console.error('Unexpected GET views error:', err);
    return new Response(JSON.stringify({ count: 0 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ params }) => {
  const { slug } = params;
  if (!slug)
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });

  try {
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

    if (error) {
      console.error('Supabase POST views error:', error);
      // Return 500 but as a valid JSON response so frontend doesn't break parsing
      return new Response(JSON.stringify({ error: 'Error updating views', details: error }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ count: currentCount + 1 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  catch (err) {
    console.error('Unexpected POST views error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
