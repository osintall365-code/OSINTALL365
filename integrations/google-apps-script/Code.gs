/**
 * OSINTALL365 Gmail intake bridge.
 *
 * Google Apps Script runs this under the Google account that authorizes
 * the deployment. No Gmail password, OAuth token, or API secret is stored
 * in this repository.
 *
 * Eleanor is represented by the OSINTALL365 Gmail routing alias:
 * osintall365+eleanor@gmail.com
 */

const DESTINATION_EMAIL = 'osintall365+eleanor@gmail.com';
const OWNER_NOTIFICATION_EMAIL = 'osintall365@gmail.com';
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
    const contactPhone = clean_(p.contactPhone);
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

    const received = new Date().toISOString();
    const subject = `NEW CLIENT | ${service} | ${organization}`;

    const eleanorBody = [
      'OSINTALL365 NEW CLIENT INTAKE',
      '',
      'ROUTING: Eleanor — Operations / Lead Triage',
      '',
      `Organization: ${organization}`,
      `Contact name: ${contactName || 'Not provided'}`,
      `Contact email: ${contactEmail}`,
      `Contact phone: ${contactPhone || 'Not provided'}`,
      `Service: ${service}`,
      `Concern: ${concern}`,
      `Desired outcome: ${outcome || 'Not provided'}`,
      `Urgency: ${urgency || 'Not provided'}`,
      '',
      `Authorization confirmed: ${authorization}`,
      `Sensitive-data handling acknowledged: ${sensitiveData || 'Not provided'}`,
      '',
      'PAYMENT DESTINATION:',
      'https://www.paypal.me/OSINTALL365',
      '',
      'CONTROL:',
      'Eleanor may handle authorized customer intake and work within the authorized scope.',
      'No outgoing business spending is authorized by this intake.',
      'Every outgoing transaction still requires separate owner approval.',
      '',
      `Received: ${received}`
    ].join('\n');

    const ownerBody = [
      'OSINTALL365 NEW CLIENT NOTIFICATION',
      '',
      `Organization: ${organization}`,
      `Contact name: ${contactName || 'Not provided'}`,
      `Contact email: ${contactEmail}`,
      `Contact phone: ${contactPhone || 'Not provided'}`,
      `Service: ${service}`,
      `Urgency: ${urgency || 'Not provided'}`,
      '',
      'Eleanor has received the client intake.',
      'Owner notification only; no spending authorization is created by this message.',
      '',
      `Received: ${received}`
    ].join('\n');

    GmailApp.sendEmail({
      to: DESTINATION_EMAIL,
      subject: subject,
      body: eleanorBody,
      replyTo: contactEmail,
      name: 'OSINTALL365 — Eleanor'
    });

    GmailApp.sendEmail({
      to: OWNER_NOTIFICATION_EMAIL,
      subject: subject,
      body: ownerBody,
      replyTo: contactEmail,
      name: 'OSINTALL365 — Client Notification'
    });

    return response_({
      ok: true,
      status: 'received',
      route: 'eleanor'
    });
  } catch (err) {
    console.error(err);
    return response_({
      ok: false,
      error: 'The intake could not be delivered.'
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
