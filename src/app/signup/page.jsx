'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    occupation: '',
    company: '',
    password: '',
    confirmPassword: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Form Data:', formData);
    router.push('/accounts/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <Input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
            <Input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} required />
            <Input type="text" name="company" placeholder="Company (Optional)" value={formData.company} onChange={handleChange} />
            <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
          <p className="mt-4 text-center">Already have an account? <Link href="/login">Log In</Link></p>
        </CardContent>
      </Card>
    </div>
    
  );
};

export default SignUp;
