import AuthForm from '~/components/auth/AuthForm';
import authStyle from '~/styles/auth.css';

export default function AuthPage() {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  // validation here

  if (authMode === 'login') {
    // login
  } else {
    // signup
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: authStyle,
    },
  ];
}
