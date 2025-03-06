'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  const [loginData, setLoginData] = useState({
    emailOrUsername: '',
    password: '',
  });


  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="emailOrUsername" placeholder="Email or Username" value={loginData.emailOrUsername} onChange={handleChange} required />
            <Input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} required />
            <Button type="submit" className="w-full">Log In</Button>
          </form>
          <p className="mt-4 text-center">Don't have an account? <Link href="/signup">Sign Up</Link></p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;