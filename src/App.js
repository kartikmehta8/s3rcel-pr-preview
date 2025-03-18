function App() {
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

        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-center space-x-8 mb-8">
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
      </div>
    </div>
  );
}

export default App;
