import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — FinSight",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="1 March 2026">
      <p>
        FinSight (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is operated by Aras Digital Products d.o.o. in partnership with BSG Advisory™. This Privacy Policy explains how we collect, use, store and protect information when you use the FinSight platform.
      </p>

      <h2>1. What information we collect</h2>

      <h3>Account information</h3>
      <p>
        When you register for FinSight, we collect your name, work email address, company name and role. This information is used to create and manage your account.
      </p>

      <h3>ERP query data</h3>
      <p>
        When you submit prompts through FinSight, we process the natural language queries you enter and the results returned from your connected ERP system. We access your ERP data in read-only mode — we never write to, modify or delete any records in your source systems.
      </p>

      <h3>Usage and telemetry data</h3>
      <p>
        We collect information about how you interact with FinSight, including pages visited, features used, query response times and error logs. This data is used solely to improve the product.
      </p>

      <h3>Technical data</h3>
      <p>
        We automatically collect standard log data including IP address, browser type, operating system and referring URLs when you access our platform.
      </p>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To provide, operate and improve the FinSight service</li>
        <li>To authenticate your identity and authorise access to connected ERP systems</li>
        <li>To respond to support requests and communicate about your account</li>
        <li>To detect and prevent fraud, abuse or security incidents</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p>
        We do not sell your personal data. We do not use your ERP data to train AI models accessible to other customers.
      </p>

      <h2>3. Legal basis for processing (GDPR)</h2>
      <p>
        For users in the European Economic Area, we process personal data on the following legal bases:
      </p>
      <ul>
        <li><strong>Contract performance</strong> — to deliver the services you have agreed to</li>
        <li><strong>Legitimate interests</strong> — to improve our services, ensure security and prevent fraud</li>
        <li><strong>Legal obligation</strong> — where required by applicable law</li>
        <li><strong>Consent</strong> — for optional communications such as product updates, which you may withdraw at any time</li>
      </ul>

      <h2>4. Data retention</h2>
      <p>
        Account data is retained for the duration of your active subscription plus 90 days after termination, after which it is permanently deleted. Query logs are retained for 30 days by default. You may request earlier deletion at any time.
      </p>

      <h2>5. Data sharing</h2>
      <p>
        We share your data only with:
      </p>
      <ul>
        <li><strong>Cloud infrastructure providers</strong> — servers and databases used to operate FinSight, bound by data processing agreements</li>
        <li><strong>AI model providers</strong> — anonymised query context may be sent to AI inference APIs to generate responses; no personally identifiable information is included in these calls</li>
        <li><strong>Legal authorities</strong> — only when required by law or valid legal process</li>
      </ul>

      <h2>6. Your rights</h2>
      <p>Under GDPR and applicable data protection law, you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data (&quot;right to be forgotten&quot;)</li>
        <li>Object to or restrict certain types of processing</li>
        <li>Receive your data in a portable format</li>
        <li>Lodge a complaint with your national data protection authority</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at <a href="mailto:privacy@finsight.ai">privacy@finsight.ai</a>.
      </p>

      <h2>7. Cookies</h2>
      <p>
        We use essential cookies to operate the platform and optional analytics cookies to understand usage. See our <a href="/cookies">Cookie Policy</a> for full details.
      </p>

      <h2>8. Security</h2>
      <p>
        We implement industry-standard technical and organisational measures to protect your data. See our <a href="/security">Security page</a> for details.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We will notify you of material changes by email or by a notice on the platform. Continued use of FinSight after changes take effect constitutes acceptance of the revised policy.
      </p>

      <h2>10. Contact</h2>
      <p>
        For privacy-related questions, contact our Data Protection team at <a href="mailto:privacy@finsight.ai">privacy@finsight.ai</a>.
      </p>
    </LegalLayout>
  );
}
