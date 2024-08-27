'use server';

import { FieldValues } from 'react-hook-form';

const sendEmail = async (values: FieldValues) => {
  const getEnv = (key: string) => process.env[key] ?? '';

  const formData = new FormData();

  formData.append('name', values.name);
  formData.append('email', values.email);
  formData.append('subject', values.subject);
  formData.append('service', values.service);
  formData.append('message', values.message);

  formData.append('service_id', getEnv('EMAIL_SERVICE_ID'));
  formData.append('template_id', getEnv('EMAIL_TEMPLATE_ID'));
  formData.append('user_id', getEnv('EMAIL_PUBLIC_KEY'));
  formData.append('accessToken', getEnv('EMAIL_PRIVATE_KEY'));

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: 'POST',
    body: formData
  });

  if (!res.ok)
    return {
      message: res.statusText
    };

  return { message: 'Email sent!' };
};

export default sendEmail;
