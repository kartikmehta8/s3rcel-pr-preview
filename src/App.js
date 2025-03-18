import React from 'react';
import s3Logo from './assets/s3.svg';
import cloudfrontLogo from './assets/cloudfront.png';
import Header from './components/Header';
import ServiceLogos from './components/ServiceLogos';
import WorkflowSteps from './components/WorkflowSteps';
import Footer from './components/Footer';

const services = [
  { name: 'Amazon S3', logo: s3Logo },
  { name: 'CloudFront', logo: cloudfrontLogo },
];

const workflowSteps = [
  'GitHub Action is triggered on PR creation or update',
  'Build artifacts are uploaded to S3 bucket with PR-specific prefix',
  'CloudFront distribution serves the static content with low latency',
  'Preview URL is posted as a comment on the PR',
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Header
          title="PR Preview System"
          subtitle="Blazing fast PR previews with S3 and CloudFront"
        />

        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <ServiceLogos services={services} />
            <WorkflowSteps steps={workflowSteps} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
