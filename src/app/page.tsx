'use client';

import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

import Image from 'next/image'

import AutoComplete from '@/../components/autocomplete'

export default function Home() {
  return (
    
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Authenticator>
            {({ signOut, user }) => (
              <main>
                <h1>Hello, {user.username}!</h1>
                <button onClick={signOut}>Sign out</button>

                <AutoComplete />
              </main>
            )}
          </Authenticator>
      </main>
      
  )
}
