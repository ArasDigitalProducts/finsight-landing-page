import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy — FinSight",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="1 March 2026">
      <p>
        This Cookie Policy explains how FinSight uses cookies and similar tracking technologies when you visit our website or use our platform. By continuing to use FinSight, you agree to our use of cookies as described below.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device by your browser when you visit a website. They allow the site to remember information about your visit, such as your login session or preferences, making your next visit easier and more useful.
      </p>

      <h2>2. Cookies we use</h2>

      <h3>Essential cookies</h3>
      <p>
        These cookies are necessary for the platform to function. They cannot be disabled. They include:
      </p>
      <ul>
        <li><strong>Session cookies</strong> — keep you logged in as you navigate the platform</li>
        <li><strong>Security cookies</strong> — help protect against cross-site request forgery (CSRF)</li>
        <li><strong>Load balancing cookies</strong> — ensure stable routing to our infrastructure</li>
      </ul>

      <h3>Analytics cookies</h3>
      <p>
        With your consent, we use analytics cookies to understand how users interact with FinSight. This helps us improve the product. We use privacy-focused analytics that do not share data with advertising networks. Data collected includes:
      </p>
      <ul>
        <li>Pages visited and time spent</li>
        <li>Features used</li>
        <li>General geographic region (country level)</li>
        <li>Device and browser type</li>
      </ul>
      <p>No personally identifiable information is included in analytics data.</p>

      <h3>Preference cookies</h3>
      <p>
        These cookies remember your settings and preferences, such as language selection or UI configuration, so you don&apos;t have to reconfigure them on each visit.
      </p>

      <h2>3. Third-party cookies</h2>
      <p>
        We do not use advertising or marketing cookies. We do not allow third-party ad networks to place cookies on our platform. Any third-party services we use (such as our analytics provider) are bound by strict data processing agreements.
      </p>

      <h2>4. Managing cookies</h2>
      <p>
        You can control cookies through your browser settings. Most browsers allow you to:
      </p>
      <ul>
        <li>View cookies currently stored on your device</li>
        <li>Block all or specific cookies</li>
        <li>Delete cookies when you close your browser</li>
      </ul>
      <p>
        Note that disabling essential cookies will prevent FinSight from functioning correctly. Disabling analytics cookies has no effect on your use of the platform.
      </p>
      <p>
        For instructions on managing cookies in your specific browser, visit your browser&apos;s help documentation.
      </p>

      <h2>5. Cookie retention</h2>
      <ul>
        <li><strong>Session cookies</strong> — deleted when you close your browser</li>
        <li><strong>Persistent cookies</strong> — retained for up to 12 months unless you delete them earlier</li>
      </ul>

      <h2>6. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time. We will notify you of significant changes through the platform or by email.
      </p>

      <h2>7. Contact</h2>
      <p>
        For questions about our use of cookies, contact us at <a href="mailto:privacy@finsightagent.com">privacy@finsightagent.com</a>.
      </p>
    </LegalLayout>
  );
}
