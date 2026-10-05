import { client } from "../data/client";

const updated = "5 October 2026";

export function PrivacyPolicy() {
  const { centre } = client;
  const mailHref = `mailto:${centre.email}`;

  return (
    <section className="mvSection mv-max" id="privacy">
      <div className="mvLegal">
        <div className="head">
          <span className="move-label">Legal</span>
          <h2>Privacy Policy</h2>
          <div className="rule" />
          <p className="lead">
            How Move, The Movement Clan (&ldquo;Move&rdquo;, &ldquo;we&rdquo;)
            handles your personal information when you use this website. Last
            updated {updated}.
          </p>
        </div>

        <div className="mvProse">
          <h3>1. Who we are</h3>
          <p>
            Move is a small-group and personal training studio at{" "}
            {centre.address}. You can reach us at{" "}
            <a href={mailHref}>{centre.email}</a> or {centre.phone}.
          </p>

          <h3>2. Information we collect</h3>
          <p>
            <strong>When you browse this website,</strong> we may automatically
            receive basic technical information such as your browser, device
            type and the pages you visit, which helps us understand how the site
            is used. The enquiry and careers forms on this site only prepare a
            WhatsApp message or email draft; nothing is sent until you press
            send in WhatsApp or your mail app, and we then receive it as an
            ordinary message.
          </p>
          <p>
            <strong>Enquiries and job applicants.</strong> If you contact us or
            apply for a role, we keep your name, email, phone number, message,
            and any resume you send, so we can respond.
          </p>
          <p>
            <strong>Members (client login).</strong> When you have an account on
            our client platform, we hold:
          </p>
          <ul>
            <li>
              <strong>Account details:</strong> your name, email address and
              password (stored securely, never in readable form).
            </li>
            <li>
              <strong>Profile details:</strong> your home centre, assigned
              coach, emergency contact and join date.
            </li>
            <li>
              <strong>Training activity:</strong> session bookings,
              cancellations, rescheduling requests, attendance and credit
              balances.
            </li>
          </ul>
          <p>
            <strong>Staff and coaches</strong> have accounts with similar
            account details, plus the centres they work at.
          </p>

          <h3>3. How we use it</h3>
          <ul>
            <li>To run your membership: bookings, attendance and credits.</li>
            <li>
              To send service emails such as account verification, password
              resets, booking confirmations and cancellations, session changes
              and reminders.
            </li>
            <li>To reply to enquiries and consider job applications.</li>
            <li>To keep accounts secure and investigate misuse.</li>
            <li>To understand how the site is used and improve it.</li>
          </ul>
          <p>We do not sell your personal information.</p>

          <h3>4. Who we share data with</h3>
          <p>
            We use trusted service providers, such as website hosting, analytics
            and email delivery, to run the website and platform. They handle
            your information only as needed to provide those services. Some
            features also load content from other companies, who may collect
            technical data (such as your IP address) under their own policies:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>{" "}
              — the embedded map and the Google reviews we display.
            </li>
            <li>
              <a
                href="https://privacycenter.instagram.com/policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram (Meta)
              </a>{" "}
              — our own reels embedded in the gallery. Loading them lets Instagram receive technical data about your visit.
            </li>
          </ul>
          <p>
            We may also disclose information where required by law or to protect
            our rights and the safety of others, including if someone breaches
            our terms. Once you follow a link to another website or app (for
            example Instagram or Google), that site&rsquo;s own privacy policy
            applies, and we are not responsible for its practices.
          </p>

          <h3>5. Cookies, security and retention</h3>
          <p>
            The client platform uses a cookie to keep you signed in. This
            website sets no marketing or tracking cookies; embedded third-party
            content (maps, Instagram) may set their own once loaded.
          </p>
          <p>
            To protect your information, we take reasonable precautions and
            follow industry good practice to prevent its loss, misuse,
            unauthorised access, disclosure or alteration. No system is
            perfectly secure, so we cannot guarantee absolute security.
          </p>
          <p>
            <strong>Where data is stored.</strong> Our platform data is stored
            on secure servers in India. Some of our service providers (section
            4) may process limited data outside India.
          </p>
          <p>
            <strong>How long we keep it.</strong> We keep personal information
            only for as long as we need it for the purposes in this policy, to
            meet our legal, tax and accounting obligations, and to resolve
            disputes. When it is no longer needed, we delete it or anonymise it.
            Deleting or closing an account does not instantly remove copies held
            in backups or system logs; these are overwritten or removed on a
            regular cycle.
          </p>

          <h3>6. Consent and withdrawing it</h3>
          <p>
            When you give us personal information to join, book, enquire or
            apply, we take it that you agree to our using it for that purpose
            only. If we want to use it for something else, such as marketing, we
            will ask for your permission first or give you the chance to say no.
            We send promotional emails only with your permission, and you can
            unsubscribe at any time.
          </p>
          <p>
            You can withdraw your consent to our contacting you, or to our
            continued use or disclosure of your information, at any time by
            emailing <a href={mailHref}>{centre.email}</a> or writing to us at
            the centre address above. Withdrawing consent may mean we can no
            longer provide some services, such as bookings.
          </p>

          <h3>7. Your rights</h3>
          <p>
            Under India&rsquo;s Digital Personal Data Protection Act, 2023, you
            may ask us to access, correct or erase personal information we hold
            about you, and to withdraw consent for its use (we may need to keep
            some records where the law requires). Email{" "}
            <a href={mailHref}>{centre.email}</a> and we will respond within a
            reasonable time.
          </p>

          <h3>8. Children</h3>
          <p>
            This website is not directed at children under 18. Please do not
            send us a child&rsquo;s information without a parent or
            guardian&rsquo;s involvement.
          </p>

          <h3>9. Changes</h3>
          <p>
            We may update this policy. The date at the top shows when it last
            changed, and changes take effect when posted on this page. If Move
            is sold, merged or reorganised, your information may be transferred
            to the new owner so we can continue to serve you, on terms no less
            protective than this policy.
          </p>

          <h3>10. Contact and complaints</h3>
          <p>
            To access, correct or delete the information we hold about you,
            withdraw consent, ask a question or make a complaint, contact
            Move&rsquo;s Privacy Compliance Officer at{" "}
            <a href={mailHref}>{centre.email}</a> or write to {centre.name},{" "}
            {centre.address}. We aim to respond within 30 days.
          </p>
        </div>
      </div>
    </section>
  );
}
