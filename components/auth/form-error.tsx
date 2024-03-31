import React from 'react';
import {
  ExclamationTriangleIcon,
  CheckCircledIcon,
} from '@radix-ui/react-icons';
import { stat } from 'fs';

interface FormErrorProps {
  message?: string;
  status?: 'error' | 'success';
}

export default function FormError({ message, status }: FormErrorProps) {
  if (!status) return null;

  const error = 'bg-destructive/15 text-destructive';

  const success = 'bg-lime-500/20 text-emerald-500';

  return (
    <div
      className={`flex gap-2 rounded-md p-3 text-sm ${status && status === 'error' ? error : success}`}
    >
      {status && status === 'error' ? (
        <>
          <ExclamationTriangleIcon className="h-5 w-5" />
          <p className="text-destructive">{message}</p>
        </>
      ) : (
        <>
          <CheckCircledIcon className="h-5 w-5" />
          <p className="text-emerald-500">{message}</p>
        </>
      )}
    </div>
  );
}
