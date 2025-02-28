import { redirect } from 'next/navigation';

export default function Accounts() {
  redirect('/accounts/signup');  // Or '/accounts/login'
}
