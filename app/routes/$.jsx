import { redirect } from '@remix-run/node';

export function loader({ params }) {
  if (params['*'].includes('exp')) {
    return redirect('/expenses');
  }

  throw new Response('Not found', { status: 404 });
}
