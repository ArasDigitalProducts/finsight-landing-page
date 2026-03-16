import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Security — FinSight",
};

export default function SecurityPage() {
  return (
    <LegalLayout title="Security" lastUpdated="1 March 2026">
      <p>
        Security is foundational to FinSight. We handle sensitive financial data and take our responsibility to protect it seriously. This page describes the technical and organisational measures we have in place.
      </p>

      <h2>1. Data encryption</h2>
      <p>
        All data transmitted between your browser, our platform and your ERP is encrypted in transit using TLS 1.2 or higher. Data at rest is encrypted using AES-256. Encryption keys are managed using hardware security modules (HSMs) and rotated on a regular schedule.
      </p>

      <h2>2. ERP access model</h2>
      <p>
        FinSight accesses your ERP data in <strong>read-only mode exclusively</strong>. We request only the minimum permissions necessary to respond to your queries. We never write to, modify or delete records in your source systems. Connection credentials are stored encrypted and are never exposed in logs or API responses.
      </p>

      <h2>3. Authentication and access control</h2>
      <ul>
        <li>Multi-factor authentication (MFA) is available and recommended for all accounts</li>
        <li>Role-based access control (RBAC) allows organisations to limit which users can access which data</li>
        <li>All sessions are time-limited and invalidated on logout</li>
        <li>Failed login attempts trigger account lockout after a configurable threshold</li>
        <li>Access logs are retained for audit purposes</li>
      </ul>

      <h2>4. Infrastructure security</h2>
      <p>
        FinSight is hosted on enterprise-grade cloud infrastructure in the European Union. Our infrastructure is:
      </p>
      <ul>
        <li>Isolated per customer using logical separation</li>
        <li>Protected by network firewalls and intrusion detection systems</li>
        <li>Monitored 24/7 for anomalous activity</li>
        <li>Backed up continuously with point-in-time recovery</li>
        <li>Deployed across multiple availability zones for resilience</li>
      </ul>

      <h2>5. AI and data isolation</h2>
      <p>
        Your ERP data and query history are strictly isolated from other customers. When queries are sent to AI inference APIs, they are anonymised — no organisation identifiers, user names or raw ERP records are included in model inputs. We do not use your data to train shared AI models.
      </p>

      <h2>6. Application security</h2>
      <ul>
        <li>All code changes go through peer review before deployment</li>
        <li>We perform automated vulnerability scanning on every build</li>
        <li>Dependencies are monitored for known vulnerabilities and updated regularly</li>
        <li>Input validation and output sanitisation are enforced throughout the platform</li>
        <li>We follow OWASP secure development guidelines</li>
      </ul>

      <h2>7. Incident response</h2>
      <p>
        In the event of a security incident affecting your data, we will notify you within 72 hours of becoming aware of the breach, in accordance with GDPR Article 33. Our incident response team is on call around the clock.
      </p>

      <h2>8. Compliance</h2>
      <p>
        FinSight is designed and operated to comply with:
      </p>
      <ul>
        <li>General Data Protection Regulation (GDPR)</li>
        <li>EU data residency requirements — all data remains within the EU</li>
      </ul>
      <p>
        We are working towards SOC 2 Type II certification. Documentation on our controls is available to enterprise customers under NDA.
      </p>

      <h2>9. Responsible disclosure</h2>
      <p>
        If you discover a potential security vulnerability in FinSight, we ask that you report it to us responsibly before making it public. Please email <a href="mailto:security@finsightagent.com">security@finsightagent.com</a> with details. We will acknowledge your report within 24 hours and aim to resolve confirmed vulnerabilities within 30 days.
      </p>
      <p>
        We do not take legal action against researchers who follow responsible disclosure practices.
      </p>

      <h2>10. Contact</h2>
      <p>
        For security-related questions or to report a vulnerability, contact <a href="mailto:security@finsightagent.com">security@finsightagent.com</a>.
      </p>
    </LegalLayout>
  );
}
