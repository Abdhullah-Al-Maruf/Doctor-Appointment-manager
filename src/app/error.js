'use client';

import { useEffect, useState } from 'react';
import { AlertCircle, RefreshCw, Home, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@heroui/react'; // Assuming you are using HeroUI based on previous context
import Link from 'next/link';

export default function Error({ error, reset }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Optional: Log error to monitoring service (e.g., Sentry, LogRocket)
  useEffect(() => {
    console.error("Page Error:", error);
   
  }, [error]);

  const handleReset = async () => {
    setIsResetting(true);
    try {
      await reset();
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white/50">
      <div className="max-w-md w-full bg-white/50 rounded-2xl shadow-xl border border-gray-100 p-8 text-center space-y-6 animate-in fade-in zoom-in duration-300">
        
        {/* Icon & Header */}
        <div className="flex justify-center">
          <div className="p-4 bg-red-50 rounded-full ring-4 ring-red-50/50">
            <AlertCircle size={48} className="text-red-500" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            Something went wrong
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We encountered an unexpected issue while loading this page. 
            Please try refreshing or contact support if the problem persists.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button
            color="primary"
            variant="solid"
            radius="lg"
            isLoading={isResetting}
            spinner={<RefreshCw className="animate-spin" />}
            onPress={handleReset}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg shadow-teal-600/20 min-w-[140px]"
          >
            Try Again
          </Button>
          
          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="bordered"
              radius="lg"
              className="w-full border-gray-200 text-gray-600 hover:bg-gray-50 font-medium min-w-[140px]"
              startContent={<Home size={18} />}
            >
              Go Home
            </Button>
          </Link>
        </div>

        {/* Technical Details Toggle (UX Best Practice: Hide complexity by default) */}
        <div className="pt-4 border-t border-gray-100">
          <button
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-gray-600 transition-colors mx-auto"
          >
            {isDetailsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            <span>{isDetailsOpen ? 'Hide Technical Details' : 'Show Technical Details'}</span>
          </button>

          {isDetailsOpen && (
            <div className="mt-3 p-3 bg-gray-50 rounded-lg text-left overflow-x-auto">
              <pre className="text-xs text-red-600 font-mono whitespace-pre-wrap break-all">
                {error.message || "Unknown error occurred"}
              </pre>
              {error.digest && (
                <p className="text-[10px] text-gray-400 mt-2 font-mono">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}