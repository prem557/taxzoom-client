export default function DataSecurity() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-orange-600">Data Security</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        We take your privacy and data security seriously. Your documents and personal data are encrypted and securely stored in compliance with international data protection standards.
      </p>
      <ul className="list-disc list-inside text-left text-gray-600 space-y-2">
        <li>256-bit SSL Encryption</li>
        <li>Secure Cloud Storage (AWS/Azure)</li>
        <li>Access Control & Audit Trails</li>
        <li>No data sharing without consent</li>
      </ul>
    </div>
  );
}
