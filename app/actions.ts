"use server";

import { Resend } from "resend";

export type LeadSubmission = {
  source: string;
  name: string;
  email?: string;
  phone: string;
  hospital: string;
  specialty?: string;
  line?: string;
  notes?: string;
};

export type LeadSubmissionResult = { error?: string };

const SALES_EMAIL = "sales@scene-uae.com";
const MAX_FIELD_LENGTH = 250;
const MAX_NOTES_LENGTH = 2_000;

function clean(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function submitLead(
  submission: LeadSubmission,
): Promise<LeadSubmissionResult> {
  const source = clean(submission.source);
  const name = clean(submission.name);
  const email = clean(submission.email);
  const phone = clean(submission.phone);
  const hospital = clean(submission.hospital);
  const specialty = clean(submission.specialty);
  const line = clean(submission.line);
  const notes = clean(submission.notes, MAX_NOTES_LENGTH);

  if (!source || !name || !phone || !hospital) {
    return { error: "Please complete all required fields and try again." };
  }

  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  const apiKey = process.env.SEND_RESEND;
  const from = process.env.RESEND_FROM_EMAIL || "Scene Medical Supplies <sales@scene-uae.com>";

  if (!apiKey) {
    console.error("Resend is not configured. Set SEND_RESEND.");
    return { error: "The form is temporarily unavailable. Please call us instead." };
  }

  const details = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Hospital / Facility", hospital],
    ["Specialty", specialty],
    ["Product line", line],
    ["Notes", notes],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [SALES_EMAIL],
      replyTo: email || undefined,
      subject: `New website lead: ${source}`,
      text: `A new website lead was submitted.\n\nSource: ${source}\n\n${details}`,
    });

    if (error) {
      console.error("Resend could not send the lead email:", error);
      return { error: "We could not send your request. Please try again shortly." };
    }
  } catch (error) {
    console.error("Lead email submission failed:", error);
    return { error: "We could not send your request. Please try again shortly." };
  }

  return {};
}
