"use client";
import { useActionState, useEffect } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/InputField";
import Message from "../../components/ui/Message";
import { login } from "../../libs/services/auth/action";

export default function SignInPage() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
      <div className="w-full max-w-md space-y-8 bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black text-white tracking-tighter">Welcome Back</h1>
          <p className="text-slate-400">Login to verify your assets now!</p>
        </div>

        <form action={formAction} className="space-y-4">
          <InputField 
            icon={Mail} 
            name="email" 
            type="email" 
            placeholder="Email..." 
            required 
          />
          <InputField 
            icon={Lock} 
            name="password" 
            type="password" 
            placeholder="Password..." 
            required 
          />
          
          <Message error={state?.error} />

          <Button 
            disabled={isPending} 
            className="w-full py-4 text-lg" 
            variant="primary"
          >
            {isPending ? "Logging in..." : "Sign In"}
            {!isPending && <ArrowRight className="w-5 h-5" />}
          </Button>
        </form>

        <p className="text-center text-slate-500 text-sm">
          Dont Have an account?
          <Link href="/signup" className="text-blue-500 font-bold hover:underline">
            Sign Up 
          </Link>
        </p>
      </div>
    </div>
  );
}