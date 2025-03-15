import s3Logo from './assets/s3.svg';
import cloudfrontLogo from './assets/cloudfront.png';

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
              {/* AWS S3 Logo */}
              <div className="flex flex-col items-center">
                <img src={s3Logo} alt="Amazon S3" className="w-16 h-16 object-contain" />
                <span className="mt-2 text-sm font-medium text-gray-900">Amazon S3</span>
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
