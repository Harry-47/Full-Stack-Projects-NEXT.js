"use client";
import { use, useActionState } from "react";
import { User, Mail, Lock, Sparkles } from "lucide-react";
import Link from "next/link";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/InputField";
import Message from "../../components/ui/Message";
import { signup } from "../../libs/services/auth/action";
import { useEffect } from "react";

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(signup, null);

  useEffect(() => {
    state?.success ? setTimeout(() => {
      window.location.href = "/login";
    }, 1000)
    : null;
  }, [state?.success]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6 font-google-sans">
      <div className="w-full max-w-md space-y-8 bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black text-white tracking-tighter">Join Veriflow</h1>
          <p className="text-slate-400">Create an Account.</p>
        </div>

        <form action={formAction} className="space-y-4">
          <InputField 
            icon={User} 
            name="name" 
            type="text" 
            placeholder="Full Name..." 
            required 
          />
          <InputField 
            icon={Mail} 
            name="email" 
            type="email" 
            placeholder="Email Address..." 
            required 
          />
          <InputField 
            icon={Lock} 
            name="password" 
            type="password" 
            placeholder="Password..." 
            required 
          />
          
          <Message error={state?.error} success={state?.success} message={state?.message} />

          <Button 
            disabled={isPending} 
            className="w-full py-4 text-lg" 
            variant="primary"
          >
            {isPending ? "Creating Account..." : "Create Account"}
            {!isPending && <Sparkles className="w-5 h-5" />}
          </Button>
        </form>

        <p className="text-center text-slate-500 text-sm">
          Already have an account?
          <Link href="/login" className="text-blue-500 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}