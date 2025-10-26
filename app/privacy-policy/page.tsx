import './privacy-policy.css';

export default function NoirlyMessengerPrivacyPolicy() {
  return (
    <div className="bg-white">
      <div className="privacy-body">
        <div className="privacy-container">
          <h1 className="privacy-h1">Privacy Policy</h1>
          <div className="privacy-meta">Last updated: <span className="privacy-highlight">October 26, 2025</span> — Noirly Messenger by <strong>Aneesh Pissay</strong></div>
          
          <div className="privacy-section">
            <h2 className="privacy-h2">Overview</h2>
            <p>This Privacy Policy describes how <strong>Aneesh Pissay</strong> (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) collects, uses, and shares information for the mobile application <span className="privacy-highlight">&quot;Noirly Messenger&quot;</span> (the &quot;App&quot;). This App is developed and published by an individual hobby developer.</p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-h2">1. Information I Collect</h2>
            <p>I may collect and process the following types of information:</p>
            <ul>
              <li><strong>Account Information:</strong> When you sign in (e.g. Google Sign-In) I may collect your name, email address and profile information.</li>
              <li><strong>Contacts & Address Book:</strong> If you grant permission the App may access your contacts to help you connect with friends.</li>
              <li><strong>Messages & Media:</strong> Messages, photos, videos, audio, attachments and files you send or store using the App.</li>
              <li><strong>Device & Usage Data:</strong> Device model, OS version, app version, unique device identifiers, IP address, crash reports and analytics (to improve the App).</li>
              <li><strong>Location Data:</strong> If you allow location access the App may collect coarse or precise location.</li>
              <li><strong>Camera & Microphone:</strong> If you grant permission the App may access camera and microphone for capturing photos, videos, and voice/video calls.</li>
              <li><strong>Storage & Files:</strong> Access to local files and media to enable sharing and file transfers.</li>
              <li><strong>Push Notifications:</strong> Token used by Firebase Cloud Messaging (FCM) or Notifee for delivering push notifications.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-h2">2. Why I Collect Data</h2>
            <p>I collect data to:</p>
            <ul>
              <li>Provide core messaging features (send/receive messages, media, voice/video calls).</li>
              <li>Authenticate users and manage accounts.</li>
              <li>Store, sync and backup messages and media.</li>
              <li>Provide real-time messaging and notifications.</li>
              <li>Improve app stability and monitor crashes (Crashlytics) and usage (Analytics).</li>
              <li>Prevent abuse and provide basic support.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-h2">3. Third-Party Services</h2>
            <p>The App uses third-party services which may independently collect information. These include (but are not limited to):</p>
            <ul>
              <li><span className="privacy-highlight">Firebase</span> (Authentication, Firestore, Storage, Analytics, Crashlytics, Cloud Messaging)</li>
              <li><span className="privacy-highlight">Google Sign-In</span></li>
              <li><span className="privacy-highlight">Notifee</span> (notifications)</li>
              <li><span className="privacy-highlight">Stream / WebRTC</span> or other video/voice SDKs</li>
              <li><span className="privacy-highlight">Google Maps</span> (if map features are enabled)</li>
              <li>Any SDKs for file picking, sharing, or cloud integration</li>
            </ul>
            <p>These services have their own privacy policies and you should review them before using the App.</p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-h2">4. Data Storage & Retention</h2>
            <ul>
              <li>Messages and media you send may be stored on Firestore or Cloud Storage to enable syncing and delivery.</li>
              <li>I retain data only as long as necessary to provide the service and comply with legal obligations.</li>
              <li>You may request deletion of your account and associated data by contacting the developer (see Contact below).</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-h2">5. Data Sharing & Disclosure</h2>
            <ul>
              <li>I will <strong>not sell</strong> your personal data.</li>
              <li>I may share data with the third-party providers listed above to provide functionality (e.g., Firebase for storage and messaging).</li>
              <li>I may disclose information to comply with legal requests, enforce terms, or protect rights and safety.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-h2">6. Security</h2>
            <p>I take reasonable measures to protect data (transport encryption, authentication, secure cloud storage). However, no system is 100% secure — use caution with sensitive information.</p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-h2">7. Children&apos;s Privacy</h2>
            <p>The App is not directed to children under 13. I do not knowingly collect personal information from children under 13.</p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-h2">8. Your Rights</h2>
            <p>Depending on your jurisdiction you may have rights to access, correct, or delete your data. To exercise these rights contact the developer at the email below.</p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-h2">9. Changes to This Policy</h2>
            <p>I may update this Privacy Policy; the &quot;Last updated&quot; date above will reflect changes.</p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-h2">Contact</h2>
            <p>If you have questions or want to request data deletion, contact:</p>
            <p><strong>Email:</strong> <a href="mailto:contact@aneesh-pissay.in" className="privacy-highlight">contact@aneesh-pissay.in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}