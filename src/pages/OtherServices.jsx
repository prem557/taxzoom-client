import { Link } from 'react-router-dom';

export default function OtherServices() {
  const services = [
    {
      title: 'MSME / Udyam Registration',
      description: 'Register your business and avail government schemes and incentives.',
      path: '/otherservices/msme-registration',
    },
    {
      title: 'FSSAI Registration',
      description: 'Obtain your FSSAI license to run a food business legally and confidently.',
      path: '/otherservices/fssai-registration',
    },
    {
      title: 'PF Registration',
      description: 'Ensure provident fund compliance for your employees and business.',
      path: '/otherservices/pf-registration',
    },
    {
      title: 'ESI Registration',
      description: 'Provide medical and financial support to your employees under ESI Act.',
      path: '/otherservices/esi-registration',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">Other Professional Services</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {services.map(({ title, description, path }) => (
          <div
            key={title}
            className="border rounded-xl p-6 shadow-md hover:shadow-lg transition-all bg-white"
          >
            <h2 className="text-2xl font-semibold text-orange-700 mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <Link
              to={path}
              className="inline-block mt-auto text-blue-600 hover:underline font-medium"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
