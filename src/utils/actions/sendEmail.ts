'use server';

import { FieldValues } from 'react-hook-form';

const sendEmail = async (values: FieldValues) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return;

  const formData = new FormData();

  formData.append('name', values.name);
  formData.append('email', values.email);
  formData.append('subject', values.subject);
  formData.append('service', values.service);
  formData.append('message', values.message);

  const res = await fetch('https://formspree.io/f/mrbzjkld', {
    method: 'POST',
    body: formData
  });

  if (!res.ok) throw new Error(res.statusText);
};

export default sendEmail;
