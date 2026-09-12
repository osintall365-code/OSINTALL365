/**
 * OSINTALL365 Gmail intake bridge.
 *
 * Deploy this script as a Google Apps Script Web App that executes as the
 * deploying account. It sends website intake submissions to the OSINTALL365
 * Gmail mailbox using Google's built-in Gmail service.
 *
 * Security note: Do not put Gmail credentials, OAuth tokens, API keys, or
 * client secrets in the GitHub repository or website JavaScript.
 */

// Eleanor is the operations/intake routing identity. Gmail plus-addressing
// delivers this alias to the OSINTALL365@gmail.com inbox.
const DESTINATION_EMAIL = 'osintall365+eleanor@gmail.com';
const MAX_FIELD_LENGTH = 4000;

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      service: 'OSINTALL365 Gmail intake bridge',
      status: 'online',
      route: 'Eleanor / Operations / Lead Triage'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {};

    const organization = clean_(p.organization);
    const contactName = clean_(p.contactName);
    const contactEmail = clean_(p.contactEmail);
    const service = clean_(p.service);
    const concern = clean_(p.concern);
    const outcome = clean_(p.outcome);
    const urgency = clean_(p.urgency);
    const authorization = clean_(p.authorization);
    const sensitiveData = clean_(p.sensitiveData);

    if (!organization || !contactEmail || !service || !concern || !authorization) {
      return response_({
        ok: false,
        error: 'Required consultation fields are missing.'
      });
    }

    const subject = `NEW LEAD | ${service} | ${organization}`;
    const body = [
      'OSINTALL365 NEW CONSULTATION',
      '',
      'ROUTING: Eleanor — Operations / Lead Triage',
      `Agent address: ${DESTINATION_EMAIL}`,
      '',
      `Organization: ${organization}`,
      `Contact name: ${contactName || 'Not provided'}`,
      `Contact email: ${contactEmail}`,
      `Service: ${service}`,
      `Concern: ${concern}`,
      `Desired outcome: ${outcome || 'Not provided'}`,
      `Urgency: ${urgency || 'Not provided'}`,
      '',
      `Authorization confirmed: ${authorization}`,
      `Sensitive-data handling acknowledged: ${sensitiveData || 'Not provided'}`,
      '',
      'PAYMENT STATUS: No payment requested at intake.',
      'Payment destination for approved engagements: https://www.paypal.me/OSINTALL365',
      '',
      'CONTROL: No engagement approval, scope expansion, pricing decision, or outgoing expenditure is authorized by this submission.',
      'All outgoing business spending requires a separate owner approval for the specific transaction.',
      '',
      `Received: ${new Date().toISOString()}`
    ].join('\n');

    GmailApp.sendEmail({
      to: DESTINATION_EMAIL,
      subject: subject,
      body: body,
      replyTo: contactEmail,
      name: 'OSINTALL365 — Eleanor'
    });

    return response_({ ok: true, status: 'received', route: 'eleanor' });
  } catch (err) {
    console.error(err);
    return response_({
      ok: false,
      error: 'The intake could not be delivered. Please use the email fallback.'
    });
  }
}

function clean_(value) {
  return String(value || '').trim().slice(0, MAX_FIELD_LENGTH);
}

function response_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
