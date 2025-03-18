import React, { useState } from 'react';
import s3Logo from './assets/s3.svg';
import cloudfrontLogo from './assets/cloudfront.png';
import EnvironmentVariables from './components/EnvironmentVariables';

function App() {
  const [activeEnvironment, setActiveEnvironment] = useState('preview');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            PR Preview System
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Blazing fast PR previews with S3 and CloudFront
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-center space-x-8 mb-8">
              {/* AWS S3 Logo */}
              <div className="flex flex-col items-center">
                <img src={s3Logo} alt="Amazon S3" className="w-16 h-16 object-contain" />
                <span className="mt-2 text-sm font-medium text-gray-900">Amazon S3</span>
              </div>

              {/* CloudFront Logo */}
              <div className="flex flex-col items-center">
                <img src={cloudfrontLogo} alt="CloudFront" className="w-16 h-16 object-contain" />
                <span className="mt-2 text-sm font-medium text-gray-900">CloudFront</span>
              </div>
            </div>

            <div className="prose prose-indigo mx-auto">
              <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
              <ul className="bg-gray-50 rounded-md p-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white mr-2 flex-shrink-0">1</span>
                  <span>GitHub Action is triggered on PR creation or update</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white mr-2 flex-shrink-0">2</span>
                  <span>Build artifacts are uploaded to S3 bucket with PR-specific prefix</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white mr-2 flex-shrink-0">3</span>
                  <span>CloudFront distribution serves the static content with low latency</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white mr-2 flex-shrink-0">4</span>
                  <span>Preview URL is posted as a comment on the PR</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6 border-t border-gray-200">
            <p className="text-sm text-center text-gray-500">
              Powered by React + S3 + CloudFront | Blazing Fast PR Preview System
            </p>
          </div>
        </div>

        {/* Environment Variables Section */}
        <div className="mb-8">
          <div className="sm:hidden">
            <label htmlFor="environment" className="sr-only">Select Environment</label>
            <select
              id="environment"
              name="environment"
              className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              value={activeEnvironment}
              onChange={(e) => setActiveEnvironment(e.target.value)}
            >
              <option value="preview">Preview Environment</option>
              <option value="production">Production Environment</option>
              <option value="development">Development Environment</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-4" aria-label="Environment">
              {['preview', 'production', 'development'].map((env) => (
                <button
                  key={env}
                  onClick={() => setActiveEnvironment(env)}
                  className={`${
                    activeEnvironment === env
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-500 hover:text-gray-700'
                  } px-3 py-2 font-medium text-sm rounded-md capitalize`}
                >
                  {env}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <EnvironmentVariables environment={activeEnvironment} />
      </div>
    </div>
  );
}

export default App;
