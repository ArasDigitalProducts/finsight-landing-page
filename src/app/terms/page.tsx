import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — FinSight",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="1 March 2025">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the FinSight platform, operated by Aras Digital Products d.o.o. in partnership with BSG Advisory™. By accessing or using FinSight, you agree to be bound by these Terms.
      </p>

      <h2>1. Description of service</h2>
      <p>
        FinSight is an AI-powered financial controlling platform that connects to your organisation&apos;s ERP system and enables users to query financial data using natural language. The platform returns structured insights, analyses and reports derived from your connected data sources.
      </p>

      <h2>2. Access and accounts</h2>
      <p>
        Access to FinSight is provided on a subscription basis. You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account. You must notify us immediately of any unauthorised use.
      </p>
      <p>
        You must be at least 18 years old and authorised to act on behalf of your organisation to use FinSight.
      </p>

      <h2>3. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use FinSight for any unlawful purpose or in violation of any applicable regulation</li>
        <li>Attempt to gain unauthorised access to any part of the platform or connected systems</li>
        <li>Reverse engineer, decompile or disassemble any component of FinSight</li>
        <li>Use FinSight to process data you are not authorised to access</li>
        <li>Interfere with the availability or integrity of the platform</li>
        <li>Resell, sublicense or make FinSight available to third parties without our written consent</li>
      </ul>

      <h2>4. Your data and ERP access</h2>
      <p>
        You retain full ownership of your ERP data. By connecting your ERP to FinSight, you grant us a limited, read-only licence to access the data necessary to provide the service. We do not write to, modify or delete any records in your source systems.
      </p>
      <p>
        You are responsible for ensuring you have the right to connect your ERP data to FinSight and that doing so complies with your internal policies and applicable law.
      </p>

      <h2>5. AI-generated outputs</h2>
      <p>
        FinSight uses AI models to interpret queries and generate financial insights. While we strive for accuracy, AI-generated outputs may contain errors or omissions. You are responsible for verifying the accuracy of any insights before making business decisions based on them. FinSight outputs do not constitute financial, legal or professional advice.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        FinSight, including its software, design, trademarks and documentation, is the intellectual property of Aras Digital Products d.o.o. and its licensors. Nothing in these Terms transfers any IP rights to you.
      </p>
      <p>
        Any feedback or suggestions you provide about FinSight may be used by us to improve the product without obligation to you.
      </p>

      <h2>7. Availability and support</h2>
      <p>
        We aim to provide a reliable service but do not guarantee uninterrupted availability. Planned maintenance will be communicated in advance where possible. Support is available via email during business hours.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, FinSight and its operators shall not be liable for any indirect, incidental, special, consequential or punitive damages, including loss of profits or data, arising from your use of the platform.
      </p>
      <p>
        Our total liability to you in any twelve-month period shall not exceed the fees you paid to us during that period.
      </p>

      <h2>9. Termination</h2>
      <p>
        Either party may terminate the agreement with 30 days&apos; written notice. We may suspend or terminate your access immediately if you breach these Terms. Upon termination, your access will cease and your data will be deleted in accordance with our Privacy Policy.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Republic of Croatia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Zagreb, Croatia.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. We will provide at least 30 days&apos; notice of material changes. Continued use of FinSight after changes take effect constitutes acceptance of the revised Terms.
      </p>

      <h2>12. Contact</h2>
      <p>
        For questions about these Terms, contact us at <a href="mailto:legal@finsight.ai">legal@finsight.ai</a>.
      </p>
    </LegalLayout>
  );
}
