// src/pages/GSTServices.jsx

import React from 'react';

export default function GSTServices() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        GST Services
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        We provide end-to-end GST services, from registration to return filing, ensuring your business remains compliant with all GST laws.
      </p>

      {/* New GST Registration */}
      <SectionBlock title="New GST Registration">
        <ServiceBlock
          title="For Business Owners (SMEs, MSMEs, ERP Users)"
          description="Tailored GST registration assistance for small, medium, and enterprise-level business owners."
        />
        <ServiceBlock
          title="For Individuals Person"
          description="GST registration support for independent professionals and freelancers."
        />
      </SectionBlock>

      {/* GST Return Filing */}
      <SectionBlock title="GST Return Filing">
        <ServiceBlock
          title="GSTR-1 Filing"
          description="Monthly or quarterly return for outward supplies of goods and services."
        />
        <ServiceBlock
          title="GSTR-1A Filing"
          description="Allows corrections or additions to GSTR-1 before final submission."
        />
        <ServiceBlock
          title="GSTR-3B Filing"
          description="Summary return of inward and outward supplies along with tax payment."
        />
        <ServiceBlock
          title="GSTR-9 Filing"
          description="Annual return summarizing a year's GST transactions."
        />
        <ServiceBlock
          title="GSTR-10 Filing"
          description="Final GST return to be filed after cancellation of GST registration."
        />
      </SectionBlock>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Let our experts handle your GST compliance so you can focus on your business growth.
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md shadow hover:bg-orange-700 transition"
        >
          Contact Us for GST Services
        </a>
      </div>
    </div>
  );
}

function SectionBlock({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">{title}</h2>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

function ServiceBlock({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow border">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
